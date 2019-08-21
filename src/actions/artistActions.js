import { getartist } from "../axios/Requests";

export const getArtistByid = (id) => async dispatch => {
  const response = await getartist(id);
  dispatch({ type: "GET_ARTIST_BY_ID", payload: response });
};