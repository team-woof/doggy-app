import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../static/styles/style.scss';

import { Header } from './components/Header';
import SearchContainer from './Containers/SearchContainer';
import HomeRoute from './Routes/HomeRoute';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <HomeRoute />} />
          <Route exact path="/search" render={() => <SearchContainer />} />
        </Switch>
      </div>
    );
  }
}

export default App;
