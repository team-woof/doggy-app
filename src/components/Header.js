import React, { Component } from "react";
import Navigation from "./Navigation";

import "../../static/styles/components/header.scss";
export class Header extends Component {
  render() {
    return (
      <header className="main-header header__background__colour ">
        <div className="main-header__logo">ChasingTheTail</div>
        <Navigation />
      </header>
    );
  }
}
