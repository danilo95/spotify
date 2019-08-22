import { getRandomListOfAlbums, getSingleAlbum } from "../axios/Requests";

export const randomListOfAlbums = () => async dispatch => {
  const response = await getRandomListOfAlbums();
  dispatch({ type: "RANDOM_ALBUM_LIST", payload: response });
};

export const loading = () => {
  return { type: "IS_LOADING", payload: true };
};

export const singleAlbumData = id => async dispatch => {
  const response = await getSingleAlbum(id);
  dispatch({ type: "SINGLE_ALBUM_DATA", payload: response });
};