import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <>
      <div className="d-flex row justify-content-center p-2 px-4">
        <div className="col-12 col-lg-6 p-5">
          <div className="form-box p-5">
            <h4 style={{"font-family": "cursive", "font-size": "25px"}}><strong>About Us:</strong></h4>
            <p className="mt-5" style={{"font-family": "cursive", "font-size": "16px"}}>
              Hello , <br />
              We are students of IET Lucknow 3rd Year and building this railway
              reservation project as mini project of this semester.
              <br />
              This Porjects helps you to basically book a ticket and view your
              previous trips as well. <br />
              <br />
              <strong>Technologies Used are :</strong>
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
            <h4 style={{fontFamily: "cursive", fontSize: "25px"}}><strong>Contact Us:</strong></h4>
            <p className="mt-5" style={{fontFamily: "cursive", fontSize: "16px"}}>
              If you want to give any feedback/suggestion regarding the project
              mail us <a href="mailto:agrajagrawal2018@gmail.com" style={{textDecoration: "none"}}>here</a>.
            </p>
            <h5 className="mt-5"  style={{fontFamily: "cursive", fontSize: "16px"}}><strong>Team Members :</strong></h5>
            <ul style={{"font-family": "cursive", "font-size": "16px"}}>
                <li title="1900520130007">Agraj Agrawal</li>
                <li title="1900520130039">Umesh Kaushik</li>
                <li title="1900520130039">Priyansh Singh</li>
                <li title="2000520139006">Shalini Singh</li>
                <li title="1900520130019">Devang Gupta</li>
                <li title="1900520200019">Bhavini Pandey</li>
            </ul>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default About;
