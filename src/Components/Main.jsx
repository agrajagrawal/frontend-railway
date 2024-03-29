import React, { Component } from "react";
import Giffy from "./Giffy";
import axios from "axios";
import { Link } from "react-router-dom";
export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromStation: "",
      toStation: "",
      onDate: new Date(),
      trainArray: [],
      runFirst: false,
      isLoggedIn: false,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHanlde = (e) => {
    e.preventDefault();
    if(this.state.fromStation==="" || this.state.toStation===""){
      alert("Some Fields Are Missing");
    }
    const data = {
      fromStation: this.state.fromStation,
      toStation: this.state.toStation,
    };
    axios
      .post("http://localhost:8080/search-trains", data)
      .then((res) => {
        const numm = Number(res.status);
        console.log(numm);
        if (Math.floor(numm / 100) === 2) {
          this.setState({ runFirst: true });
          this.setState({ trainArray: res.data.trains });
        } else {
          alert(numm);
        }
      })
      .catch((err) => {
        if(err.response.data.data){
          alert(err.response.data.data[0].msg);
        }
        else{
          alert(err.response.data.message)
        }
      });
  };
  render() {
    return (
      <>
        <div className="row d-flex" style={{"fontFamily": "cursive"}}>
          <div className="col-12 col-lg-6 p-5">
            <div className="form-box p-5 ">
              <form onSubmit={this.submitHanlde}>
                <div className="form-group p-2 px-5">
                  <label for="">Departure Date :</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="onDate"
                    value={this.state.onDate}
                    onChange={this.onChange}
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
                <div className="px-5 d-flex justify-content-center mt-5">
                  <button type="submit" className="btn btn-dark px-5 p-2">
                    {" "}
                    Search{" "}
                  </button>
                </div>
              </form>
              {this.state.runFirst && (
                <h4 className="p-2">Your Trains Are : </h4>
              )}
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
                    </div>
                  );
                })}
                {this.state.runFirst && this.state.trainArray.length === 0 && (<h6>No Trains found on this route</h6>)}
              <div className="d-flex justify-content-center mt-4 ">
                <Link className="nav-link" to="/book">
                <button className="btn btn-dark px-4 p-2 book-button">
                  {" "}
                  Book Train{" "}
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 p-5">
            <Giffy className="giffy-style" />
          </div>
        </div>
      </>
    );
  }
}

export default Main;
