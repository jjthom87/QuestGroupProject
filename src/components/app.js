import React from 'react';
import Modal from 'react-modal';
import _ from 'lodash';

import TodosList from './todos-list';
import CreateTodo from './create-todo';
import MainPage from './MainPage';


const todos = [
{
    task: 'make React tutorial',
    isCompleted: false
},
{
    task: 'eat dinner',
    isCompleted: true
}
];

const modals = [{
    modalIsOpen: false
}];

Modal.setAppElement('app');

export default class App extends React.Component {
     
    constructor(props) {
        super(props);

        this.state = {
            todos,
            modals
        };
    }

    _openModal() {
        this.setState({modalIsOpen: true});
    }
     
    _afterOpenModal() {
        // references are now sync'd and can be accessed. 
        this.refs.subtitle.style.color = '#f00';
    }
     
    _closeModal() {
        this.setState({modalIsOpen: false});
    }
// <MainPage
//                     modals={this.state.modals}
//                     openModal={this.openModal}
//                     afterOpenModal={this.afterOpenModal}
//                     closeModal={this.closeModal}
//                 />
    render() {
        // const {modalIsOpen} = this.state;
        const customStyles = {
            content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
            }
        };
        return (
            <div>
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#loginModal">
  Login
</button>

<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#registerModal">
  Register
</button>

                <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">Hello Dreamers!</h4>
      </div>
      <div class="modal-body">
        <form action="/users/login" method="POST">
            <h1>Login to Your Account Here</h1>
                <div>
                    <label>Username</label>
                    
                    <input id="username" type="text" name="username" value="{{this.username}}"/>
                </div>
                <div>
                    <label>Password</label>
                    
                    <input id="password" type="password" name="password" value="{{this.password}}"/>
                </div>
                <div>
                    <input type="submit" value="Log In"/>
                </div>
        </form>
        
        <p>
            <h9>If you are re-directed back to the login page, then that means your credentials are incorrect</h9>
          
          
          <h9>If you don't have an account, please create one</h9>
          
          
        
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#registerModal" data-dismiss="modal" aria-label="Close">
          Don't have an account?
        </button>
        </p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

                <h1>React ToDos App</h1>
                
                <CreateTodo
                    todos={this.state.todos}
                    createTask={this.createTask.bind(this)}
                />
                <TodosList
                    todos = {this.state.todos}
                    toggleTask = {this.toggleTask.bind(this)}
                    saveTask = {this.saveTask.bind(this)}
                    deleteTask = {this.deleteTask.bind(this)}
                />
                    <p>Welcome Home</p>
                    <a href="/logout"><button type = "button">Logout</button></a>
                    <a href="/home"><button type = "button">Home</button></a>
            </div>
        );
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ isCompleted: false });
    }

    toggleTask(task) {
        const foundTodo= _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos});
    }

    saveTask(oldTask, newTask) {
        const foundTodo=_.find(this.state.todos, todo=> todo.task ===oldTask);
        foundTodo.task=newTask;
        this.setState({todos: this.state.todos});
    }

    deleteTask(taskDelete) {
        const removeTask=_.remove(this.state.todos, todo=> todo.task ===taskDelete);
        this.setState({todos: this.state.todos});
    }

};
