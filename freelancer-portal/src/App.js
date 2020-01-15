import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Greet from "./components/greet";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jobs from "./components/jobs";
import Projects from "./components/projects";
import Slideshow from "./components/slide";
import About from "./components/about";
import Login from "./components/login";
import Signup from "./components/signup";
import Counter from "./components/counter";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact component={Slideshow} />
          <Route path="/home" component={Slideshow} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/projects" component={Projects} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/about" component={About} />
          <Route path="/counter" component={Counter} />
        </Switch>

        {/*} <Greet name="Alex">
          <p>This is children prop</p>
        </Greet>
  <Greet name="Sarang" />*/}
      </div>
    </Router>
  );
}

export default App;
