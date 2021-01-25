import React, {Component} from 'react'
import TodoList from './todoList'
import Header from './components/header'
import Form from './components/form'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [
        {id: 1, completed: false, title: 'Learn React'},
        {id: 2, completed: false, title: 'Learn Vue'},
        {id: 3, completed: false, title: 'Learn Node.js'}
      ]
    }
  }
 
  render() {
    return (
      <div className="App">
        <div className="container">
        <Header/>
        <Form/>
        <TodoList todos={this.state.data}/>
        </div>
      </div>
    );
  }
}

