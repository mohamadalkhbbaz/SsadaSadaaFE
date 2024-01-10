import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Increment from "./Increment";
import Decrement from "./Decrement";

function Counter() {
  // const [count, setCounter] = useState(0);
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h3>{count}</h3>
      <Increment disp={dispatch} />
      <Decrement disp={dispatch} />
    </>
  );
}

export default Counter;
