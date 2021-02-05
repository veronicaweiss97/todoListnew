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
    this.addToDo = this.addToDo.bind(this)
  }


  getRandomId = () => `f${(~~(Math.random() * 1e8)).toString(16)}`; 

  addToDo(title) {
    const newToDo = {id: this.getRandomId(), completed: false, title: title}
    this.setState(({data}) => {
      const newArr = [...data, newToDo]
      return {data: newArr}
    })
  }
 
  render() {
    return (
      <div className="App">
        <div className="container">
        <Header/>
        <Form addToDo={this.addToDo} />
        <TodoList todos={this.state.data} />
        </div>
      </div>
    );
  }
}

