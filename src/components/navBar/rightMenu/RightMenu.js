import React, { Component } from "react";
import { Menu } from "antd";

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="app">
          <a>Log Out</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
