import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            statement: "Ain't a real place."
        }
    }
    
    render() {
        return (
            <div>
                <h1>Split States of Europe. {this.state.statement}</h1>
            </div>
        )
    }
}

export default App