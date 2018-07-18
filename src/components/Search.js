import React from 'react';

import { fetchDefaultsAction } from '../actions/actions';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breed: '',
      location: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.updateBreed = this.updateBreed.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }
  componentDidMount() {
    this.props.fetchDefaults();
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.breed, this.state.location);
  }

  updateBreed(event) {
    const value = event.target.value;
    this.setState({
      breed: value
    });
  }
  updateLocation(event) {
    const value = event.target.value;
    this.setState({
      location: value
    });
  }

  render() {
    return (

      <div className="search">
        <form className="search__form" onSubmit={this.onSubmit}>
          <div className="custom-select">
            <select className="search__select" onChange={event => this.updateBreed(event)}>
              <option disabled selected>
                Select Breed
            </option>
              {Object.entries(this.props.storeData.breeds).map(
                ([breed, index]) => <option key={index}>{breed}</option>
              )}
            </select>
          </div>
          <div className="custom-select">
            <select className="search__select" onChange={event => this.updateLocation(event)}>
              <option disabled selected>
                Select Location
            </option>
              {Object.entries(this.props.storeData.location).map(
                ([location, index]) => <option key={index}>{location}</option>
              )}
            </select>
          </div>
          <button className="search__button">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
