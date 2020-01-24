import React, { Component } from "react";
import download from "../images/download.png";
import { Link } from "react-router-dom";
import Ripples from "react-ripples";
import login from "./login";
import signup from "./signup";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home">
          <img src={download} alt="logo" width="200"></img>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/jobs" className="nav-link">
                Browse Jobs
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Browse Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li>
              <Ripples color="#fff" during={1200}>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={login}
                >
                  Log In
                </button>
              </Ripples>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li>
              <Ripples color="#fff" during={1200}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={signup}
                >
                  Sign Up
                </button>
              </Ripples>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
