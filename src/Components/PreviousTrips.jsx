import axios from "axios";
import React, { Component } from "react";
import Book from "./Book";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export class PreviousTrips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      trains: [],
    };
  }
  toggle = () => {
    this.setState({ toggle: true });
  };
  componentDidMount() {
    const headers = {
      Authorization: "bearer " + cookies.get("user_token"),
    };
    axios
      .get("http://localhost:8080/show-journeys", { headers: headers })
      .then((res) => {
        console.log(res);
        this.setState({ trains: res.data.trains });
      })
      .catch((err) => console.log(err));
  }
  render() {
    if (this.state.toggle) {
      return <Book />;
    }
    return (
      <div>
        <div className="m-2 px-5 ">
          <button
            className="p-1 float-right px-4"
            style={{ borderRadius: "10px" }}
            onClick={this.toggle}
          >
            {" "}
            Book Ticket{" "}
          </button>
        </div>
        <div className="p-5">
          <h4>Your Previous Trips are :</h4>
          {this.state.trains.length === 0 && (
            <h6 style={{ color: "red" }}> No Previous Trips !!</h6>
          )}
          <table>
            { this.state.trains.length && <tr>
              <th>From</th>
              <th>To</th>
              <th>No of Passenegers</th>
              <th>Total Bill</th>
              <th>Departure Time</th>
              <th>Destination Time</th>
            </tr>}
            {this.state.trains.map((train) => {
              return (
                <tr>
                  <td>{train.from_station}</td>
                  <td>{train.to_station}</td>
                  <td>{train.no_of_passenger}</td>
                  <td>{train.cost}</td>
                  <td>{train.arrival_time}</td>
                  <td>{train.departure_time}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default PreviousTrips;
