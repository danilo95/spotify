const initialState = {
  user: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_INFO":
      return {
        ...state,
        user: action.payload,
      };
      case "LOG_OUT":
      return initialState;
    default:
      return state;
  }
};