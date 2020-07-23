import React from 'react'

//import TodoItem from './components/TodoItem.js'
import Champion from './components/Champion'
import lorData from './data/lorData'

function App() {
    const lorComponents = lorData.map((champion) => {
        return (
            <Champion 
                key={champion.champion} 
                champion={champion.champion} 
                atk={champion.atk} 
                def={champion.def}    
            />
        )
    })

    return(
        <div>
            {lorComponents}
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