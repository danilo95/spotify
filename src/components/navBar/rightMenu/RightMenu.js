import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu,Popover } from "antd";
import { userInfo,logOut } from "../../../actions/UserInfo";
import UserInfo from "../../userInfo/UserInfo";


class RightMenu extends Component {
  componentDidMount() {
    this.props.userInfo();
  }

  render() {
     let {
      display_name = null,
      email = null,
      product=null,
      followers = [],
      country = null,
    } = this.props.user;

    return (
      <Menu mode="horizontal">
       <Menu.Item key="profile">
        <Popover placement="bottom" title={<b>{display_name}</b>} 
        content={<UserInfo email={email} followers={followers} country={country} product={product}/>}
         trigger="click">
              <Link to="#">My Profile</Link>
           </Popover>
        </Menu.Item>
       
        <Menu.Item key="app">
        <Link to="#" onClick={this.props.logOut}>Log Out</Link>
        </Menu.Item>
       
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    error: state.user.error,
    logOut:state.userlogOut
  };
};

export default connect(
  mapStateToProps,
  { userInfo,logOut }
)(RightMenu);
