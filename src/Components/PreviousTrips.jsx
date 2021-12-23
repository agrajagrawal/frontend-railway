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
        <h4>Your Upcoming Trips are :</h4>
          {this.state.trains.length === 0 && (
            <h6 style={{ color: "red" }}> No Previous Trips !!</h6>
          )}
          <table>
            { this.state.trains.length && <tr>
              <th>From</th>
              <th>To</th>
              <th>Journey Date</th>
              <th>No of Passenegers</th>
              <th>Total Bill</th>
              <th>Departure Time</th>
              <th>Destination Time</th>
            </tr>}
            {this.state.trains.map((train) => {
               let d = new Date();
               d = d.toDateString();
               const date = d.split(' ');
               let month;
               if(date[1] === 'Jan')
                month = 1;
               else if(date[1] === 'Feb')
                month = 2;
               else if(date[1] === 'Mar')
                month = 3;
               else if(date[1] === 'Apr')
                month = 4;
               else if(date[1] === 'May')
                month = 5;
               else if(date[1] === 'Jun')
                month = 6;
               else if(date[1] === 'Jul')
                month = 7;
               else if(date[1] === 'Aug')
                month = 8;
               else if(date[1] === 'Sep')
                month = 9;
               else if(date[1] === 'Oct')
                month = 10;
               else if(date[1] === 'Nov')
                month = 11;
               else if(date[1] === 'Dec')
                month = 12;
              //  console.log(train.journey_date.split('-'));
               const dateOfJourney = train.journey_date.split('-')[2].split('T')[0];
               if(Number(date[3]) >= Number(train.journey_date.split('-')[0]) && month >= Number(train.journey_date.split('-')[1]) && Number(date[2]) >= Number(dateOfJourney)){
                return (
                  <tr>
                    <td>{train.from_station.toUpperCase()}</td>
                    <td>{train.to_station.toUpperCase()}</td>
                    <td>{date.slice(1,).join('-')}</td>
                    <td>{train.no_of_passenger}</td>
                    <td>{train.cost}</td>
                    <td>{train.arrival_time}</td>
                    <td>{train.departure_time}</td>
                  </tr>
                );
               }
            })}
          </table>

          <br></br><br></br>
          
          <h4>Your Previous Trips are :</h4>
          {this.state.trains.length === 0 && (
            <h6 style={{ color: "red" }}> No Previous Trips !!</h6>
          )}
          <table>
            { this.state.trains.length && <tr>
              <th>From</th>
              <th>To</th>
              <th>Journey Date</th>
              <th>No of Passenegers</th>
              <th>Total Bill</th>
              <th>Departure Time</th>
              <th>Destination Time</th>
            </tr>}
            {this.state.trains.map((train) => {
               let d = new Date();
               d = d.toDateString();
               const date = d.split(' ');
               let month;
               if(date[1] === 'Jan')
                month = 1;
               else if(date[1] === 'Feb')
                month = 2;
               else if(date[1] === 'Mar')
                month = 3;
               else if(date[1] === 'Apr')
                month = 4;
               else if(date[1] === 'May')
                month = 5;
               else if(date[1] === 'Jun')
                month = 6;
               else if(date[1] === 'Jul')
                month = 7;
               else if(date[1] === 'Aug')
                month = 8;
               else if(date[1] === 'Sep')
                month = 9;
               else if(date[1] === 'Oct')
                month = 10;
               else if(date[1] === 'Nov')
                month = 11;
               else if(date[1] === 'Dec')
                month = 12;
              //  console.log(train.journey_date.split('-'));
               const dateOfJourney = train.journey_date.split('-')[2].split('T')[0];
               if(Number(date[3]) < Number(train.journey_date.split('-')[0]) || month < Number(train.journey_date.split('-')[1]) || Number(date[2]) < Number(dateOfJourney)){
                return (
                  <tr>
                    <td>{train.from_station.toUpperCase()}</td>
                    <td>{train.to_station.toUpperCase()}</td>
                    <td>{date.slice(1,).join('-')}</td>
                    <td>{train.no_of_passenger}</td>
                    <td>{train.cost}</td>
                    <td>{train.arrival_time}</td>
                    <td>{train.departure_time}</td>
                  </tr>
                );
               }
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default PreviousTrips;
