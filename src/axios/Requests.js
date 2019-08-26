import BackendApi from "./BackEndApi";
import Hystory from "../history/History"
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
      return response.data.albums;
    })
    .catch(error => {
     handleError(error)
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
      handleError(error)
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
      handleError(error)
    });

  return result;
};

export const getTopTracks = (id) => {
  let result = BackendApi.get(
    `/artists/${id}/top-tracks?country=SV`,
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
      handleError(error)
    });

  return result;
};

export const getRelatedArtist = (id) => {
  let result = BackendApi.get(
    `artists/${id}/related-artists`,
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
      handleError(error)
    });

  return result;
};


const handleError = errorHttp => {
  switch (errorHttp.response.status) {
    case 400:
      return { status: 400, message: errorHttp.response.data.error };
      case 401:
     Hystory.push("/Error/");
     break;
    default:
      return { status: 500, message: errorHttp.response.data.error };
  }
};