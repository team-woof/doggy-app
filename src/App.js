import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import { Header } from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <HomeRoute />} />
        </Switch>
      </div>
    );
  }
}

export default App;
