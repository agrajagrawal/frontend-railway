import axios from "axios";
import React, { Component } from "react";
import Cookies from "universal-cookie";
import PreviousTrips from "./PreviousTrips";
import Login from "./Login";
const cookies = new Cookies();

export class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromStation: "",
      toStation: "",
      onDate: new Date(),
      trainArray: [],
      passengers: 1,
      toggle : false
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  toggle = () => {
    this.setState({toggle : true});
  }
  onSubmitHandle = (e) => {
    e.preventDefault();
    const data = {
      fromStation: this.state.fromStation.toLowerCase(),
      toStation: this.state.toStation.toLowerCase(),
    };
    axios
      .post("http://localhost:8080/search-trains", data)
      .then((res) => {
        const numm = Number(res.status);
        if (Math.floor(numm / 100) === 2) {
          this.setState({ runFirst: true });
          // console.log(res.data.trains);
          this.setState({ trainArray: res.data.trains });
        } else {
          alert(numm);
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
        // console.log(err.response.data.status);
        if(err.response.data.status === 501){
          cookies.remove("user_token");
        }
      });
  };
  bookThisTicket = (train_id , train_from_id , train_to_id) => {
    // console.log(train_id);
    // console.log(train_from_id);
    // console.log(train_to_id);
    // console.log(typeof this.state.onDate);
    const headers = {
      Authorization: "bearer " + cookies.get("user_token"),
    };
    const data = {
      "fromStation" : train_from_id,
    "toStation": train_to_id ,
    "noOfPassengers" : this.state.passengers,
    "train_id": train_id ,
    "date": this.state.onDate
    }
    axios.post('http://localhost:8080/reserve-tickets', data , {headers : headers })
    .then((res) => {console.log(res); alert(res.data.message);})
    .catch((err) => {
      alert(err.response.data.message)
    }); 
  
  };
  render() {
    if(this.state.toggle) {
      return <PreviousTrips />
  }
  // if(!this.state.isLoggedIn){
  //   return <Login />
  // }
    return (
      <>
        <div className="m-2 px-5 ">
          <button className="p-1 float-right px-4" onClick={this.toggle} style={{borderRadius : "10px", position : "fixed"}}> Previous Trips </button>
        </div>
        <div className="d-flex row p-5">
          <div className="form-box p-5 col-12 col-lg-6">
            <form onSubmit={this.onSubmitHandle}>
              <div className="form-group p-2 px-5">
                <label for="">Departure Date :</label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="onDate"
                  value={this.state.onDate}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group p-2 px-5">
                <label for="exampleFormControlSelect1">From :</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  name="fromStation"
                  value={this.state.fromStation}
                  onChange={this.onChange}
                  required
                >
                  <option>Select Station</option>
                  <option>Kanpur-CNB</option>
                  <option>Varanasi-BSB</option>
                  <option>Lucknow-LKO</option>
                  <option>New Delhi-NDLS</option>
                  <option>Prayagraj-PRYJ</option>
                </select>
              </div>
              <div className="form-group p-2 px-5">
                <label for="exampleFormControlSelect1">To :</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  name="toStation"
                  value={this.state.toStation}
                  onChange={this.onChange}
                  required
                >
                  <option>Select Station</option>
                  <option>Kanpur-CNB</option>
                  <option>Varanasi-BSB</option>
                  <option>Lucknow-LKO</option>
                  <option>New Delhi-NDLS</option>
                  <option>Prayagraj-PRYJ</option>
                </select>
              </div>
              <div className="form-group p-2 px-5">
                <label for="exampleFormControlSelect1">
                  Number of Passengers:
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="passengers"
                  id=""
                  value={this.state.passengers}
                  onChange={this.onChange}
                />
              </div>
              <div className="px-5 d-flex justify-content-center mt-5">
                <button type="submit" className="btn btn-dark px-5 p-2">
                  {" "}
                  Find Trains{" "}
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 p-1 px-5 col-lg-6">
            <div className="p-5 form-box">
              <h5>Your Trains will be shown here : </h5>
              {this.state.runFirst && this.state.trainArray.length === 0 && (<h6 className="p-5">No Trains found on this route</h6>)}
              {this.state.runFirst &&
                this.state.trainArray.map((train) => {
                  return (
                    <div className="card1-design mt-1 mb-3">
                      <div className="d-flex justify-content-between">
                        <h3>{train.train_name}</h3>
                        <h6><span style={{color:"green"}}>Fare: ₹{train.train_fare}</span></h6>

                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>{train.fromStation_id.toUpperCase()}</h5>
                        <h5>{train.toStation_id.toUpperCase()}</h5>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h6>{train.arrival_time.toUpperCase()}</h6>
                        <h6>{train.departure_time.toUpperCase()}</h6>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button onClick={() => this.bookThisTicket(train.train_no, train.fromStation_id.toLowerCase(), train.toStation_id.toLowerCase())} style={{borderRadius : "10px"}} className="px-4 p-2">
                          Book
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Book;
