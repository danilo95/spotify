const initialState = {
  albums: [],
  loading: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "RANDOM_ALBUM_LIST":
      return {
        ...state,
        albums: action.payload,
        loading: false
      };
    case "IS_LOADING":
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
