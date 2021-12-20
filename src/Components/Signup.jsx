import axios from "axios";
import React, { Component } from "react";
import { Link , Navigate } from "react-router-dom";
// import {  } from 'react-router-dom'
export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name : "",  
      email: "",
      password: "",
      confirm_password : "",
      phoneNumber : "",
      redirect : false
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  validate_password = () => {
      if(this.state.password !== this.state.confirm_password) {
          alert("Password must be same !!");
          return false;
      }
      return true;
  }
  submitHandle = (e) => {
      e.preventDefault();
      const data = {
        name : this.state.user_name,
        email_id : this.state.email,
        mobileNo : this.state.phoneNumber,
        password : this.state.password,
      }
      if(this.validate_password()) {
       axios.post ('http://localhost:8080/authentication/signup' , data) 
       .then((res) => {
        const numm = Number(res.status);
        if (Math.floor(numm / 100) === 2) {
          alert("User Registered");
          this.setState({redirect : true});
          console.log(res);
        } else { 
          alert(res.statusText);
        } 
      })
       .catch((err) => {
         console.log(err);
       })



      }
  }
  render() {
    if(this.state.redirect) {
      return <Navigate to='/signin'/>
    }
    return (
      <div className="d-flex row justify-content-center px-5">
        <div className="col-12 col-lg-6 p-2">
          <div className="form-box p-5">
            <form onSubmit={this.submitHandle}>
              <div className="form-group p-2 px-5">
                <h4>Register</h4>
              </div>
              <div className="form-group p-2 px-5">
                <label for="">Name :</label>
                <input
                  type="text"
                  className="form-control"
                  //   autcomplete="false"
                  //   id="exampleFormControlInput1"
                  name="user_name"
                  value={this.state.user_name}
                  onChange={this.onChange}
                  //   autocomplete="x7pv66b"
                  autocomplete="off"
                  required
                />
              </div>
              <div className="form-group p-2 px-5">
                <label for="">Email id :</label>
                <input
                  type="email"
                  className="form-control"
                  //   autcomplete="false"
                  //   id="exampleFormControlInput1"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  //   autocomplete="x7pv66b"
                  autocomplete="off"
                  required
                />
              </div>
              <div className="form-group p-2 px-5">
                <label for="">Phone Number:</label>
                <input
                  type="text"
                  className="form-control"
                  //   autcomplete="false"
                  //   id="exampleFormControlInput1"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.onChange}
                  //   autocomplete="x7pv66b"
                  autocomplete="off"
                  required
                />
              </div>
              <div className="form-group p-2 px-5">
                <label for="">Password :</label>
                <input
                  type="password"
                  className="form-control"
                  //   id="exampleFormControlInput1"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group p-2 px-5">
                <label for="">Confirm Password :</label>
                <input
                  type="password"
                  className="form-control"
                  //   id="exampleFormControlInput1"
                  name="confirm_password"
                  value={this.state.confirm_password}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="px-5 d-flex justify-content-center mt-5">
                <button type="submit" className="btn btn-dark px-5 p-2">
                  {" "}
                  Submit{" "}
                </button>
              </div>
              <div className="d-flex justify-content-center mt-4">
                  <p>Already have a account ? <strong>
                  <Link to="/signin">
                      {" "}
                       Login
                    </Link>
                    </strong> </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
