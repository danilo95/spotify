import React from "react";
import Genres from "../genres/Genres";
import { getArtistByid } from "../../actions/artistActions";
import { connect } from "react-redux";
class artistInfo extends React.Component {
  componentDidMount() {
    console.log(this.props.id);
    this.props.getArtistByid(this.props.id);
  }
  render() {
    let {
      images = [],
      name = null,
      followers = [],
      genres = []
    } = this.props.artist;
    return (
      <>
      <div className="artis-header">
        <h2>
          <i className="fa fa-music fafa-color" aria-hidden="true" /> {name}
        </h2>

        <h3>
          <i className="fa fa-users fafa-color" aria-hidden="true" /> Followers:
          {followers.total}
        </h3>
        </div>
        <img
          className="cover-image-size"
          src={images.length > 0 ? `${images[0].url}` : null}
          alt="album cover"
        />
        <Genres genres={genres} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    artist: state.artist.artist
  };
};

export default connect(
  mapStateToProps,
  { getArtistByid }
)(artistInfo);
