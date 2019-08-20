import History from "../history/History";

export const verificateIfTokenExist =()=> {
  localStorage.getItem("Token") === null?History.push("/"):History.push("/MainPage/");
};

