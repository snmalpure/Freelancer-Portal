import React, { Component } from "react";
import { Link } from "react-router-dom";

class jobs extends Component {
  render() {
    return (
      <div>
        <h1>Browse Jobs</h1>
        <button>
          <Link to="/counter" className="nav-link">
            Bid Now
          </Link>
        </button>
      </div>
    );
  }
}

export default jobs;
