import React from 'react'
import { decrementAction } from '../redux/actions/counterActions';

const Decrement = ({disp}) => {

    const handleDecrement = () => {
        decrementAction(disp);
      };

  return (
    <div>
    <button onClick={handleDecrement}>-- </button>
    </div>
  )
}

export default Decrement