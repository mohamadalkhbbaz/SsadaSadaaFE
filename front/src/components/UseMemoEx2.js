import React, { useMemo, useState } from 'react'

const UseMemoEx = () => {
    var randomColor = '#'+ Math.floor(Math.random() * 16777215).toString(16);

    const [counter,setCounter]=useState(0);
    const [test,SetTest] = useState('');

    useMemo(() => {
      randomColor = '#'+ Math.floor(Math.random() * 16777215).toString(16);
    },[counter])
    
  return (
    <div>
          <div style={{color:randomColor}}>
            value is = {counter} := {counter *2 }
        </div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => SetTest(test + 1)}>test</button>
    </div>
  )
}

export default UseMemoEx