import React from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = React.useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // if part
        if (!value) return
        // else part
        addTodo(value)
        setValue("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="input"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </div>
    )
}

export default TodoForm;