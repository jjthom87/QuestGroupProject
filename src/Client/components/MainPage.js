// import _ from 'lodash';
// import React from 'react';

// const customStyles = {
//         content : {
//         top                   : '50%',
//         left                  : '50%',
//         right                 : 'auto',
//         bottom                : 'auto',
//         marginRight           : '-50%',
//         transform             : 'translate(-50%, -50%)'
//         }
// };

// export default class MainPage extends React.Component {

//     render() {
//         return (
// //             <div>
// //                 <div class="container col-md-6 col-md-offset-3" id="logincont">
// //                     <h1>Welcome to Quest, where your goals are stored</h1>
// //                     <h2>Please Login or Create an account</h2>

// //                     <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#loginModal">
// //                     Login
// //                     </button>

// //                     <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#registerModal">
// //                     Register
// //                     </button>



// //                     <a href="/register"><button type = "button" id="registerButton">Create An Account</button></a>
// //                     <a href="/home"><button type = "button" id="registerButton">Your Page</button></a>
// //                 </div>

// //                 <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
// //                     <div class="modal-dialog" role="document">
// //                         <div class="modal-content">
// //                             <div class="modal-header">
// //                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
// //                             <span aria-hidden="true">&times;</span>
// //                             </button>
// //                             <h4 class="modal-title" id="myModalLabel">Hello Dreamers!</h4>
// //                             </div>
// //                             <div class="modal-body">
// //                             <form action="/users/login" method="POST">
// //                                 <h1>Login to Your Account Here</h1>
// //                                 <div>
// //                                 <label>Username</label>
                                
// //                                 <input id="username" type="text" name="username" value="{{this.username}}"/>
// //                                 </div>
// //                                 <div>
// //                                 <label>Password</label>
                                
// //                                 <input id="password" type="password" name="password" value="{{this.password}}"/>
// //                                 </div>
// //                                 <div>
// //                                 <input type="submit" value="Log In"/>
// //                                 </div>
// //                             </form>

// //                     <p>
// //                         <h9>If you are re-directed back to the login page, then that means your credentials are incorrect</h9>
                        

// //                         <h9>If you don't have an account, please create one</h9>
                        


// //                         <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#registerModal" data-dismiss="modal" aria-label="Close">
// //                         Don't have an account?
// //                         </button>
// //                     </p>

// //                     </div>
                    
// //                     </div>
// //                     </div>
// //                     </div>

// //                 <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
// //                     <div class="modal-dialog" role="document">
// //                     <div class="modal-content">
// //                         <div class="modal-header">
// //                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
// //                         <span aria-hidden="true">&times;</span>
// //                         </button>
// //                         <h4 class="modal-title" id="myModalLabel">Hello Dreamers!</h4>
// //                         </div>
// //                         <div class="modal-body">
// //                             <form action="/users/create" method="POST">
// //                             <h1>Hello</h1>
// //                             <h2>Create Your Account Here</h2>
// //                             <div>
// //                             <label>First Name</label>
                            
// //                             <input type="text" name="firstName" value="{{this.firstName}}"/>
// //                             </div>
// //                             <div>
// //                             <label>Last Name</label>
                            
// //                             <input type="text" name="lastName" value="{{this.lastName}}"/>
// //                             </div>
// //                             <div>
// //                             <label>Unique UserName</label>
                            
// //                             <input type="text" name="username" value="{{this.username}}"/>
// //                             </div>
// //                             <div>
// //                             <label>Password</label>
                            
// //                             <input type="password" name="password" value="{{this.password}}"/>
// //                             </div>
// //                             <div>
// //                             <input type="submit" value="Create Account"/>
// //                             </div>
// //                             </form>
// //                             <p>
// //                             <div class="error"></div>
                            
// //                             <h9>If you are re-directed back to this page, that means the email is already in our system, or your username/password credentials are incorrect.</h9>
// //                             </p>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //         
//                 <div>
//                     <button onClick={this.props.openModal}>Open Modal</button>
//                     <Modal
//                       isOpen={this.props.modalIsOpen}
//                       onAfterOpen={this.props.afterOpenModal}
//                       onRequestClose={this.props.closeModal}
//                       style={customStyles} >
             
//                       <h2 ref="subtitle">Hello</h2>
//                       <button onClick={this.props.closeModal}>close</button>
//                       <div>I am a modal</div>
//                           <form>
//                             <input />
//                             <button>tab navigation</button>
//                             <button>stays</button>
//                             <button>inside</button>
//                             <button>the modal</button>
//                           </form>
//                     </Modal>
//                 </div>
//         );
//     } 
// }