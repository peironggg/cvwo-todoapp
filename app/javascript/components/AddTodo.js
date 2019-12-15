import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
                    input = 'text'
                    name = 'title'
                    style = {{flex: '10', padding: '5px'}}
                    placeholder = 'Add Todo ...'
                    value = {this.state.title}
                    onChange = {this.onChange}
                    />
                <input
                    style = {btnStyle}
                    type = 'submit'
                    value = 'Submit'
                    className = "btn"
                    />
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

const btnStyle = {
    display: 'inline-block',
    border: 'none',
    background: '#555',
    color: '#fff',
    padding: '7px 20px',
    cursor: 'pointer'
}

export default AddTodo
