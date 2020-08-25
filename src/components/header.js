import React, { Component } from 'react';
import LOGO from '../assets/images/logo.jpg';
class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header">
   <button id="navToggle" className="btn btn-outline-success my-2 my-sm-0" type="button"><i style={{fontSize:'20px',color:'white'}} className="fas fa-bars"/></button>
  <div id="logoContainer">
  <a className="navbar-brand" href="#"><img src={LOGO}/></a>
  </div>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li> */}
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button id="logout" className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-power-off" style={{padding:'5px',fontSize:'15px'}}/>Logout</button>
    </form>
  </div>
</nav>
        );
    }
}
export default Header;