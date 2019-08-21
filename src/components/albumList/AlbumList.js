import React from "react";
import "./albumList.css";
import { Link } from "react-router-dom";
import { randomListOfAlbums } from "../../actions/AlbumListActions";
import { connect } from "react-redux";
import { Card } from "antd";
const { Meta } = Card;

class AlbumList extends React.Component {
  componentDidMount() {
    this.props.randomListOfAlbums();
  }

  render() {
    return (
      <>
        {this.props.albums.map((info, index) => {
          return (
            <Card
              key={index}
              hoverable
              className="single-Album"
              cover={<img alt="example" src={`${info.images[0].url}`} />}
            >
              <div className="middle">
                <div className="text">
                  <a
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${info.external_urls.spotify}`}
                  >
                    Go To Spotify
                  </a>
                </div>
              </div>
              <Link to={`/AlbumDetail/${info.id}`}>
                <div className="album-name">
                  <Meta title={info.name} />
                </div>
              </Link>
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
