import React from "react";
import { incrementAction } from "../redux/actions/counterActions";
import { increment } from "../redux/counterSlice";

const IncrementCom = ({ disp }) => {
  
  const handleIncrement = () => {
    disp(increment());
    console.log("ssada");
  };

  return (
    <div>
      <button onClick={handleIncrement}>++ </button>
    </div>
  );
};

export default IncrementCom;
