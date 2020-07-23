import React from 'react'

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            >
            </input>
            <span style={{paddingLeft: "5px"}}>{props.item.task}</span>
        </div>
    )
}

export default TodoItem