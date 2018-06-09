import React, { Component } from "react";

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

const SingleTodo = props => {
    return(
        <li className="todo" onClick={props.delete}><button>X</button>{props.todo}</li>
    );
}

export default SingleTodo;