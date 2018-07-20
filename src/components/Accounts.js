import React, { Component } from "react";

import "../../static/styles/components/account.scss";

export class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: ""
    };
  }
  authWithServer({ username, password }) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(resp => {
        if (resp.status == 200) {
          return resp.json();
        } else {
          return resp.text();
        }
      })
      .then(data => {
        if (data.access_token) {
          console.log(`Access Token: ${data.access_token}`);
          this.setState({ loggedIn: true, username: username });
        }
      })
      .then(data => console.log(data));
  }

  handelSumbit(event) {
    event.preventDefault();

    const username = event.target[0].value;
    const password = event.target[1].value;
    console.log("wof", { username, password });
    this.authWithServer({ username, password });
  }
  render() {
    return (
      <div className="Accounts">
        <div className="video-container">
          <div className="video__overlay" />
          <video className="video" autoPlay muted loop>
            <source src="../../static/videos/dog02.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="login-page">
          <div className="form">
            {/* <form className="register-form">
              <input type="text" placeholder="name" />
              <input type="current-password" placeholder="current-password" />
              <input type="text" placeholder="email address" />
              <button>create</button>
              <p className="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </form> */}
            <form
              className="login-form"
              onSubmit={event => this.handelSumbit(event)}
            >
              <input type="text" placeholder="username" />
              <input
                type="current-password"
                ref="currentPassword"
                placeholder="current-password"
              />
              <button type="submit">login</button>
              {!this.state.loggedIn ? (
                <p className="message">
                  Not registered? <a href="#">Create an account</a>
                </p>
              ) : (
                <p className="message">
                  You are now loged in as {this.state.username}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Accounts;
