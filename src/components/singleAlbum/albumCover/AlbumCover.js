import React from "react";
import { Link } from "react-router-dom";
import "./albumCover.css";
const AlbumCover = ({ images, artists, albumName, external_urls }) => { console.log('albun name',albumName)
  return (
    <div className="album-cover-container">
    <div className="album-name">
      {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`${external_urls !== null ? `${external_urls.spotify}` : null}`}
      >
        <h2>{`${albumName === 'Error' ? `` : `${albumName}`}`}</h2>
      </a>
    </div>
    <Link
      to={`/ArtistDetail/${images.length > 0 ? `${artists[0].id}` : null}`}
    >
      <div className="album-artist">
        <h3>{images.length > 0 ? `${artists[0].name}` : null}</h3>
      </div>
    </Link>
    <img
      className="cover-image-size"
      src={images.length > 0 ? `${images[0].url}` : `https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png`}
      alt="album cover"
    />
  </div>
  );
};

export default AlbumCover;
