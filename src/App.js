import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Addpost from "./Pages/Post/Createpost";
import Login from "./Pages/LoginSignup/Login";
import Nav from "./Components/Navbars/Navbar";
import Profile from "./Pages/Profile/Profile";
import Editpost from './Pages/Post/Editpost';
import Singlepost from './Pages/Post/Singlepost'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/Createpost" exact component={Addpost} />
          <Route path="/Edit/:id" exact component={Editpost} />
          <Route path="/post/:id" exact component={Singlepost} />
        </Router>
      </div>
    );
  }
}
