import React, { useEffect,useState } from 'react'

const UseEffectEx = () => {
    const [counter,setCounter] = useState(0);
    useEffect(()=> console.log('useEffect') , [])
    // useEffect(()=> console.log('useEffect') , [counter])
  return (
    <div>UseEffectEx</div>
  )
}

export default UseEffectEx