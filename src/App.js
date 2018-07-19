import React from "react";
import { Route, Switch } from "react-router-dom";

import "../static/styles/style.scss";

import { Header } from "./components/Header";
import SearchContainer from "./Containers/SearchContainer";
import HomeRoute from "./Routes/HomeRoute";
import DogprofileRoute from "./Routes/DogprofileRoute";
import AccountsRoute from "./Routes/AccountsRoute";
import ErrorRoute from "./Routes/ErrorRoute";
import AboutUsRoute from "./Routes/AboutUsRoute";
import MessagesRoute from "./Routes/MessagesRoute";

class App extends React.Component {
  render() {
    return (
      <div className="App App__background__colour">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <HomeRoute />} />
          <Route exact path="/search" render={() => <SearchContainer />} />
          <Route
            exact
            path="/profile/:id"
            render={({ match }) => <DogprofileRoute {...match} />}
          />
          <Route exact path="/account" render={() => <AccountsRoute />} />
          <Route exact path="/about-us" render={() => <AboutUsRoute />} />
          <Route
            exact
            path="/account/messages"
            render={() => <MessagesRoute />}
          />
          <Route component={ErrorRoute} />
        </Switch>
      </div>
    );
  }
}

export default App;
