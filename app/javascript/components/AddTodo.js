import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit = {this.onSubmit}
                style = {{display: 'flex'}}>
                <input
                    className = "bg-gray-200 appearance-none border-2 border-gray-200 rounded\
                         w-full py-2 px-4 text-gray-700 leading-tight\
                         focus:outline-none focus:bg-gray-100"
                    input = 'text'
                    name = 'title'
                    placeholder = 'Add Todo ...'
                    value = {this.state.title}
                    onChange = {this.onChange}
                    />
                <input 
                    className = "bg-gray-300 hover:bg-gray-400 text-gray-800 \
                    font-bold py-2 px-4 rounded inline-flex items-center"
                    type = 'submit'
                    value = 'Submit'
                    />
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
