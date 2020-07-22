import React from 'react'

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "pink"
    } else if (hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "red"
    } else {
        timeOfDay = "night"
        styles.color = "black"
    }

    return(
        <div>
            <div style={styles}>Good {timeOfDay}</div><br />
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