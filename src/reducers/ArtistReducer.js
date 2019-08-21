const initialState = {
  artist: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTIST_BY_ID":
      return {
        ...state,
        artist: action.payload,
      };
    default:
      return state;
  }
};
