import React, { Component } from 'react';
import TodoCategory from './TodoCategory';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
	// Remove duplicate values from an array, and return a new array
	unique = (array) => {
		array.filter((item, index) => {
			array.indexOf(item) === index;
		});
	}
  	render() {
	const categories = this.props.todos.map(todo => todo.category)
	console.log(categories)

	// Create every category and display them
	return categories.map(category =>
		<TodoCategory
		key={category}
		category={category}
		markComplete={this.props.markComplete}
		delTodo = {this.props.delTodo}

	// Filter array of tasks corresponding to a specific category
		specificTodos = {this.props.todos.filter(todo => todo.category === category)}
		/>
	);
	}
}

// PropTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default Todos;
