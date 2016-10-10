// import React from 'react';

// export default class Createquest extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             error: null
//         };
//     }

//     render() {
//         return (
            
//             <form onSubmit={this.changeTitle.bind(this)}>
//                 <input type="text" placeholder="Name Your Quest" ref="createInput"/>
//                 <button> Name Your Quest </button>
//                 {this.renderError()}
//             </form>
//         );
//     }

//     renderError() {
//         if(!this.state.error) {
//             return null;
//         }
//             return <div style={{color:'red'}}> { this.state.error } </div>;
        
//     }

//     changeTitle(event) {
//         event.preventDefault();

//         const createInput = this.refs.createInput;
//         const quest = createInput.value;

//         this.setState({ error: null });
//         this.props.nameQuest(quest);
//         this.refs.createInput.value = '';
//     }

// }