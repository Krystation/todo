import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import SingleTodo from './SingleTodo';
import AddTodo from './AddTodo';
import NoTodo from './NoTodo';
import ComplexTodo from './ComplexTodo'

class App extends Component {
  	constructor(){
		super();
		
	  	this.state = {
			todos: []
	  	}
  	}
	// Function called wheninput text changes
	onInputChange = e => {
	  	this.setState({
			currentTodo: e.target.value
	 	});
	}
	// Method for when button gets clicked
	onClick = () => {
		// Create an exact copy of the orginal todo list
		let todosCopy = this.state.todos.slice();
		todosCopy.push(this.state.currentTodo);

		// set the state
		this.setState({
			todos: todosCopy,
			currentTodo: ""
		})
	}
	// Delete to do when click on X button
	deleteTodo = i => {
		let todosCopy = this.state.todos.slice();
		todosCopy.splice(i, 1);
		this.setState({
			todos: todosCopy
		})
	}
	render(){
		// Unorder list of all out todos (Map: takes element and index and returns unordered list)
		let bulletTodo = this.state.todos.map((e, i) => {
			return(
				// Key is needed for the iteration, needs to be unique
				<SingleTodo todo={e} delete={() => this.deleteTodo(i)}/>
			);
		});
		return(
			<div className="todo_list">
				<h1 className="page_title">Let's Get Shit Done Today</h1>
				<div className="add_section">
					<input className="new_item" placeholder="enter todos" value={this.state.currentTodo} onChange={this.onInputChange}/>
					<button className="add_btn" onClick={this.onClick}>ADD!</button>
				</div>
				{this.state.todos.length === 0 ? <NoTodo/> : <ul className="list">{bulletTodo}</ul>}
			</div>
		);
  	}
}

export default App;
