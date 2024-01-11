import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IncrementCom from "./Increment";
// import Decrement from "./Decrement";

function Counter() {
  // const [count, setCounter] = useState(0);
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h3>{value}</h3>
      console.log("Counter");

      <IncrementCom disp={dispatch} />
      {/* <Decrement disp={dispatch} /> */}
    </>
  );
}

export default Counter;
