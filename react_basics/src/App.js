import React from 'react'

//import TodoItem from './components/TodoItem.js'
import Kitty from './Kitty.js'

function App() {
    return(
        <div className="Kitties">
            <Kitty info={{
                name: "Tom",
                imgUrl: "https://tinyurl.com/y2egjhdv" 
            }} />
            <Kitty info={{
                name: "Owl",
                imgUrl: "https://tinyurl.com/yxptkdj6" 
            }} />
            <Kitty info={{
                name: "Rosy",
                imgUrl: "https://tinyurl.com/y4rrm37m" 
            }} />
            <Kitty info={{
                name: "Noct",
                imgUrl: "https://tinyurl.com/y555vsqc" 
            }} />
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