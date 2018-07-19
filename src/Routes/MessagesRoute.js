import React from "react";
import MessagesContainer from "../Containers/MessagesContainer";

class MessagesRoute extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="messages">
        <MessagesContainer />
      </div>
    );
  }
}

export default MessagesRoute;
