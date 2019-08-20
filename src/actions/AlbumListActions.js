import { getRandomListOfAlbums } from "../axios/Requests";

export const randomListOfAlbums = () => async dispatch => {
  const response = await getRandomListOfAlbums();
  dispatch({ type: "RANDOM_ALBUM_LIST", payload: response });
};

export const loading = () => {
  return { type: "IS_LOADING", payload: true };
};


