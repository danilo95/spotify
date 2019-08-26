import React from "react";
import { connect } from "react-redux";
import { Card } from 'antd';
import "./topTracks.css";
import { relatedArtist } from "../../actions/artistActions";

class relatedArtistInformation extends React.Component {

  componentDidMount() {
  this.props.relatedArtist(this.props.id)
  }
  render() {  
    let {
      artists = []
    } =this.props.relatedArtistInfo;
    return (
      <Card title="Artists Related">
      {artists.map((artist, index) => {
        return (
         <Card.Grid key={index}><img className="img-relation"src={artist.images.length > 0 ? `${artist.images[0].url}` : null} alt="artist"/></Card.Grid>
        )
      } )}
              
           </Card>    
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
