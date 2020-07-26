import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isEvil: false,
            gender: "",
            favFood: "Udon"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
        this.setState({
            [name]: checked
        }) : 
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <input 
                    type="text"
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                
                <input 
                    type="text" 
                    value={this.state.lastName}
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <br />

                <textarea value={"Lorem ipsum"} onChange={this.handleChange} />
                <br />

                <label>
                    <input 
                        type="checkbox" 
                        name="isEvil" 
                        checked={this.state.isEvil} 
                        onChange={this.handleChange} 
                    />
                    Is evil?
                </label>
                <br />

                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    />
                    Female
                </label>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    />
                    Male
                </label>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="non-binary"
                        checked={this.state.gender === "non-binary"}
                        onChange={this.handleChange}
                    />
                    Non-binary
                </label>
                <br />

                <select value={this.state.favFood} onChange={this.handleChange} name="favFood">
                    <option value="">Udon</option>
                    <option value="">Spaghetti</option>
                    <option value="">Ramen</option>
                </select>
                <br />

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are {this.state.gender}</h2>
                <h2>Your favorite food is {this.state.favFood}</h2>
            </form>
        )
    }
}

export default App