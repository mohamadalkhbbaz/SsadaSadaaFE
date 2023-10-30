import React, { useMemo, useState } from 'react'

const UseMemoEx = () => {
    var randomColor = '#'+ Math.floor(Math.random() * 16777215).toString(16);

    const [counter,setCounter]=useState(0);
    const [test,SetTest] = useState('');

    const result = useMemo(() => {
        return (
            <div style={{color:randomColor}}>
            value is = {counter} := {counter *2 }
        </div>
        )
    },[counter])
    
  return (
    <div>
        {result}
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => SetTest(test + 1)}>test</button>
    </div>
  )
}

export default UseMemoEx