import { combineReducers } from "redux";
import albumListReducer from "./AlbumListReducer";
import artistReducer from "./ArtistReducer";
export default combineReducers({
  albums: albumListReducer,
  artist: artistReducer
});
