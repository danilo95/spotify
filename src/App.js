import React from "react";
import { Router, Route } from "react-router-dom";
import index from "./pages/Index";
import DetailAlbum from "./pages/DetailAlbum"
import mainPage from "./pages/MainPage";
import History from "./history/History";
const App = () => {
  return (
    <Router history={History}>
      <Route path="/AlbumDetail/:id" exact component={DetailAlbum} />
      <Route path="/MainPage/" exact component={mainPage} />
      <Route path="/" exact component={index} />
    </Router>
  );
};
export default App;
