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
                          <p>name: {result.name}</p>
                          <p>age: {result.age}</p>
                          <p>sex: {result.gender}</p>
                          <p>breed: {result.breed}</p>
                          <div>
                            <h3>Hobbies</h3>
                            <ul>
                              {result.hobbies.map(hobby => {
                                return <li>{hobby}</li>;
                              })}
                            </ul>
                          </div>
                          <p>description: {result.description}</p>
                          <p>personality: {result.personality}</p>
                          <p>location: {result.location},</p>
                          <p> contact: {result.contact.ownerName}</p>
                          <p> contact: {result.contact.ownerNumber}</p>
                          <p> contact: {result.contact.ownerEmail}</p>
                          <p>additionalInfo: {result.additionalInfo}</p>
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
