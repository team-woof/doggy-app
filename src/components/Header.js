import React, { Component } from "react";
import '../../static/styles/components/header.scss'
export class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="main-header__logo">ChasingTheTail</div>
      </header>
    );
  }
}
