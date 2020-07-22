import React from "react"

function Cat(props) {
    return (
        <div className="kitty">
            <img src={props.info.imgUrl} alt="Cat" />
            <h3>{props.info.name}</h3>
        </div>
    )
}

export default Cat