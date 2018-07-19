import React from "react";
import DogprofileContainer from "../Containers/DogprofileContainer";
import HomeContainer from "../Containers/HomeContainer";

class DogprofileRoute extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="home">
        <DogprofileContainer />
      </div>
    );
  }
}

export default DogprofileRoute;
