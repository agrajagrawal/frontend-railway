import React, { Component } from "react";
import About from "./About";
import Login from "./Login";
import Main from "./Main";
import Navbar from "./Navbar";
import Signup from "./Signup";

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
        {/* <h1>Railways</h1> */}
      </div>
    );
  }
}

export default App;
