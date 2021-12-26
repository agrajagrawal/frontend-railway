import React from "react";
import  { Navigate } from 'react-router-dom'
import './all.css'

function Click(){
    return <Navigate to='/'/>
}
function Page404() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>
            4<span>0</span>4
          </h1>
        </div>
        <h2>the page you requested could not found</h2>
        <br />
        <br />
        <button onClick={Click} className="btn btn-success px-4 p-2">Go Back</button>
      </div>
    </div>
  );
}

export default Page404;
