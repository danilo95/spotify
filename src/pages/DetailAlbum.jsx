import React from "react";
import SingleAlbum from "../components/singleAlbum/SingleAlbum"
class DetailAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }

  render() {
    return <SingleAlbum id={this.state.id}/>
  }
}

export default DetailAlbum;
