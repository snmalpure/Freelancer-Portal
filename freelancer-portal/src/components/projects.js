import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Proj = props => (
  <tr>
    <td>{props.proj.title}</td>
    <td>{props.proj.author}</td>
    <td>{props.proj.description}</td>
    <td>{props.proj.category}</td>
    <td>
      <Link to={"/auction/" + props.proj._id}>Auction now</Link>
    </td>
  </tr>
);

class projects extends Component {

  constructor(props) {
    super(props);
    this.state = { projs: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/freelance_db/projects')
      .then(response => {
        this.setState({ projs: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  projList() {
    return this.state.projs.map(function (currentProj, i) {
      return <Proj proj={currentProj} key={i} />;
    });
  }


  render() {
    return (
      <div>
        <h3>List of Projects</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.projList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default projects;



