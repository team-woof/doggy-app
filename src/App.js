import React from "react";
import { Route, Switch } from "react-router-dom";

import "../static/styles/style.scss";

import { Header } from "./components/Header";
import SearchContainer from "./Containers/SearchContainer";
import HomeRoute from "./Routes/HomeRoute";
import DogprofileRoute from "./Routes/DogprofileRoute";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <HomeRoute />} />
          <Route exact path="/search" render={() => <SearchContainer />} />
          <Route exact path="/profile" render={() => <DogprofileRoute />} />
        </Switch>
      </div>
    );
  }
}

export default App;
