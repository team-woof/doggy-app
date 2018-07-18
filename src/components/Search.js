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
          <select onChange={event => this.updateBreed(event)}>
            <option disabled defaultValue>
              Select Breed
            </option>
            {this.props.storeData.breeds.map((breed, index) => {
              return <option key={index}>{breed}</option>;
            })}
          </select>
          <select onChange={event => this.updateLocation(event)}>
            <option disabled defaultValue>
              Select Location
            </option>
            {this.props.storeData.location.map((location, index) => {
              return <option key={index}>{location}</option>;
            })}
          </select>

          <button>Search</button>
        </form>
        Search bar
      </div>
    );
  }
}

export default Search;
