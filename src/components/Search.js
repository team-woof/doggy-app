import React from 'react';
import '../../static/styles/components/search.scss';
import { Link, Redirect } from 'react-router-dom';

import { fetchDefaultsAction } from '../actions/actions';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      breed: '',
      location: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.updateBreed = this.updateBreed.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }
  componentDidMount() {
    this.props.fetchDefaults();
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.breed === '' && this.state.location === '') {
      console.log('whoop');
      return;
    }
    this.props.onSubmit(this.state.breed, this.state.location);
    this.setRedirect();
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
  setRedirect() {
    this.setState({
      redirect: true
    });
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/search-results" />;
    }
  }

  render() {
    return (
      <div className="search__container">
        {this.renderRedirect()}
        <div className="search">
          <form className="search__form" onSubmit={() => this.onSubmit()}>
            <div className="custom-select">
              <select
                className="search__select"
                defaultValue="Select Breed"
                onChange={event => this.updateBreed(event)}
              >
                <option disabled>Select Breed</option>
                <option>All</option>
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
                <option>All</option>
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
