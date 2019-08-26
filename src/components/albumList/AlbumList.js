import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./albumList.css";
import { Card,Pagination } from "antd";
import { randomListOfAlbums } from "../../actions/AlbumListActions";
import Search from "../search/Search";
import DataNotFound from "../errorPages/DataNotFound";
const { Meta } = Card;

class AlbumList extends React.Component {
  state = {
    current: 1,
    search: "*a"
  };
  componentDidMount() {
    this.props.randomListOfAlbums(this.state.search,'20');
  }

  onChange = (page) => {
    this.setState({
      current: page,
    });
    this.props.randomListOfAlbums(this.state.search,page*20);
  };

   searchHandler = (search,offset) => {
     this.setState({search})
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
        {items.length>0?
      items.map((info, index) => {   
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
  
    })  
      :<DataNotFound/>
      }
      <div className="pagination-section">
       <Pagination defaultCurrent={this.state.current} total={(total/20)}  onChange={this.onChange}/>
       </div>
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