import BackendApi from "./BackEndApi";

export const getRandomListOfAlbums = (search,offset) => {
  let result = BackendApi.get(
    `/search?query=${search}&type=album&market=SV&offset=${offset}&limit=20`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`
      }
    }
  )
    .then(response => {
      console.log('este es el objeto',response.data.albums)
      return response.data.albums;
    })
    .catch(error => {
      console.log(error.response.status);
      return error;
    });

  return result;
};

export const getSingleAlbum = id => {
  let result = BackendApi.get(`/albums/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error.response);
      handleError(error)
      return error;
    });

  return result;
};

export const getartist = id => {
  let result = BackendApi.get(`/artists/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`
    }
  })
    .then(response => {

      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  return result;
};


export const getUserInfo = () => {
  let result = BackendApi.get(
    "/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`
      }
    }
  )
    .then(response => {
  
      return response.data;
    })
    .catch(error => {
      console.log(error.response);
      return error;
    });

  return result;
};




const handleError = errorHttp => {
  switch (errorHttp.response.status) {
    case 400:
      return { status: 400, message: errorHttp.response.data.error };
      case 401:
      return {error:true, status: 401, message: errorHttp.response.data.error,header: 'UPS!! SOMETHING GOES WRONG',};
    default:
      return { status: 500, message: errorHttp.response.data.error };
  }
};