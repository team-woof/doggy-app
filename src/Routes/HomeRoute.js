import React from 'react';
import Header from '../components/Header';
import HomeContainer from '../Containers/HomeContainer';
import SearchContainer from '../Containers/SearchContainer';

class HomeRoute extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <HomeContainer />
        <div className="home__search">
          <SearchContainer />
        </div>
      </div>
    );
  }
}

export default HomeRoute;
