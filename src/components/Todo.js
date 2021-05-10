import React from 'react'

const Todo = ({todo, index, completeTodo, removeTodo}) =>  {
    return (
        <div className="todo"
            style = {{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div>
                <button className="btn btn-sm btn-success mx-2" onClick={() => completeTodo(index)}>Complete</button>
                <button className="btn btn-sm btn-danger" onClick={() => removeTodo(index)}>Remove</button>
            </div>
        </div>
    )
}

export default Todo;