import React from 'react'

class App extends React.Component {
    state = {
        firstName: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First name"
                    />
                </form>
                <h1>{this.state.firstName}</h1>
            </main>
        )
    }
}

export default App