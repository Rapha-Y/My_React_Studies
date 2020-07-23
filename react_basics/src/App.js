import React from 'react'

import TodoItem from './components/TodoItem.js'
import todoData from './data/todoData.js'

function App() {
    const todoList = todoData.map((item) => {
        return (
            <TodoItem key={item.id} data={item} />
        )
    })

    return(
        <div className="todo-list">
            {todoList}  
        </div>
    )
}

export default App