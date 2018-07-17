import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './Containers/HomeContainer';
import { Header } from './components/Header';
import SearchContainer from './Containers/SearchContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <HomeContainer />} />
          <Route exact path="/search" render={() => <SearchContainer />} />
        </Switch>
      </div>
    );
  }
}

export default App;
