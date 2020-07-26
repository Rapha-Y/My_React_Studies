import React from 'react'

function FormComponent(props) {
    return (
        <main>
            <form>
                <input 
                    placeholder="First Name" 
                    value={props.data.firstName}
                    onChange={props.handleChange}
                    type="text"
                    name="firstName" 
                /><br />
                <input 
                    placeholder="Last Name" 
                    value={props.data.lastName} 
                    onChange={props.handleChange} 
                    type="text"
                    name="lastName"
                /><br />
                <input 
                    placeholder="Age" 
                    value={props.data.age}
                    onChange={props.handleChange} 
                    type="text"
                    name="age"
                /><br />

                <label>
                    <input
                        value="Female"
                        onChange={props.handleChange}
                        type="radio"
                        name="gender"
                        checked={props.data.gender === "Female"}
                    />
                    Female
                </label>
                <label>
                    <input
                        value="Male"
                        onChange={props.handleChange}
                        type="radio"
                        name="gender"
                        checked={props.data.gender === "Male"}
                    />
                    Male
                </label>
                <label>
                    <input
                        value="Other"
                        onChange={props.handleChange}
                        type="radio"
                        name="gender"
                        checked={props.data.gender === "Other"}
                    />
                    Other
                </label>
                <br />

                <select
                    value={props.data.destination} 
                    onChange={props.handleChange}
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
                        onChange={props.handleChange}
                        type="checkbox"
                        name="peanuts"
                        checked={props.data.peanuts}
                    />
                    Peanut
                </label>
                <label>
                    <input
                        onChange={props.handleChange}
                        type="checkbox"
                        name="milk"
                        checked={props.data.milk}
                    />
                    Milk
                </label>
                <label>
                    <input
                        onChange={props.handleChange}
                        type="checkbox"
                        name="egg"
                        checked={props.data.egg}
                    />
                    Egg
                </label>
                <label>
                    <input
                        onChange={props.handleChange}
                        type="checkbox"
                        name="wheat"
                        checked={props.data.wheat}
                    />
                    Wheat
                </label>
                <label>
                    <input
                        onChange={props.handleChange}
                        type="checkbox"
                        name="fish"
                        checked={props.data.fish}
                    />
                    Fish
                </label>
                <label>
                    <input
                        onChange={props.handleChange}
                        type="checkbox"
                        name="shellfish"
                        checked={props.data.shellfish}
                    />
                    Shellfish
                </label>
                <br />

                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>
                Your dietary restrictions: {props.renderDiet}
            </p>
        </main>
    )
}

export default FormComponent