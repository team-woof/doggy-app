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
      <div>
        <form onSubmit={this.onSubmit}>
          <select
            defaultValue="Select Breed"
            onChange={event => this.updateBreed(event)}
          >
            <option disabled>Select Breed</option>
            {Object.entries(this.props.storeData.breeds).map(
              ([breed, index]) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              )
            )}
          </select>
          <select
            defaultValue="Select Location"
            onChange={event => this.updateLocation(event)}
          >
            <option disabled>Select Location</option>
            {Object.entries(this.props.storeData.location).map(
              ([location, index]) => (
                <option key={location} value={location}>
                  {location}
                </option>
              )
            )}
          </select>

          <button>Search</button>
        </form>
        Search bar
      </div>
    );
  }
}

export default Search;
