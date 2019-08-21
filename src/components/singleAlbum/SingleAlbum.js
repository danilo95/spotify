import React from "react";
import { singleAlbumData } from "../../actions/AlbumListActions";
import { connect } from "react-redux";


class SingleAlbum extends React.Component {
  componentDidMount() {
    
    this.props.singleAlbumData(this.props.id);
  }

  render() {
    return (
      <div>Hola soy otro componente</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleAlbum: state.albums.singleAlbum
  };
};

export default connect(
  mapStateToProps,
  { singleAlbumData }
)(SingleAlbum);
