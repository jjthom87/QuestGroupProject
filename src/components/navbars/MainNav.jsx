var React = require('react');
import Logout from 'Logout';
var {Link, IndexLink} = require('react-router');
import { Router , browserHistory } from 'react-router';

export default class MainNav extends React.Component {
    constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}
    logoutHandler(){
		fetch('/api/users/logout', {
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
	                        <Link to="/feedpage" className="navbar-brand hvr-bob"><img src="/images/draft2.2.png" alt="#" className="img-responsive animated lightSpeedIn"/></Link>
	                            <h1 id="siteName" className="navbar animated 1 bounce">Bubo</h1>
							<button type="button" className="navbar-toggle collapsed mainnavbutton" data-toggle="collapse" data-target="#bubo-main-nav">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						<div className="collapse navbar-collapse main-nav" id="bubo-main-nav">
							<ul className="nav navbar-nav navbar-right" id="mainNavli">
								<li><Link to="/create">Create</Link></li>
								<li><Link to="/searchall"> Explore </Link></li>
								<li><Link to="/searchusers">People</Link></li>
								<li><Link to="/userall">Profile</Link></li>
                                <li className="landNavitem"><Logout onLogout={this.logoutHandler.bind(this)}/></li>
							</ul>
						</div>
					</div>
				</nav>
            </header>
        )
    }
}