import BackendApi from "./BackEndApi";
let Token;
localStorage.getItem("Token") === null
  ? (Token = null)
  : (Token = localStorage.getItem("Token"));

export const getRandomListOfAlbums = () => {
  let result = BackendApi.get("/search?q=linkin&type=album", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ".Token
    }
  })
    .then(response => {
      return response.data.albums.items;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  return result;
};
