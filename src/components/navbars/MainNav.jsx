var React = require('react');
import Logout from 'Logout';
var {Link, IndexLink} = require('react-router');
import { Router , browserHistory } from 'react-router';

export default class MainNav extends React.Component {
    constructor(props, context) {
		super(props, context);
		this.state = {
			loginUser: '',
			fullLoginUser: '',
			missions: [],
			quests: [],
			createdOn: ''
		};
	}
    logoutHandler(){
		fetch('/users/logout', {
			method: 'delete',
			headers: {
				Auth: localStorage.getItem('token'),
			},
			credentials: 'include'
		}).then((results) => {
			browserHistory.push('/');
		});
	}
    render() {
        return (
            <header>
                <nav className="navbar navbar-default navbar-fixed-top clearfix" role="navigation" id="mainNav1">
					<div className="container">
						<div className="navbar-header" id="mainNav">
	                        <Link to="/" className="navbar-brand"><img src="#" alt="#" className="img-responsive"/></Link>
	                            <h1 id="siteName" className="navbar">Bubo</h1>
							<button type="button" className="navbar-toggle collapsed mainnavbutton" data-toggle="collapse" data-target="#bubo-main-nav">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						<div className="collapse navbar-collapse main-nav" id="bubo-main-nav">
							<ul className="nav navbar-nav navbar-right" id="mainNavli">
								<li><Link to="/register" className="landNavitem"> Missions </Link></li>
								<li><Link to="/login" className="landNavitem" >Quests</Link></li>
                                <li className="landNavitem"><Logout onLogout={this.logoutHandler.bind(this)}/></li>
                               
							</ul>
						</div>
					</div>
				</nav>
            </header>
        )
    }
}