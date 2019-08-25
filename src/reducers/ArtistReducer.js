const initialState = {
  artist: [],
  topTracks: [],
  relatedArtist: [],
  loading: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTIST_BY_ID":
      return {
        ...state,
        artist: action.payload,
        loading: false
      };
      case "ARTIST_TOP_TRACKS":
      return {
        ...state,
        topTracks: action.payload,
        loading: false
      };
      case "RELATED_ARTIST":
      return {
        ...state,
        relatedArtist: action.payload,
        loading: false
      };
       case "IS_LOADING_ARTIST":
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
