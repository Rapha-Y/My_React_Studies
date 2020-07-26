import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleGen = this.handleGen.bind(this)
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
        console.log(value)
    }

    handleGen(event) {
        event.preventDefault()
        let randomMeme = this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)]
        console.log(randomMeme)
        this.setState({
            randomImage: randomMeme.url
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
                    <button onClick={this.handleGen}>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="meme" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator