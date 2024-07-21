import React from "react"
import Todo from '../models/Todo'
import TodoItem from "./TodoItem"

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return(
    <div className="todos">
      {todos.map((todo) => {
        return (
          <TodoItem 
            todo={todo} 
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        )
      })}
    </div>
  )
}

export default TodoList