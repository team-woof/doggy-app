import React from "react";
import DogprofileContainer from "../Containers/DogprofileContainer";

class DogprofileRoute extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <DogprofileContainer />
      </div>
    );
  }
}

export default DogprofileRoute;
