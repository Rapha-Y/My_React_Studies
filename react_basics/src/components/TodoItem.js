import React from 'react'

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.data.completed}
                onChange={() => {console.log("Hello")}}
            >
            </input>
            <span style={{paddingLeft: "5px"}}>{props.data.task}</span>
        </div>
    )
}

export default TodoItem