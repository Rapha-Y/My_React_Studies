import React from 'react'

import FormComponent from './FormComponent'

class FormContainer extends React.Component {
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
            <FormComponent 
                handleChange={this.handleChange}
                data={this.state}
                renderDiet={this.renderDiet()}
            />
        )
    }
}

export default FormContainer