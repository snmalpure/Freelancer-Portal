import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import "./jobs.css";

const Job = (props) => (
  /*<tr>
    <td>{props.job.title}</td>
    <td>{props.job.author}</td>
    <td>{props.job.description}</td>
    <td>{props.job.category}</td>
    <td>
      <Link to={"/bid/" + props.job._id}>Bid now</Link>
    </td>
  </tr>*/
  <div class="card-list">
    <Card>
      <Card.Body>
        <Card.Title>{props.job.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.job.author}
        </Card.Subtitle>
        <Card.Text>{props.job.description}</Card.Text>
        <Card.Footer>{props.job.category}</Card.Footer>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  </div>
);

export default class jobs extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/freelance_db/jobs")
      .then((response) => {
        this.setState({ jobs: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  jobList() {
    return this.state.jobs.map(function (currentJob, i) {
      return <Job job={currentJob} key={i} />;
    });
  }

  render() {
    return (
      /*<div>
        <h3>List of Jobs</h3>
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
            {this.jobList()}
          </tbody>
        </table>
      </div>*/

      <div>
        <h3>List of Jobs</h3>
        <div class="row">
          <Row>
            <div class="column">
              <Col sm="6">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>{this.jobList()}</Card.Body>
                </Card>
              </Col>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}
