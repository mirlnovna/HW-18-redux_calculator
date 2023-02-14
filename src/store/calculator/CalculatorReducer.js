export const calCulaterAction = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  DIVIDE: "DIVIDE",
  MULTIPLY: "MULTIPLY",
};

const initialState = {
  result: 0,
  loginFunk: new Map(),
};

export const calculateReducer = (state = initialState, action) => {
  switch (action.type) {
    case calCulaterAction.ADD:
      return {
        ...state,
        result: state.result + action.payload,
      };
    case calCulaterAction.SUBTRACT:
      return {
        ...state,
        result: state.result - action.payload,
      };
    case calCulaterAction.DIVIDE:
      return {
        ...state,
        result: state.result / action.payload,
      };
    case calCulaterAction.MULTIPLY:
      return {
        ...state,
        result: state.result * action.payload,
      };
    default:
      return state;
  }
};
