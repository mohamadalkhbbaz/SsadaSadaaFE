import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/actions/types";
import { decrementAction, incrementAction, incrementByValueAction } from "../redux/actions/counterActions";

function Counter() {
  // const [count, setCounter] = useState(0);
  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // setCounter(count + 1);
    dispatch(incrementAction());
  };
  const handleDecrement = () => {
    // setCounter(count - 1);
    dispatch(decrementAction())
  };
  const handleIncrementByValue = (v) => {
    dispatch(incrementByValueAction(v))
  };


  const [inputNumber,setInputNumber] =useState(0);

  return (
    <>
      <div>Counter</div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>++ </button>
      <button onClick={handleDecrement}>-- </button>
      <hr></hr>
      
      <input type="number" value={inputNumber} onChange={(e) => setInputNumber(parseInt(e.target.value))} />
      <button onClick={() => handleIncrementByValue(inputNumber)}> + + +  </button>
      {/* <button onClick={() => setCounter(count+1)}>++ </button>  
      <button onClick={() => setCounter(count-1)}>-- </button> */}
    </>
  );
}

export default Counter;
