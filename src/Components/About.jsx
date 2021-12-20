import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="d-flex row justify-content-center p-2 px-4">
        <div className="col-12 col-lg-6 p-5">
          <div className="form-box p-5">
            <h4>About Us:</h4>
            <p className="mt-5">
              Hello , <br />
              We are students of IET Lucknow 3rd Year and building this railway
              reservation project as mini project of this semester.
              <br />
              This Porjects helps you to basically book a ticket and view your
              previous trips as well. <br />
              <br />
              Technologies Used are :
              <ul>
                <li>React Js</li>
                <li>Node Js</li>
                <li>Rest API</li>
                <li>MySQL</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-5">
          <div className="form-box p-5">
            <h4>Contact Us:</h4>
            <p className="mt-5">
              If you want to give any feedback/suggestion regrading the project
              mail us <a href="mailto:agrajagrawal2018@gmail.com">here</a>.
            </p>
            <h6 className="mt-4">Team Members :</h6>
            <ul>
              <li>Agraj Agrawal</li>
              <li>Umesh </li>
              <li>Priyansh Singh</li>
              <li>Shalini Singh</li>
              <li>Devang Gupta</li>
              <li>Bhavini Pandey</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
