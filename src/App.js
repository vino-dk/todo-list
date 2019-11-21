import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/todos';
import Header from './components/layout/header';
import AddTodo from './components/addTodo';
import About from './components/pages/About';
import uuid from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
      id: uuid.v4(),
      title: 'Take out trash',
      completed: false
      },
      {
      id: 2,
      title: 'Pick up groceries',
      completed: false
      },
      {
      id: 3,
      title: 'Finish the programming task',
      completed: false
      },   
    ]
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} 
                markComplete={this.markComplete}
                delTodo={this.delTodo}/> 
              </>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}
  
export default App;
