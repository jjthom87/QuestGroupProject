module.exports = {
	init: function(){
		this.jwt = localStorage.getItem('token');
	},
	getState: function(){
		return {
			loading: this.loading,
			error: this.error,
			user: this.userFromClaims(),
			loggedIn: this.loggedIn()
		}
	},
	userFromClaims: function(){
		return this.claims
	},
	loggedIn: function(){
		return this.claims !== null
	},
	changed: function(){
		this.trigger(this.getState());
	},
	onLoginCompleted: function(authResponse){
		if(authResponse){
			this.jwt = authResponse.jwt
			this.claims = this.parseJwt();
			this.error = false;

			localStorage.setItem('token', this.jwt);
		} else {
			this.error = "Please Login"
		}

		this.loading = false;
		this.changed();
	},
	parseJwt: function(){
		if(this.jwt === null){
			return null;
		}
		return JSON.parse(atob(this.jwt.split('.')[1]));
	}
}