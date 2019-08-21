import React from "react";
import { Layout } from "antd";
import NavBar from "../components/navBar/NavBar";
import ArtistInfo from "../components/artistInfo/artistInfo";
const { Content, Footer } = Layout;
class artisDetail extends React.Component {
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
        <ArtistInfo id={this.state.id}/>
        </Content>
        <Footer style={{ textAlign: "center" }}>Spotify 2019</Footer>
      </Layout>
    );
  }
}

export default artisDetail;