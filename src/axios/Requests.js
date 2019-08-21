import BackendApi from "./BackEndApi";
let Token;
localStorage.getItem("Token") === null
  ? (Token = null)
  : (Token = localStorage.getItem("Token"));

export const getRandomListOfAlbums = () => {
  let result = BackendApi.get(
    "/search?query=linkin&type=album&market=SV&offset=0&limit=20",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`
      }
    }
  )
    .then(response => {
      console.log(response.data.albums.items);
      return response.data.albums.items;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  return result;
};

export const getSingleAlbum = id => {
  let result = BackendApi.get(`/albums/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`
    }
  })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  return result;
};
