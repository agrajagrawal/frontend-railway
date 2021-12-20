import React, { Component } from "react";

export class Giffy extends Component {
  render() {
    return (
      <div className="giffy-style">
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_jumkwubi.json"
          background="transparent"
          speed="1"
          style={{ width: "600px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    );
  }
}

export default Giffy;
