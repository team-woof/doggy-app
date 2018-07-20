import React from 'react';
import { Redirect } from 'react-router-dom';
import { isArray } from 'util';
import '../../static/styles/components/result.scss';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  setRedirect() {
    this.setState({
      redirect: true
    });
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/profile" />;
    }
  }

  onClickHandler(result) {
    console.log('result', result);
    this.props.profileId(result);
    this.setRedirect();
  }

  render() {
    return (
      <div className="results-container">
        {isArray(this.props.searchResults)
          ? this.props.searchResults.map(result => {
            return (
              <div key={result.id} className="result-card">
                {this.renderRedirect()}
                <div className="result-card__img-box">
                  <img
                    className="result-card__img"
                    src={result.images}
                    alt={result.name}
                  />
                </div>
                <div className="result-card__details">
                  <div className="result-card__name">
                    <strong>Name: </strong>
                    {result.name}
                  </div>
                  <div className="result-card__location">
                    <strong>Location: </strong>
                    {result.location}
                  </div>
                  <div className="result-card__gender">
                    <strong>Gender: </strong>
                    {result.gender}
                  </div>
                </div>
                <button
                  onClick={() => this.onClickHandler(result.id)}
                  className="result-card__profile-button"
                >
                  Full Profile
                  </button>
              </div>
            );
          })
          : ''}
      </div>
    );
  }
}

export default Results;
