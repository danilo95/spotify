import React from "react";
import { Link } from "react-router-dom";
import "./albumCover.css";
const AlbumCover = ({ images, artists, albumName, external_urls }) => {
  return (
    <div className="album-cover-container">
     <div className="album-name"> <a
        target="_blank"
        rel="noopener noreferrer"
        href={`${external_urls !== null ? `${external_urls.spotify}` : null}`}
      >
        <h2>{albumName}</h2>
      </a>
      </div>
      <Link to={`/ArtistDetail/${images.length > 0 ? `${artists[0].id}` : null}`}>
      <h3>{images.length > 0 ? `${artists[0].name}` : null}</h3>
      </Link>
      <img className="cover-image-size"
        src={images.length > 0 ? `${images[0].url}` : null}
        alt="album cover"
      />
    </div>
  );
};

export default AlbumCover;
