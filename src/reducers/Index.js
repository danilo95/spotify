import { combineReducers } from "redux";
import albumListReducer from "./AlbumListReducer";
import artistReducer from "./ArtistReducer";
import UserInfoReducer from "./UserInfoReducer";
export default combineReducers({
  albums: albumListReducer,
  artist: artistReducer,
  user:UserInfoReducer
});
