import React from 'react';
import '../../static/styles/components/search.scss'

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
    console.log(this.props.storeData)
    return (
      <div className="search__container">
        <div className="search">
          <form className="search__form" onSubmit={this.onSubmit}>
            <div className="custom-select">
              <select
                className="search__select"
                defaultValue="Select Breed"
                onChange={event => this.updateBreed(event)}
              >
                <option disabled>Select Breed</option>
                {Object.entries(this.props.storeData.breeds).map(
                  ([breed, index]) => <option key={breed}>{breed}</option>
                )}
              </select>
            </div>
            <div className="custom-select">
              <select
                className="search__select"
                defaultValue="Select Location"
                onChange={event => this.updateLocation(event)}
              >
                <option disabled>Select Location</option>
                {Object.entries(this.props.storeData.location).map(
                  ([location, index]) => (
                    <option key={location}>{location}</option>
                  )
                )}
              </select>
            </div>
            <button className="search__button">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
