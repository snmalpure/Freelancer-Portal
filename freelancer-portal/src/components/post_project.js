import React, { Component } from "react";
import axios from 'axios';

export default class post_project extends Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            author: '',
            description: '',
            category: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('Form submitted');
        console.log('Title : ' + this.state.title);
        console.log('Author : ' + this.state.author);
        console.log('Description : ' + this.state.description);
        console.log('Category : ' + this.state.category);

        const newProject = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            category: this.state.category
        }

        axios.post('http://localhost:4000/freelance_db/add_proj', newProject)
            .then(res => console.log(res.data));

        this.setState({
            title: '',
            author: '',
            description: '',
            category: '',
        });
    }


    render() {
        // alert("Post a project");
        return (
            <div style={{ marginTop: 20 }}>
                <h3>Post a project</h3>
                <form onSubmit={this.onSubmit}>

                    <label>Title :</label>
                    <input type="text" className="form-control"
                        value={this.state.title} onChange={this.onChangeTitle} />

                    <label>Author :</label>
                    <input type="text" className="form-control"
                        value={this.state.author} onChange={this.onChangeAuthor} />

                    <label>Desription :</label>
                    <input type="textarea" className="form-control"
                        value={this.state.description} onChange={this.onChangeDescription} />

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="categoryOptions" id="ML" value="ML" checked={this.state.category === 'ML'} onChange={this.onChangeCategory} />
                            <label className="form-check-label">ML</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="categoryOptions" id="CV" value="CV" checked={this.state.category === 'CV'} onChange={this.onChangeCategory} />
                            <label className="form-check-label">CV</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="categoryOptions" id="SD" value="SD" checked={this.state.category === 'SD'} onChange={this.onChangeCategory} />
                            <label className="form-check-label">SD</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}