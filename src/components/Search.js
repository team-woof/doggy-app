import React from 'react';

import { fetchDefaultsAction } from '../actions/actions';

class Search extends React.Component {
  componentDidMount() {
    this.props.data();
  }

  render() {
    console.log(this.props.storeData);
    return (
      <div>
        <form>
          <select>
            {this.props.storeData.breeds.map(breed => {
              return <option key={breed}>{breed}</option>;
            })}
          </select>
          <select>
            {this.props.storeData.location.map(location => {
              return <option key={location}>{location}</option>;
            })}
          </select>

          <button >Search</button>
        </form>
        Search bar
      </div>
    );
  }
}

export default Search;
