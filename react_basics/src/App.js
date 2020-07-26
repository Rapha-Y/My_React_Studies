import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            peanuts: false,
            milk: false,
            egg: false,
            wheat: false,
            fish: false,
            shellfish: false
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

    renderDiet() {
        const restrictions = ["peanuts", "milk", "egg", "wheat", "fish", "shellfish"]
        const checks = [
            this.state.peanuts,
            this.state.milk,
            this.state.egg,
            this.state.wheat,
            this.state.fish,
            this.state.shellfish
        ]

        let output = ""
        
        for (let i = 0; i < restrictions.length; i++) {
            if (checks[i]) {
                if (output.length === 0) {
                    let firstWord = restrictions[i]
                    firstWord = firstWord[0].toUpperCase() + firstWord.slice(1)
                    output = output.concat(firstWord)
                } else {
                    output = output.concat(", ")
                    output = output.concat(restrictions[i])
                }
            }
        }

        return output
    }

    render() {
        return (
            <main>
                <form>
                    <input 
                        placeholder="First Name" 
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        type="text"
                        name="firstName" 
                    /><br />
                    <input 
                        placeholder="Last Name" 
                        value={this.state.lastName} 
                        onChange={this.handleChange} 
                        type="text"
                        name="lastName"
                    /><br />
                    <input 
                        placeholder="Age" 
                        value={this.state.age}
                        onChange={this.handleChange} 
                        type="text"
                        name="age"
                    /><br />

                    <label>
                        <input
                            value="Female"
                            onChange={this.handleChange}
                            type="radio"
                            name="gender"
                            checked={this.state.gender === "Female"}
                        />
                        Female
                    </label>
                    <label>
                        <input
                            value="Male"
                            onChange={this.handleChange}
                            type="radio"
                            name="gender"
                            checked={this.state.gender === "Male"}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            value="Other"
                            onChange={this.handleChange}
                            type="radio"
                            name="gender"
                            checked={this.state.gender === "Other"}
                        />
                        Other
                    </label>
                    <br />

                    <select
                        value={this.state.destination} 
                        onChange={this.handleChange}
                        name="destination"
                    >
                        <option value="">Choose a continent</option>
                        <option value="Africa">Africa</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    <br />

                    <label>
                        <input
                            onChange={this.handleChange}
                            type="checkbox"
                            name="peanuts"
                            checked={this.state.peanuts}
                        />
                        Peanut
                    </label>
                    <label>
                        <input
                            onChange={this.handleChange}
                            type="checkbox"
                            name="milk"
                            checked={this.state.milk}
                        />
                        Milk
                    </label>
                    <label>
                        <input
                            onChange={this.handleChange}
                            type="checkbox"
                            name="egg"
                            checked={this.state.egg}
                        />
                        Egg
                    </label>
                    <label>
                        <input
                            onChange={this.handleChange}
                            type="checkbox"
                            name="wheat"
                            checked={this.state.wheat}
                        />
                        Wheat
                    </label>
                    <label>
                        <input
                            onChange={this.handleChange}
                            type="checkbox"
                            name="fish"
                            checked={this.state.fish}
                        />
                        Fish
                    </label>
                    <label>
                        <input
                            onChange={this.handleChange}
                            type="checkbox"
                            name="shellfish"
                            checked={this.state.shellfish}
                        />
                        Shellfish
                    </label>
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: {this.renderDiet()}
                </p>
            </main>
        )
    }
}

export default App