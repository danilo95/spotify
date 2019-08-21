const initialState = {
  albums: [],
  loading: false,
  singleAlbum: {}
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
      case "SINGLE_ALBUM_DATA":
        return {
          ...state,
          singleAlbum: action.payload
        };
    default:
      return state;
  }
};
