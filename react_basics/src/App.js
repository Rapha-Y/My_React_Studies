import React from 'react'

import TodoItem from './components/TodoItem.js'
import todoData from './data/todoData.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            tdData: todoData
        }
    }
    
    render() {
        const todoList = this.state.tdData.map((item) => {
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
}

export default App