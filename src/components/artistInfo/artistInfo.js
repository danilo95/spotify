import React from "react";
import { connect } from "react-redux";
import Genres from "../genres/Genres";
import { getArtistByid } from "../../actions/artistActions";
import TopTracks from "./TopTracksByArtist";
import RelatedArtists from "./RelatedArtistInformation";
class artistInfo extends React.Component {
  componentDidMount() {
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
     <div className="album-cover-container">
      
      <div className="artis-header">
        <h2>
          <i className="fa fa-music fafa-color" aria-hidden="true" /> {name}
        </h2>

        <h3>
          <i className="fa fa-users fafa-color" aria-hidden="true" /> Followers:
          {followers.total}
        </h3>
        <Genres genres={genres} />
        </div>
        <img
          className="cover-image-size"
          src={images.length > 0 ? `${images[0].url}` : null}
          alt="album cover"
        />
        </div>
        
        <TopTracks id={this.props.id}/>
        <RelatedArtists id={this.props.id}/>
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
