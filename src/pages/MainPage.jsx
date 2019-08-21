import React from "react";
import NavBar from "../components/navBar/NavBar";
import AlbumList from "../components/albumList/AlbumList";
import { loading } from "../actions/AlbumListActions";
import { connect } from "react-redux";
import { verificateIfTokenExist } from "../auth/Auth";
import { Layout } from "antd";
const { Content, Footer } = Layout;

class MainPage extends React.Component {
  componentDidMount() {
    verificateIfTokenExist();
  }
  render() {
    console.log(this.props.isloading);
    return (
      <Layout>
        <NavBar />
        <Content className="albums-Container">
          {this.props.isloading ? null : <AlbumList />}
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
)(MainPage);
