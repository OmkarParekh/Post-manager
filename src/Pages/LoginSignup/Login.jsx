import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import "./LoginSignup.css";
import firebase from "../../Components/Firebase/Firebase";
import landingSVG from "./assets/social_media.svg";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
    };
    this.gauth = this.gauth.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({
        login: true,
      });
    }
  }

  gauth() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
        const res = result.user;
        const data = {
          uid: res.uid,
          photo: res.photoURL,
          Name: res.displayName,
          email: res.email,
        };
        Axios.post(
          // 'http://localhost:7000/oauth'
          `${window.url}/oauth`,

          data
        ).then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("Name", res.data.Name);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("Photo", res.data.photo);
       
          this.setState({
            login: true,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.login === true) {
      return <Redirect to="/home" />;
    }
    return (
      <div class="landing-wrapper">
        <div className="row flex-row-reverse">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1 className="heading1">POST MANAGER</h1>
            <p className="subtitle mb-5">Post about whatever you like.</p>
            {/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"> */}
            {/* <div className="g-wrapper"> */}
            <div class="google-btn" onClick={this.gauth}>
              <div class="google-icon-wrapper">
                <img
                  class="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
              </div>
              <p class="btn-text">
                <b>Continue With Google</b>
              </p>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img
              src={landingSVG}
              className="landing-img mt-5"
              alt="landingImage"
            />
          </div>
        </div>
      </div>
    );
  }
}
