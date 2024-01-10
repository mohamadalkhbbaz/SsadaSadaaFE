import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./types";

export const incrementAction = async (disp) => {
  return disp({ type: INCREMENT });
};

export const decrementAction = async ( disp)=> {
  return disp({type:DECREMENT})
}

// export const decrementAction = () => ({ type: DECREMENT });
export const incrementByValueAction = (val) => ({ type: INC_BY_VALUE ,payload: val});
