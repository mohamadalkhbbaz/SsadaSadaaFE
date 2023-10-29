import React, { useState } from 'react'

const UseStateEx = () => {
    const [counter,setCounter] = useState(0);
    const [inputValue,setInputValue] = useState(0);
    const handleIncrese = ()=> setCounter(counter+1)
    const handleDescrese = ()=> setCounter(counter-1)
    const HandleAddValue = ()=> setCounter(counter+parseInt(inputValue))
    
    console.log("reRunder");
  return (
    <div>
        <button onClick={handleIncrese} >+</button>
        <button onClick={handleDescrese} >-</button>
        <h3>Counter</h3>
        <input type='number' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
        <button onClick={HandleAddValue} >Add</button>  

        {counter}

    </div>
  )
}

export default UseStateEx