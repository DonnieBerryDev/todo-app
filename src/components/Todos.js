import React, { useState } from "react"

const Todos = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <div class="todo">
            <li key={index}>
              <div class="todo_todos">
                <a style={{ color: todo.isCompleted ? "green" : "" }}>
                  {todo.text}
                </a>
              </div>
              <div class="todo_buttons">
                <button
                  className="btn_complete"
                  onClick={() => props.handleCompleted({ index })}
                >
                  {todo.isCompleted ? "Uncomplete" : "Complete"}
                </button>

                <button
                  className="btn_delete"
                  onClick={() => props.handleDelete({ index })}
                >
                  Delete
                </button>
              </div>
            </li>
          </div>
        )
      })}
    </ul>
  )
}

export default Todos
