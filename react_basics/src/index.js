import React from 'react'
import ReactDOM from 'react-dom'

function MyApp() {
  return( 
    <ul>
      <li>Sword</li>
      <li>Lance</li>
      <li>Axe</li>
    </ul>
  ) 
}

ReactDOM.render(
  <MyApp />,
  document.getElementById("root")
)