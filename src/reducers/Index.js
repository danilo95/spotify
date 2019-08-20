import { combineReducers } from "redux";
import albumListReducer from "./AlbumListReducer";
export default combineReducers({
  albums: albumListReducer
});
