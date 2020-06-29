import { CounterAction } from "../action";

const initialState = {
  count: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case CounterAction.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
}

export default counter;
