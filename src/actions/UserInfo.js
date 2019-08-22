import { getUserInfo } from "../axios/Requests";

export const userInfo = () => async dispatch => {
  const response = await getUserInfo();
  dispatch({ type: "USER_INFO", payload: response });
};