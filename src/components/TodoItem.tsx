import React, { useEffect, useRef, useState } from "react"
import Todo from "../models/Todo"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { MdDone } from "react-icons/md"

interface Props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const inputRef = useRef<HTMLInputElement>(null)

  // auto focus when edit mode starts
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  const handleDone = (id:number) => {
    setTodos(
      todos.map( (todo) => {
        return todo.id === id ?
          { ...todo, isDone:!todo.isDone }:
          todo
      })
    )
  }

  const handleDelete = (id:number) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    )
  }

  const handleEdit = (e:React.FormEvent, id:number) => {
    e.preventDefault()

    setTodos(
      todos.map( (todo) => {
        return todo.id === id ?
          {...todo, todo:editTodo}:
          todo
      })
    )
    setEdit(false)
  }

  return (
    <form className="todos__item"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {
        edit ? (
          <input value={editTodo}
            ref={inputRef}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__item--text"
          />
        ) : (          
          todo.isDone ? (
            <s className="todos__item--text">
              {todo.todo} 
            </s>
          ):(
            <span className="todos__item--text">
              {todo.todo} 
            </span>
          )          
        )
      }

      

      <span className="todos__item--icon"
        onClick={() => {
          if (!todo.isDone) {
            setEdit(!edit)
          }
        }}
      >

        <AiFillEdit/>
      </span>

      <span className="todos__item--icon"
        onClick={() => handleDelete(todo.id)}>
        <AiFillDelete />
      </span>

      <span className="todos__item--icon"
        onClick={() => handleDone(todo.id)}>
        <MdDone />
      </span>

      
    </form>
  )
}

export default TodoItem