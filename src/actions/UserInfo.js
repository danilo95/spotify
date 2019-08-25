import { getUserInfo } from "../axios/Requests";
import History from "../history/History";
export const userInfo = () => async dispatch => {
  const response = await getUserInfo();
  dispatch({ type: "USER_INFO", payload: response });
};

export const logOut = () => dispatch => {
  localStorage.removeItem("Token");
  dispatch({ type: "LOG_OUT" });
  History.push("/");
};