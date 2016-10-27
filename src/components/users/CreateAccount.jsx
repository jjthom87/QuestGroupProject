import React, { Component } from 'react';

export default class CreateAccount extends React.Component {
	constructor(...args){
		super(...args)
		this.state = {
			file: '',
			imageUrl: '',
			savedImage: ''
		}
	}
	handleImageChange(e){
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imageUrl: reader.result
			})
		}
		reader.readAsDataURL(file)
	}
	onCreateUser(e){
		e.preventDefault();

		var creds = {};
		var profileImage = this.state.imageUrl;
		var name = this.refs.name.value;
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		var confirmPassword = this.refs.confirmPassword.value;

		creds.profileImage = profileImage

		if (name.length > 0) {
			this.refs.name.value = '';
			creds.name = name;
		} else {
			alert('Please Enter Name/Nickname')
		}

		if (username.length > 0) {
			this.refs.username.value = '';
			creds.username = username;
		} else {
			alert('Please Enter Username');
		}

		if (password.length > 0) {
			this.refs.password.value = '';
			creds.password = password;
		} else {
			alert('Password Must be at least 8 characters');
		}

		if (confirmPassword === password){
			this.refs.confirmPassword.value = '';
			creds.confirmPassword = confirmPassword 
		} else {
			this.refs.confirmPassword.value = '';
			alert("Passwords don't match");
		}

		this.props.onCreate(creds);
	}
	render() {
		return (
			<div>
				<div id="accountForm">
					<form onSubmit={this.onCreateUser.bind(this)}>
						<div>
							<h1 id="loginText">Create Account</h1>
						</div>
						<div id="submitButton">
							<h4 className="uploadImageText">Upload Profile Image</h4>
							<input 
								className="fileInput" 
								type="file"
								onChange={this.handleImageChange.bind(this)}
							/>
							<div> 
								<img src={this.state.imageUrl} style={{width: 150, height: 150}}/>
							</div>
							<div>
								<span className="glyphicon glyphicon-sunglasses"><input type="text" ref="name" placeholder="Enter Name/Nickname"/></span>
							</div>
							<div>
								<span className="glyphicon glyphicon-user"><input type="text" ref="username" placeholder="Enter Username"/></span>
							</div>
							<div>
								<span className="glyphicon glyphicon-lock"><input type="password" ref="password" placeholder="Enter Password"/></span>
							</div>
							<div>
								<span className="glyphicon glyphicon-lock"><input type="password" ref="confirmPassword" placeholder="Confirm Password"/></span>
							</div>
							<div id="submitButton">
								<input className="btn btn-default" type="submit" />
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}