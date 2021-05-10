import React from 'react'
import './App.css';

// custom components
// import Player from './components/Player'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
// import Counter from './components/Counter'

function App() {

  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ])

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      {/* <h1 id="head">Music App</h1> */}
      {/* <Player /> */}
      
      <h1 id="head">Todo App</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
            <Todo 
                key = {index}
                index = {index}
                todo = {todo}
                completeTodo = {completeTodo}
                removeTodo = {removeTodo}
            />
        ))}
      </div>
      <TodoForm addTodo = {addTodo} />
      {/* <Counter incrementBy = {1} />
      <Counter incrementBy = {5} /> */}
    </div>
  );
}

export default App;