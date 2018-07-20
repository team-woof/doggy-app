import React from 'react';

import Header from './Header';
import '../../static/styles/components/Dogprofile.scss';

// import styles

export class Dogprofile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Dogprofile">
        <div className="search__results">
          <div className="search-result__header">
            <Header />
          </div>

          <div className="Dogprofile__information">
            {this.props.searchResults.length > 0
              ? this.props.searchResults.map(result => {
                if (result.id === this.props.profileId) {
                  return (
                    <div
                      className="Dogprofile__img__container"
                      key={result.name}
                    >
                      <img className="Dogprofile__img" src={result.images} />
                      <div className="Dogprofile__details">
                        <div><strong>Name:</strong> {result.name}</div>
                        <div><strong>Age:</strong> {result.age}</div>
                        <div><strong>Gender:</strong> {result.gender}</div>
                        <div><strong>Breed:</strong> {result.breed}</div>
                        <div>
                          <h3>Hobbies</h3>
                          <ul>
                            {result.hobbies.map(hobby => {
                              return <li>{hobby}</li>;
                            })}
                          </ul>
                        </div>
                        <div><strong>Description:</strong> {result.description}</div>
                        <div><strong>Personality:</strong> {result.personality}</div>
                        <div><strong>Location:</strong> {result.location},</div>
                        <div><strong>Contact:</strong> {result.contact.ownerName}</div>
                        <div>{result.contact.ownerNumber}</div>
                        <div>{result.contact.ownerEmail}</div>
                        <div><strong>Additional info:</strong> {result.additionalInfo}</div>
                        <a className="dogprofile__email-button" href={"mailto:" + result.contact.ownerEmail + "?subject=Contact from ChasingTheTail"}>Email owner</a>
                      </div>
                    </div>
                  );
                }
              })
              : 'No profile selected'}
          </div>
        </div>
      </div>
    );
  }
}

export default Dogprofile;
