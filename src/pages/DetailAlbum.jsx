import React from "react";
import { Layout } from "antd";
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

  render() {
    return (
      <Layout>
        <NavBar />
        <Content className="albums-Container">
          <SingleAlbum id={this.state.id} />
        </Content>
        <Footer style={{ textAlign: "center" }}>Spotify 2019</Footer>
      </Layout>
    );
  }
}

export default DetailAlbum;
