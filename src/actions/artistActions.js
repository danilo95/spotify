import { getartist,getTopTracks,getRelatedArtist } from "../axios/Requests";

export const getArtistByid = (id) => async dispatch => {
  const response = await getartist(id);
  dispatch({ type: "GET_ARTIST_BY_ID", payload: response });
};

export const topTracks = (id) => async dispatch => {
  const response = await getTopTracks(id);
  dispatch({ type: "ARTIST_TOP_TRACKS", payload: response });
};

export const relatedArtist = (id) => async dispatch => {
  const response = await getRelatedArtist(id);
  dispatch({ type: "RELATED_ARTIST", payload: response });
};

export const loading = () => {
  return { type: "IS_LOADING_ARTIST", payload: true };
};