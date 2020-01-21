import React, { Component } from "react";
import { Layout, Menu, Icon, Button } from "antd";

import { Link } from "react-router-dom";

import "antd/dist/antd.css";

const { Header } = Layout;

export default class HeaderCls extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <section id="header-section">
        <div id="logo" className="logo text-center">
          <img src="/images/logo.png" height="100"></img>
        </div>
        <Header id="navtop-header-antd">
          <div className="bg-gray float-left"></div>
        </Header>
      </section>
    );
  }
}
