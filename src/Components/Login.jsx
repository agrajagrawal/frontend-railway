import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false,
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  submitHandle = (e) => {
    e.preventDefault();
    const data = {
      email_id: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:8080/authentication/login", data)
      .then((res) => {
        const numm = Number(res.status);
        if (Math.floor(numm / 100) === 2) {
          console.log(res);
          console.log("Token Set");
          cookies.set("user_token", res.data.token, { path: "/" });
          this.setState({ redirect: true });
        } 
      })
      .catch((err) => {
        alert(err.response.data.message)
      });
  };
  render() {
    if (this.state.redirect) {
      return <Navigate to="/book" />;
    }

    return (
      <div className="d-flex row justify-content-center p-3 px-5">
        <div className="col-12 col-lg-6 p-5">
          <div className="form-box p-5">
            <form onSubmit={this.submitHandle}>
              <div className="form-group p-2 px-5">
                <h4>Login</h4>
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
              <div className="px-5 d-flex justify-content-center mt-5">
                <button type="submit" className="btn btn-dark px-5 p-2">
                  {" "}
                  Login{" "}
                </button>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <p>
                  Create a new Account ?{" "}
                  <strong>
                    <Link to="/signup"> SignUp</Link>
                  </strong>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
