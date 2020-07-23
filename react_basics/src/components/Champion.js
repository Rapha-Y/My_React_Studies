import React from 'react'

function Champion(props) {
    return (
        <div>
            {props.champion} - 
            [{props.atk}|{props.def}]
        </div>
    )
}

export default Champion