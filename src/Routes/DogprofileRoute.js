import React from "react";
import DogprofileContainer from "../Containers/DogprofileContainer";
import HomeContainer from "../Containers/HomeContainer";

class DogprofileRoute extends React.Component {
  render() {
    return (
      <div className="home">
        <DogprofileContainer profileID={this.props.params.id} />
      </div>
    );
  }
}

export default DogprofileRoute;
