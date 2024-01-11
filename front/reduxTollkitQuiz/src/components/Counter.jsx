import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/Slices/counterReducer";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = (type) => {
    switch (type) {
      case "+":
        return dispatch(increment());
      case "-":
        return dispatch(decrement());
      case "reset":
        return dispatch(reset());
    }
  };

  return (
    <>
      <h3>Counter</h3>
      <h4>{value}</h4>
      <button onClick={() => handleIncrement('+')}> + _ + </button>
      <button onClick={() => handleIncrement('+=-')}> - _ - </button>
      <button onClick={() => handleIncrement("reset")}> Reset </button>
    </>
  );
};

export default Counter;
