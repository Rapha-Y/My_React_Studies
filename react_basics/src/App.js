import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        let txtMessage
        let btnMessage

        this.state.isLoggedIn ? 
        txtMessage = "Logged in" : 
        txtMessage = "Logged out"

        this.state.isLoggedIn ? 
        btnMessage = "log out" : 
        btnMessage = "log in"
        
        return(
            <div>
                <h1>{txtMessage}</h1>
                <button type="button" onClick={this.handleClick}>{btnMessage}</button>
            </div>
        )
    }
}

export default App