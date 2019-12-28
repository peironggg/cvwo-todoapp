import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

export class TodoItem extends Component {
    // Style of each todo
    getStyle = () => {
        return {
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through'
                : 'none'
            }
    }
    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div className = "font-sans py-3 px-10 bg-gray-100"
                style = {this.getStyle()}
                >
            <p>
                <input type = 'checkbox' onChange = {this.props.markComplete.bind
                    (this, id)}
                /> {' '}
                {title}
                <button 
                    className = "py-1 px-3 shadow-md no-underline rounded-full bg-red-600 float-right \
                    text-white font-sans font-semibold text-sm border-red-800 hover:bg-red-700"
                    onClick = {this.props.delTodo.bind(this, id, completed)} 
                    >x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,

}


export default TodoItem

