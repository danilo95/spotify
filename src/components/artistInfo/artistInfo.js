import React from "react";
import { getArtistByid } from "../../actions/artistActions";
import { connect } from "react-redux";

class artistInfo extends React.Component {
  componentDidMount() {
    console.log(this.props.id)
    this.props.getArtistByid(this.props.id);
  }
  render() {
   
    return (
      <div>soy el componente encargado de la info del artista</div>
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