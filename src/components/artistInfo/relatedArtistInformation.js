import React from "react";
import { connect } from "react-redux";
import { Carousel } from "antd";
import { relatedArtist } from "../../actions/artistActions";
import "./topTracks.css";

class relatedArtistInformation extends React.Component {

  componentDidMount() {
  this.props.relatedArtist(this.props.id)
  }

  render() {  
    let {
      images = [],
      name=" "
    } = this.props.relatedArtistInfo;
    console.log(images)
    return (
      <div className="banner">
     <Carousel effect="fade">
    <div>
     <img src={images.length > 0 ? `${console.log('image',images[0].url)}` : null} alt="artist"/>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>,
      </div>
    );
  
}
}
const mapStateToProps = state => {
  return {
    relatedArtistInfo: state.artist.relatedArtist
  };
};

export default connect(
  mapStateToProps,
  { relatedArtist }
)(relatedArtistInformation);