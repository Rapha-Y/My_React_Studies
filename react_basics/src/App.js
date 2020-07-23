import React from 'react'

function handleClick() {
    console.log("I was clicked")
}

function handleHover() {
    console.log("Get off me!")
}

function App() {
    return (
        <div>
            <img 
                src="https://tinyurl.com/siteresources/images/tinyurl_logo.png" 
                alt="tinyurl-logo" 
                onMouseEnter={handleHover}    
            />
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App