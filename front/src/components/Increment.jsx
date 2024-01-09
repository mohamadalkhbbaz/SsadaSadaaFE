import React from 'react'
import { incrementAction } from '../redux/actions/counterActions';

const Increment = ({disp}) => {

    const handleIncrement = () => {
        disp(incrementAction());
      };

  return (
    <div>
    <button onClick={handleIncrement}>++ </button>
    </div>
  )
}

export default Increment