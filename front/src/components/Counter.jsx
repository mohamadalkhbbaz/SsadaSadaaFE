import React, { useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(count + 1);
  };
  const handleDecrement = () => {
    setCounter(count - 1);
  };

  return (
    <>
      <div>Counter</div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>++ </button>
      <button onClick={handleDecrement}>-- </button>
      {/* <button onClick={() => setCounter(count+1)}>++ </button>  
      <button onClick={() => setCounter(count-1)}>-- </button> */}
    </>
  );
}

export default Counter;
