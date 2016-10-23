import React, { Component, cloneElement } from 'react';
var {Link, IndexLink} = require('react-router');

import UserSearchForm from 'UserSearchForm';
import UserSearchList from 'UserSearchList';
import MainNav from 'MainNav';

export default class UserSearchPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			users: [],
			searchText: '',
			loginUser: '',
			loginId: ''
		};
	}
	handleSearch(searchText){
		this.setState({
			searchText: searchText.toLowerCase()
		})
	}
	componentWillMount(){
		fetch('/api/searchusers', {
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			console.log(results);
			this.setState({
				users: results,
				loginUser: results.name,
				loginId: results.id
			});
		});
	}
	render() {

		var { users, searchText } = this.state;

		const filteredSearch = users.filter((user) => {
			var text = user.name.toLowerCase();
			return searchText.length === 0 || text.indexOf(searchText) > -1
		});

		const UserNames = users.map((user) => user.name);

    	return (
      		<div>
      			<div className='container'>
              		<MainNav/>
                	<div className="container" id="separator">
      						<div className="row text-center center-block">
			      				<div>
			                        <Link to="/home"><button className="btn btn-warning">Back Home</button></Link>
			                    </div>
			                    <br></br>
			                    <h1 className="text-center" id="pageTitle">Search All Users</h1>
			                    <UserSearchForm onSearch={this.handleSearch.bind(this)}/>		
							</div>
							<div className="row">
								<div className="text-center center-block">
									<UserSearchList
										users={filteredSearch}
									/>
								</div>
				        	</div>
      				</div>
      			</div>
      		</div>
		);
	}
}