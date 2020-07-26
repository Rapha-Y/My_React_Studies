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
    
    render() {
        return (
            <h1>MemeGenerator</h1>
        )
    }
}

export default MemeGenerator