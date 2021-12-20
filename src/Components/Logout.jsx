import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
// import Cookies from 'universal-cookie'
import Cookies from 'universal-cookie'; 
const cookies = new Cookies();
export class Logout extends Component {
    render() {
        cookies.remove("user_token");
        return (
            <Navigate to="/signin" />
        )
    }
}

export default Logout
