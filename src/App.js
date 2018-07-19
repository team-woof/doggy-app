import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../static/styles/style.scss';

import { Header } from './components/Header';
import SearchRoute from './Routes/SearchRoute';
import HomeRoute from './Routes/HomeRoute';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <HomeRoute />} />
          <Route exact path="/search-results" render={() => <SearchRoute />} />
        </Switch>
      </div>
    );
  }
}

export default App;
