import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import { loading } from "../actions/AlbumListActions";
import LoadingPage from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";
import SingleAlbum from "../components/singleAlbum/SingleAlbum";

const { Content, Footer } = Layout;
class DetailAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }

 componentDidMount() {
    this.props.loading();
  }

  render() {
    return (
      <Layout>
        <NavBar />
        <Content className="albums-Container">
         {this.props.isloading ? <LoadingPage/> : <SingleAlbum id={this.state.id} />}
        </Content>
        <Footer style={{ textAlign: "center" }}>Spotify 2019</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isloading: state.albums.loading
  };
};

export default connect(
  mapStateToProps,
  { loading }
)(DetailAlbum);
