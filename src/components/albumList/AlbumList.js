import React from "react";
import "./albumList.css";
import { randomListOfAlbums } from "../../actions/AlbumListActions";
import { connect } from "react-redux";
import { Card } from "antd";
const { Meta } = Card;

class AlbumList extends React.Component {
  componentDidMount() {
    this.props.randomListOfAlbums();
  }

  render() {
    console.log(this.props.albums);
    return (
      <>
        {this.props.albums.map((info, index) => {
          console.log(info.external_urls.spotify);
          return (
            <Card
              key={index}
              hoverable
              className="single-Album"
              cover={<img alt="example" src={`${info.images[0].url}`} />}
            >
              <div className="middle">
                <div className="text">
                  <a className="button" href={`${info.external_urls.spotify}`}>
                    Go To Spotify
                  </a>
                </div>
              </div>
              <div className="album-name">
                <Meta title={info.name} />
              </div>
              <div className="album-artist">
                <Meta description={info.artists[0].name} />
              </div>
            </Card>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums.albums
  };
};

export default connect(
  mapStateToProps,
  { randomListOfAlbums }
)(AlbumList);
