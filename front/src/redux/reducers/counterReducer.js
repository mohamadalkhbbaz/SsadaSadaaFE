import { DECREMENT, INCREMENT, INC_BY_VALUE } from "../actions/types";

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 }; /// اذا كان في عنا اكثر من متغير ضمن ل state
    case INC_BY_VALUE:
      return { ...state, count: state.count + action.payload };
  }

  return state;
};
export default countReducer;
