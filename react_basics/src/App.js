import React from 'react'

//import TodoItem from './components/TodoItem.js'
import Joke from './components/Joke'

function App() {
    return(
        <div>
            <Joke 
                question="What's the leading cause of divorce in long-term marriages?"
                punchline="A stalemate."
            />
            <Joke 
                question="You know what's not right?"
                punchline="Left."
            />
            <Joke 
                punchline="I'm glad I know sign language. It's become quite handy."
            />
            <Joke 
                punchline="Those fish were shy. They were obviously coy."
            />
            <Joke 
                punchline="I didn't have the faintest idea... as to why I passed out."
            />
        </div>
        /*<div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>*/
    )
}

export default App