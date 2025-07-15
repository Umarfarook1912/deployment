import React, { useCallback, useState } from 'react'
import Child from './Child';

const Sample = () => {
    const[count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        console.log("Button clicked");
    },[])
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <Child onClick={handleClick} />
    </div>
  )
}

export default Sample