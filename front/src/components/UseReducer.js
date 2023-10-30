import React from 'react'

const UseReducer = () => {

  return (
    <div>
        <h1>Use Reducer</h1>


        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => SetTest(test + 1)}>test</button>

    </div>
  )
}

export default UseReducer