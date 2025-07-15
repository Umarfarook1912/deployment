import React, { useMemo, useState } from 'react'

const Calculation = () => {
    function slowFunction(num) {
        console.log('Running slow function...');
        let result = 0;
        for (let i = 0; i < 10000000; i++) {
            result += num;
        }
        return result;
    }
    const [number,setNumber]=useState(1);
    const [count,setCount]=useState(0);
    // const result=slowFunction(number); // here it calls everytime even number does not change
    const result=useMemo(()=>slowFunction(number),[number]); // here it calls only when number changes
    return (
        <div>
            <h2>Result:{result}</h2>
            <button onClick={()=>setCount(count+1)}>Re-render</button>
            <button onClick={()=>setNumber(number+1)}>Increment Number</button>

        </div>
    )
}

export default Calculation