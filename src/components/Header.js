import React, { Component } from "react";
import Navigation from "./Navigation";

import '../../static/styles/components/header.scss'
export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="main-header__logo">ChasingTheTail</div>
        <Navigation />
      </header>
    );
  }
}
