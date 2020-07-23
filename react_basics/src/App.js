import React from 'react'

import TodoItem from './components/TodoItem.js'
import todoData from './data/todoData.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState((prevState) => {
            const newTodos = prevState.todos.map((todo) => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return { 
                todos: newTodos 
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => 
            <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
        )
    
        return(
            <div className="todo-list">
                {todoItems}  
            </div>
        )
    }
}

export default App