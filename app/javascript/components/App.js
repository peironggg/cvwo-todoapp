import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Header from './layout/Header';
import Todos from './Todos';
import AddTodo from './AddTodo';
import About from './pages/About';
import axios from 'axios';

class App extends Component {
    state = {
      todos: []
    }
  

  // Retrieve and load todos from DB
  getTodos() {
    axios.get('/todos')
    .then(response => {
      this.setState({todos: response.data})
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getTodos()
  }

  // Toggle Checkbox
  markComplete = (id, completed) => {
    axios.put(`/todos/${id}`, {completed: !completed})
      .then(response => this.setState({todos: this.state.todos.map(
        todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })}));
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`/todos/${id}`)
      .then(response => this.setState({todos: [...this.state.todos
        .filter(todo => todo.id !== id)]})).catch(err => console.log(err));
  }

  // Add Todo
  addTodo = (title) => {
    const titleParts = title.split('#');
    const titleName = titleParts[0].trim();
    const smallCategory = titleParts[1];
    const category = smallCategory[0].toUpperCase() + smallCategory.slice(1)

    axios.post('/todos', {
      title: titleName,
      completed: false,
      category
    }).then(response => this.setState({todos: 
        [...this.state.todos,response.data]}))
        .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className = "container">
        <Header/>
        <Route exact path = "/" render = {(props) => (
          <React.Fragment>
            <AddTodo addTodo = {this.addTodo}/>
            <Todos todos = {this.state.todos} 
              markComplete = {this.markComplete}
              delTodo = {this.delTodo}/>
              </React.Fragment>
        )} />
        <Route path = "/about" component = {About}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
