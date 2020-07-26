import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "https://i.kym-cdn.com/entries/icons/medium/000/026/489/crying.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(response => {
                this.setState({
                    allMemeImgs: response.data.memes
                })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <div>
                <form className="meme-form">
                    <input 
                        type="text" 
                        value={this.state.topText} 
                        name="topText" 
                        placeholder="Top Text"
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="text" 
                        value={this.state.bottomText} 
                        name="bottomText" 
                        placeholder="Bottom Text"
                        onChange={this.handleChange} 
                    />
                    <button>Gen</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator