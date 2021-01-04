import React, { useState } from "react"
import Todos from "./Todos"

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const handleCurrentInput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)
    setInput("")
    const newTodo = {
      text: input,
      isCompleted: false,
    }
    setTodos([newTodo, ...todos])
  }

  const handleCompleted = ({ index }) => {
    const newTodos = [...todos]

    newTodos[index].isCompleted = newTodos[index].isCompleted ? false : true
    setTodos(newTodos)
  }

  const handleDelete = ({ index }) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div id="todoForm">
      <div class="container">
        <div class="todo_form">
          <div class="todo_input">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="input_todo"
                onChange={handleCurrentInput}
                value={input}
                placeholder="Enter a todo..."
              />
            </form>
            <Todos
              todos={todos}
              handleDelete={handleDelete}
              handleCompleted={handleCompleted}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoApp
