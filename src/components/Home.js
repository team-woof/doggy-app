import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <main>
        <div>{this.props.homeReducer}</div>
      </main>
    );
  }
}
