import React, { Component } from "react";
import { userInfo } from "../../../actions/UserInfo";
import UserInfo from "../../userInfo/userInfo";
import { connect } from "react-redux";
import { Menu,Popover } from "antd";

class RightMenu extends Component {
  componentDidMount() {
    this.props.userInfo();
  }

  render() {
     let {
      display_name = null,
      email = null,
      followers = [],
      country = null,
    } = this.props.user;

    return (
      <Menu mode="horizontal">
       <Menu.Item key="profile">
        <Popover placement="bottom" title={<b>{display_name}</b>} 
        content={<UserInfo email={email} followers={followers} country={country}/>}
         trigger="click">
          <a href="#">My Profile</a>
           </Popover>
        </Menu.Item>
       
        <Menu.Item key="app">
          <a href="#">Log Out</a>
        </Menu.Item>
       
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    error: state.user.error
  };
};

export default connect(
  mapStateToProps,
  { userInfo }
)(RightMenu);
