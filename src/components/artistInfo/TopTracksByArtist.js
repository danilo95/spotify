import React from "react";
import { connect } from "react-redux";
import { List, Avatar } from "antd";
import { topTracks } from "../../actions/artistActions";
import { convertToMinutes } from "../../utilities/UtilitiesFunctions";
import "./topTracks.css";

class TopTracksByArtist extends React.Component {

  componentDidMount() {
  this.props.topTracks(this.props.id)
  }

  render() {  let {
      tracks = []
    } = this.props.topArtistTracks;
    return (
      <div className="list-top-trakcs"> 
       <List
        header={<div>Top Tracks</div>}
          itemLayout="horizontal"
          dataSource={tracks}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://library.kissclipart.com/20180904/ole/kissclipart-play-button-png-clipart-computer-icons-clip-art-310d0da4a284c23a.jpg" />}
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topArtistTracks: state.artist.topTracks
  };
};

export default connect(
  mapStateToProps,
  { topTracks }
)(TopTracksByArtist);
