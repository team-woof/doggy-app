import React from "react";
import HomeContainer from "../Containers/HomeContainer";
import AccountsContainer from "../Containers/AccountsContainer";
import Header from "../components/Header";

class AccountsRoute extends React.Component {
  render() {
    return (
      <div className="accounts-wrapper">
        <Header />
        <AccountsContainer />
      </div>
    );
  }
}

export default AccountsRoute;
