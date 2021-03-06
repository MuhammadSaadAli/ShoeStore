import React from 'react';
import {Link} from 'react-router-dom'

    // Components 



export default function SimpleMenu() {

    

  return (
    <div  className='nav justify-content-center animate__animated animate__pulse ' style={{backgroundColor:'#b3ccff' }}>




<nav className="navbar navbar-expand-lg navbar-light  ">

  <div style={{display:'flex', justifyContent:"flex-end"}} className=" collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
      <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/About">About</Link>

      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/Product">Product</Link>
        
      </li>
      
    </ul>
    <span style={{marginLeft:'10%'}} className="navbar-text">
      
      <Link  className="nav-link" to="/Cart"> &nbsp; 
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bag-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M5.5 3.5a2.5 2.5 0 0 1 5 0V4h-5v-.5zm6 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
</svg> &nbsp; 
      </Link>
        
      </span>
  </div>
</nav>

    </div>
  );
}
