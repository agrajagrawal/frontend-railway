/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Main from "./Main";
// import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import Cookies from "universal-cookie";
import Logout from "./Logout";
import Book from "./Book";
const cookies = new Cookies();
export class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false,};
  }

  render() {
    let isLoggedIn;
    if(cookies.get("user_token"))
     isLoggedIn = true;
    else
     isLoggedIn = false;
    // console.log(cookies.get("user_token"), isLoggedIn);
    let log, authLink;
    if(isLoggedIn){
      log = 'LogOut';
      authLink = '/logout';
    }
    else{
      log = 'LogIn';
      authLink = '/signin';
    }
    // const authLink = (isLoggedIn) ? '/logout' : '/signin';
    return (
        <>
        <Router>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
          <div className="container-fluid ">
            <a className="navbar-brand" href="#">
              
             <strong><h3>Ticket-wala.com</h3></strong> 
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item px-2">
                    <Link className="nav-link active" aria-current="page" to="/">
                      {" "}
                      Home 
                    </Link>
                  </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/about">
                      {" "}
                      About Us
                    </Link>
                  </li>
                  
                  <li className="nav-item px-2" style={{border: "0.2px solid white" , borderRadius: "10px" }}>
                    <Link className="nav-link" to= {authLink}>
                      {" "}
                       <span style={{}}> 
                          {log}
                        </span>
                    </Link>
                  </li>
                   
              </ul>
              
              {/* <span class="navbar-text">
                Navbar text with an inline element
              </span> */}
            </div>
          </div>
        </nav>
        <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/signin" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/book" element={<Book />} />
                  <Route path="/logout" element={<Logout />} />

                </Routes>
        </Router>
        </>

    );
  }
}

export default Navbar;
