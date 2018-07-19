import React from "react";
import HomeContainer from "../Containers/HomeContainer";
import AboutUsContainer from "../Containers/AboutUsContainer";
import Header from "../components/Header";

class AccountsRoute extends React.Component {
  render() {
    return (
      <div className="aboutus-wrapper">
        <Header />
        <AboutUsContainer />
      </div>
    );
  }
}

export default AccountsRoute;
