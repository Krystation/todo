import React, { Component } from "react";
import AddTodo from './AddTodo';

// class SingleTodo extends Component{
//     constructor(){
//         super();
//     }
//     render(){
//         return(
//             <li onClick={this.props.delete}>{this.props.todo}<button>X</button></li>
//         );
//     }
// }

const NoTodo = props => {
    return(
        <div className="no_todos_container">
            <h2>Lets Get Started!</h2>
            <AddTodo className="Add to do button"/>
        </div>
    );
}

export default NoTodo;