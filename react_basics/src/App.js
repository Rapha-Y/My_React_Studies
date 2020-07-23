import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        let loggedState
        this.state.isLoggedIn ? loggedState = "in" : loggedState = "out"

        return (
            <div>
                <h1>You are currently logged {loggedState}</h1>
            </div>
        )
    }
}

export default App