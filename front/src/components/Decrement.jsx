import React from 'react'
import { decrementAction } from '../redux/actions/counterActions';

const Decrement = ({disp}) => {

    const handleDecrement = () => {
        disp(decrementAction());
      };

  return (
    <div>
    <button onClick={handleDecrement}>++ </button>
    </div>
  )
}

export default Decrement