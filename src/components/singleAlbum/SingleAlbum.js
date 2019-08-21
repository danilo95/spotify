import React from "react";
import { singleAlbumData } from "../../actions/AlbumListActions";
import { convertToMinutes } from "../../utilities/UtilitiesFunctions";
import AlbumCover from "./albumCover/AlbumCover";
import { connect } from "react-redux";
import { List, Avatar } from "antd";

class SingleAlbum extends React.Component {
  componentDidMount() {
    this.props.singleAlbumData(this.props.id);
  }

  render() { 
    let {
      tracks = [],
      images = [],
      artists = [],
      name = null,
      external_urls = null
    } = this.props.singleAlbum;
    return (
      <>
        <AlbumCover
          images={images}
          artists={artists}
          albumName={name}
          external_urls={external_urls}
        />
        <List
          itemLayout="horizontal"
          dataSource={tracks.items}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`${images[0].url}`} />}
                title={
                  <a
                    href={item.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                }
                description={"Duration: " + convertToMinutes(item.duration_ms)}
              />
            </List.Item>
          )}
        />
        ,
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleAlbum: state.albums.singleAlbum
  };
};

export default connect(
  mapStateToProps,
  { singleAlbumData }
)(SingleAlbum);
