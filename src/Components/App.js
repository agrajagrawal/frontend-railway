import React, { Component } from "react";
import Navbar from "./Navbar";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          className="d-flex justify-content-center fixed-bottom opacity-75"
          style={{ color: "#708596" }}
        >
          <em>
            <h6> &copy; 2021-2022</h6>
          </em>
        </div>
      </div>
    );
  }
}

export default App;
