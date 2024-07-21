import React, { useRef } from "react"

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    handleAdd(e)
    inputRef.current?.blur()
  }

  return (
    <form className="input"
      onSubmit={handleSubmit}>

      <input type="input" 
        ref={inputRef}
        placeholder="Write new task" 
        className="input__box"
        value={todo}
        onChange={
          (e) => setTodo(e.target.value)
        }/>

      <button className="input__submit"
        type="submit">
          Add
      </button>

    </form>
  )
}

export default InputField