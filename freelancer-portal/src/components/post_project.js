import React, { Component } from "react";
import axios from 'axios';

class post_project extends Component {

    // initialize our state
    state = {
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
    };

    // our put method that uses our backend api
    // to create new query into our data base
    putDataToDB = (message) => {
        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post('http://localhost:3001/api/putData', {
            id: idToBeAdded,
            message: message,
        });
    };

    render() {
        // alert("Post a project");
        return (
            <div>
                <h1>Post Job and project</h1>
                <form action="this.putDataToDB">
                    <label>Title : </label>
                    <input type="text" name="title" id="name" placeholder="Name" required /><br />

                    <label> Details : </label>
                    <textarea name="details" id="details" placeholder="Job/projects details here.." required /><br />

                    <input type="radio" class="statproj" id="radio" name="radio" value="val1" />Complete <br />
                    <input type="radio" class="statproj" id="radio" name="radio" value="val2" />Incomplete<br />

                    <input type="submit" id="submitDetails" name="submitDetails" value="Submit" /><br />

                </form>
            </div>
        );
    }
}

export default post_project;