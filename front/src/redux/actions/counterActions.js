import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./types";

export const incrementAction = () => {
  return { type: INCREMENT };
};
export const decrementAction = () => ({ type: DECREMENT });
export const incrementByValueAction = (val) => ({ type: INC_BY_VALUE ,payload: val});
