import React from "react";
import { Router, Route } from "react-router-dom";
import index from "./pages/Index";
import detailAlbum from "./pages/DetailAlbum"
import mainPage from "./pages/MainPage";
import artistDetail from "./pages/artisDetail";
import History from "./history/History";
import errorPageToken from "./components/errorPages/ErrorPageToken";
const App = () => {
  return (
    <Router history={History}>
      <Route path="/ArtistDetail/:id" exact component={artistDetail} />
      <Route path="/AlbumDetail/:id" exact component={detailAlbum} />
      <Route path="/MainPage/" exact component={mainPage} />
      <Route path="/Error/" exact component={errorPageToken} />
      <Route path="/" exact component={index} />
    </Router>
  );
};
export default App;
