import React, { Component } from "react";

// import 'styles coming soon'

export class Dogprofile extends Component {
  render() {
    return (
      <div className="Dogprofile">
        <div className="Dogprofile__image">Dog picture</div>

        <div className="Dogprofile__information">
          <p>name: 'Max'</p>
          <p>age: '4'</p>
          <p>sex: 'male'</p>
          <p>breed: 'Labrador'</p>
          <div>
            <h3>Hobbies</h3>
            <ul>
              <li>fetching</li>
              <li>swimming</li>
              <li>jumping</li>
            </ul>
          </div>
          <p>description: 'very hairy'</p>
          <p>personality: 'Nice and friendly, loves ducks'</p>
          <p>location: 'Shoreditch',</p>
          <p> contact: ownerName: 'Tom Doe'</p>
          <p>additionalInfo: 'Alergie to cat food'</p>
        </div>
      </div>
    );
  }
}

export default Dogprofile;
