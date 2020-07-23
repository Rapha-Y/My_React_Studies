import React from 'react'

//import TodoItem from './components/TodoItem.js'
import Joke from './components/Joke'
import jokesData from './data/jokesData'

function App() {
    const jokeComponents = jokesData.map((joke) => {
        return (
            <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
        )
    })

    return(
        <div>
            {jokeComponents}
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