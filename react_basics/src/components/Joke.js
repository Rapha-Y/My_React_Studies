import React from 'react'

function Joke(props) {
    return (
        <div style={{padding: "10px"}}>
            <div style={{display: props.question ? "block" : "none"}}>{props.question}</div>
            <div>{props.punchline}</div>
        </div>
    )
}

export default Joke