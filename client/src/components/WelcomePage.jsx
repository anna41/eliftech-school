import React, { Component } from "react";

class Welcome extends Component {
  render() {
    console.log(this.props.location.state)
    return (
      <div>
        Welcome
      </div>
    );
  }
}

export default Welcome;