var React = require('react'); 
var {Link, IndexLink} = require('react-router');

export default class LandingNav extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-default navbar-fixed-top clearfix" role="navigation" id="mainNav">
					<div className="container">
						<div className="navbar-header">
	                        <a href="" className="navbar-brand"><img src="#" alt="#" className="img-responsive"/></a>
	                            <h1 id="siteName" className="navbar">Bubo</h1>
							<button type="button" className="navbar-toggle collapsed navbutton" data-toggle="collapse" data-target="#bubo-main-nav">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						<div className="collapse navbar-collapse main-nav" id="bubo-main-nav">
							<ul className="nav navbar-nav navbar-right" id="logonli">
								<li><Link to="/register" className="landNavitem">Sign Up</Link></li>
								<li><Link to="/login" className="landNavitem" >Login</Link></li>
							</ul>
						</div>
					</div>
				</nav>
            </header>
        )
    }
}