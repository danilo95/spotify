const initialState = {
  artist: [],
  topTracks: [],
  relatedArtist: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTIST_BY_ID":
      return {
        ...state,
        artist: action.payload,
      };
      case "ARTIST_TOP_TRACKS":
      return {
        ...state,
        topTracks: action.payload,
      };
      case "RELATED_ARTIST":
      return {
        ...state,
        relatedArtist: action.payload,
      };
    default:
      return state;
  }
};
