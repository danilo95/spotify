import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import NavBar from "../components/navBar/NavBar";
import { loading } from "../actions/artistActions";
import ArtistInfo from "../components/artistInfo/artistInfo";
import LoadingPage from "../components/loading/Loading";
const { Content, Footer } = Layout;
class artisDetail extends React.Component {
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
         {this.props.isloading ? <LoadingPage/> :  <ArtistInfo id={this.state.id}/>}
        </Content>
        <Footer style={{ textAlign: "center" }}>Spotify 2019</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isloading: state.artist.loading
  };
};

export default connect(
  mapStateToProps,
  { loading }
)(artisDetail);