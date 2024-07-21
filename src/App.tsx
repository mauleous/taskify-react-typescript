import React, { useState } from 'react'
import './App.css'
import './stylesheets/styles.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import Todo from './models/Todo'


function App() {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo){

      let newTodo = {
        id: Date.now(),
        todo: todo,
        isDone: false
      }

      setTodos([...todos, newTodo])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField 
        todo={todo} 
        setTodo={setTodo}
        handleAdd={handleAdd} 
      />

      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  )
}

export default App
