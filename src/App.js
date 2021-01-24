import React from 'react'
import TodoList from './todoList'
import Header from './components/header'
import Form from './components/form'

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
