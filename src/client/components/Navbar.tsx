import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container">
        <title className="navbar-brand">
          Ethan's Blog Site
        </title>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/about'}>
                About This Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/compose'}>
                Compose Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
