import React, { Component } from 'react';
import Todos from './Todos';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class TodoCategory extends Component {
    render() {
        return (
            <div>
            <h2>{this.props.category}</h2>

            <ul>
            {this.props.specificTodos.map(todo =>
                <li key={todo.id}>
                <TodoItem todo={todo}
                markComplete = {this.props.markComplete}
                delTodo = {this.props.delTodo} />
                </li>
                )}
            </ul>
            </div>
     )   
    }
}

TodoCategory.propTypes = {
	category: PropTypes.string.isRequired,
	markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoCategory
