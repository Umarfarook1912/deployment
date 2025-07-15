import React from 'react'

const Child = ({onClick}) => {
    console.log("Child component rendered");
  return (
    <div>
        <h3>Child Component</h3>
        <button onClick={onClick}>Click Me</button>
    </div>
  )
}

export default Child