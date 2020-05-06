import React, { Component } from "react";
import axios from "axios";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./post_job.css";

export default class post_job extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      author: "",
      description: "",
      category: "",
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    alert("Job Posted Successfully!");

    console.log("Form submitted");
    console.log("Title : " + this.state.title);
    console.log("Author : " + this.state.author);
    console.log("Description : " + this.state.description);
    console.log("Category : " + this.state.category);

    const newJob = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      category: this.state.category,
    };

    axios
      .post("http://localhost:4000/freelance_db/add_job", newJob)
      .then((res) => console.log(res.data));

    this.setState({
      title: "",
      author: "",
      description: "",
      category: "",
    });
  }

  render() {
    // alert("Post a project");
    return (
      /*<form class="form-card" onSubmit={this.onSubmit}>
        <fieldset class="form-fieldset">
          <legend class="form-legend">Post a JOB</legend>
          <div class="form-element form-input">
            <input
              id="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9"
              class="form-element-field"
              placeholder="Please enter suitable job title"
              type="input"
              required
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
            <div class="form-element-bar"></div>
            <label
              class="form-element-label"
              for="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9"
            >
              Job Title
            </label>
          </div>
          <div class="form-element form-input">
            <input
              id="field-x98ezh-s6s2g8-vfrkgb-ngrhef-atfkop"
              class="form-element-field"
              placeholder="Please enter full name"
              type="input"
              required
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
            <div class="form-element-bar"></div>
            <label
              class="form-element-label"
              for="field-x98ezh-s6s2g8-vfrkgb-ngrhef-atfkop"
            >
              Author
            </label>
          </div>

          <div class="form-element form-textarea">
            <textarea
              id="field-3naeph-0f3yuw-x153ph-dzmahy-qhkmgm"
              class="form-element-field"
              placeholder="Please enter a short description about your job"
              type="input"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
            ></textarea>
            <div class="form-element-bar"></div>
            <label
              class="form-element-label"
              for="field-3naeph-0f3yuw-x153ph-dzmahy-qhkmgm"
            >
              Job Description
            </label>
          </div>
          <div class="form-radio form-radio-inline">
            <div class="form-radio-legend">Select Domain</div>
            <label class="form-radio-label">
              <input
                name="categoryOptions"
                class="form-radio-field"
                type="radio"
                required
                value="ML"
                checked={this.state.category === "ML"}
                onChange={this.onChangeCategory}
              />
              <i class="form-radio-button"></i>
              <span>ML</span>
            </label>
            <label class="form-radio-label">
              <input
                name="categoryOptions"
                class="form-radio-field"
                type="radio"
                required
                value="CV"
                checked={this.state.category === "CV"}
                onChange={this.onChangeCategory}
              />
              <i class="form-radio-button"></i>
              <span>CV</span>
            </label>
            <label class="form-radio-label">
              <input
                name="categoryOptions"
                class="form-radio-field"
                type="radio"
                required
                value="SD"
                checked={this.state.category === "SD"}
                onChange={this.onChangeCategory}
              />
              <i class="form-radio-button"></i>
              <span>SD</span>
            </label>
          </div>
        </fieldset>
        <div class="form-actions">
          <button class="form-btn" type="submit">
            Submit
          </button>
          <button class="form-btn-cancel -nooutline" type="reset">
            Cancel
          </button>
        </div>
      </form>*/

      <div>
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

        <div class="container contact-form">
          <div class="contact-image">
            <img
              src="https://image.ibb.co/kUagtU/rocket_contact.png"
              alt="rocket_contact"
            />
          </div>
          <form method="post" onSubmit={this.onSubmit}>
            <h1>Post JOB</h1>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="input"
                    required
                    name="txtName"
                    class="form-control"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="input"
                    required
                    name="txtEmail"
                    class="form-control"
                    placeholder="Author"
                    value={this.state.author}
                    onChange={this.onChangeAuthor}
                  />
                </div>
                <h5>Select Domain</h5>
                <input
                  class="form-radio-button"
                  name="categoryOptions"
                  type="radio"
                  required
                  value="ML"
                  checked={this.state.category === "ML"}
                  onChange={this.onChangeCategory}
                />
                Machine Learning (ML)
                <br></br>
                <input
                  name="categoryOptions"
                  type="radio"
                  required
                  value="CV"
                  checked={this.state.category === "CV"}
                  onChange={this.onChangeCategory}
                />
                Computer Vision (CV)
                <br></br>
                <input
                  name="categoryOptions"
                  type="radio"
                  required
                  value="SD"
                  checked={this.state.category === "SD"}
                  onChange={this.onChangeCategory}
                />
                Software Development (SD)
                <br></br>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea
                    rows="5"
                    name="txtMsg"
                    class="form-control"
                    placeholder="Job Description"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    minLength="5"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  class="btnContact"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
