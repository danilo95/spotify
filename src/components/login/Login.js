import React from "react";
import "./login.css";
import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes
} from "../spotifyConfig/SpotifyConfig";
import hash from "../hash/Hash";
import { verificateIfTokenExist } from "../../auth/Auth";
class Index extends React.Component {
  componentDidMount() {
    let _token = hash.access_token;
    if (_token) {
      localStorage.setItem("Token", _token);
    }
    verificateIfTokenExist();
  }

  render() {
    return (
      <div className="background-login">
        <div className="text-over-banner">
          <i className="fa fa-spotify fa-6" aria-hidden="true" />
          <div className="button-container">
            <a
              className="spotify"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          </div>
        </div>
        <div className="login-overlay">
          <div className="crossfade">
            <div className="image-login" />
            <div className="image-login" />
            <div className="image-login" />
            <div className="image-login" />
            <div className="image-login" />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
