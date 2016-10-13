var React = require('react'); 

var LandingNav = React.createClass({
    render: function () {
        return (
            <header>
            <nav className="navbar-default navbar-fixed-top clearfix" id="mainNav">
                <div className="navbar-header">
                        <a href="" className="navbar-brand"><img src="#" alt="#" className="img-responsive"/></a>
                        <h1 id="siteName" className="navbar">Bubo</h1>
                    </div>
                <div className='navbar-right'id="signButtons">
                    <Link to="/register" className="btn btn-primary">Sign Up</Link>
                    <Link to="/login" className="btn btn-primary">Login</Link>
                </div>
                <div class="collapse navbar-collapse main-nav" id="">
						<ul class="nav navbar-nav navbar-right">
							<Link to="/register" className="btn btn-primary">Sign Up</Link>
                            <Link to="/login" className="btn btn-primary">Login</Link>
						</ul>
				</div>
            </nav>
        </header>
        )
    }
})