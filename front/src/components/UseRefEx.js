import React, { useRef } from 'react'

const UseRefEx = () => {
    const value = useRef(null);
    const value2 = useRef(null);
    const handleChange = () => {
        value2.current.focus();
        console.log(value.current.value)
    };
  return (
    <div>
        <input type='text' ref={value} onChange={handleChange}/>
        <input type='text' ref={value2} onChange={handleChange}/>

    </div>
  )
}

export default UseRefEx