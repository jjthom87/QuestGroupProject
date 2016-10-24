// DO NOT USE
// import React, { Component } from 'react';
// import { Router , browserHistory } from 'react-router';
// var {Link, IndexLink} = require('react-router');

// import MissionMain from "MissionMain";
// import QuestMain from "QuestMain";
// import Logout from 'Logout';
// import MainNav from 'MainNav';
// import MissionSearchList from 'MissionSearchList';
// import QuestSearchList from 'QuestSearchList';

// export default class UserForAllPage extends React.Component {
//   	constructor(props, context) {
// 		super(props, context);
// 		this.state = {
// 			loginUser: '',
// 			loginId: this.props.params.id,
// 			fullLoginUser: '',
// 			missions: [],
// 			quests: [],
//             missiontasks: [],
//             milestonetasks: [],
//             milestones: [],
// 			createdOn: '',
// 			searchText: ''
// 		};
// 	}
// 	handleSearch(searchText){
// 		this.setState({
// 			searchText: searchText.toLowerCase()
// 		})
// 	}
// 	logoutHandler(){
// 		fetch('/api/users/logout', {
// 			method: 'delete',
// 			headers: {
// 				Auth: localStorage.getItem('token'),
// 			},
// 			credentials: 'include'
// 		}).then((results) => {
// 			browserHistory.push('/');
// 		});
// 	}

// 	componentWillMount(){
//         fetch(`/api/search/name/${this.props.params.id}`, {
//             headers: {
//                 Auth: localStorage.getItem('token'),
//                 'content-type': 'application/json',
//                 'accept': 'application/json'
//             },
//             credentials: 'include'
//         }).then((response) => response.json())
//         .then((results) => {
//             this.setState({
//                 missions: results.missions,
//                 quests: results.quests,
//                 missiontasks: results.missiontasks,
//                 milestones: results.milestones,
//                 milestonetasks: results.milestonetasks
//             });
//         });
//     }


// 	render() {

// 		const { loginUser, missions, missiontasks, quests, milestones, milestonetasks, searchText } = this.state;

//     	return (
//       		<div>
//       			<div className='container'>
//               		<MainNav/>

//                 	<div className="row">
//                			<div className="col-md-1">
//                				<SearchBarForm onSearch={this.handleSearch.bind(this)}/>
//                			</div>
// 	                <div className="row">
// 	                    <div className="col-md-1">
// 	                        <button className="btn btn-warning"><Link to="/home">Back Home</Link></button>
// 	                    </div>
// 	                </div>

//                 	<div className="row">
// 	                    <div className="panel panel-success col-md-3 qmbox">
// 	                        <MissionSearchList
// 	                            missions={missions}
// 	                            missiontasks={missiontasks}
// 	                        />
// 	                    </div>

// 	                    <div className="panel panel-success col-md-3 qmbox">
// 	                        <QuestSearchList
// 	                            quests={quests}
// 	                            milestones={milestones}
// 	                            milestonetasks={milestonetasks}
// 	                        />
//                     	</div>
//                 	</div> 
//             	</div>
//       			</div>
//       		</div>
// 		);
// 	}
// }