import React from 'react';

export default class Layout extends React.Component {

    render() {

	    return (
	    	<div>
	            <form action="/users/create" method="POST">
	                         <h1>Hello</h1>
	                         <h2>Register</h2>
	                         <div>
	                         <label>First Name</label>
	                        
	                         <input type="text" name="firstName"/>
	                         </div>
	                         <div>
	                         <label>Last Name</label>
	                        
	                         <input type="text" name="lastName"/>
	                         </div>
	                         <div>
	                         <label>Unique UserName</label>
	                        
	                         <input type="text" name="username"/>
	                         </div>
	                         <div>
	                         <label>Password</label>
	                        
	                         <input type="password" name="password"/>
	                         </div>
	                         <div>
	                         <input type="submit" value="Create Account"/>
	                         </div>
	                </form>

	                <form action="/users/login" method="POST">
	                     <h1>LOGIN</h1>
	                     <div>
	                     <label>Username</label>
	                    
	                     <input id="username" type="text" name="username" value={this.username}/>
	                     </div>
	                     <div>
	                     <label>Password</label>
	                    
	                     <input id="password" type="password" name="password" value={this.password}/>
	                     </div>
	                     <div>
	                     <input type="submit" value="Log In"/>
	                     </div>
	                 </form>
	        </div>
	    );
}