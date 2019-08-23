import React from "react";
import { Link } from "react-router-dom";
import { randomListOfAlbums } from "../../actions/AlbumListActions";
import { connect } from "react-redux";
import { Card,Pagination } from "antd";
import "./albumList.css";
import Search from "../search/search";
const { Meta } = Card;

class AlbumList extends React.Component {
  state = {
    current: 1,
  };
  componentDidMount() {
    this.props.randomListOfAlbums('*a','20');
  }

  onChange = page => {
    this.setState({
      current: page,
    });
    this.props.randomListOfAlbums(page,'20');
  };

   searchHandler = (search,offset) => {
    this.props.randomListOfAlbums(search,offset);
  };

  render() {
    let {
      items = [],
      total=0
    } = this.props.albums;
    return (
      <>
      <div className="search-container">
      <Search searchHandler={this.searchHandler}/>
      </div>
        {items.map((info, index) => {
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
              <Link to={`/ArtistDetail/${info.artists[0].id}`}>
                <div className="album-artist">
                  <Meta description={info.artists[0].name} />
                </div>
              </Link>
            </Card>
          );
        })}
       <Pagination defaultCurrent={this.state.current} total={(total/20)}  onChange={this.onChange}/>
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