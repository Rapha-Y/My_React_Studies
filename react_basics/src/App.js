import React from 'react'

function App() {
    const abc = "a b c"
    const def = "d e f"
    const date = new Date()

    return(
        <div>
            {`${abc} ${def}`}<br />
            {date.getHours()}<br />
            <br />

            <input type="checkbox"></input>
            <span> Carrots</span><br />
            <input type="checkbox"></input>
            <span> Potatoes</span><br />
            <input type="checkbox"></input>
            <span className="green"> Asparaguses</span><br />
            <input type="checkbox"></input>
            <span> Onions</span><br />
        </div>
    )
}

export default App