import React, { Component } from "react";
import "../../static/styles/home.scss";

export default class Home extends Component {
  render() {
    return (
      <main className="video-container">
        <div className="video__overlay"></div>
        <video className="video" autoPlay muted loop>
          <source src="../../static/videos/dog01.mp4" type="video/mp4" />
        </video>
      </main>
    );
  }
}
