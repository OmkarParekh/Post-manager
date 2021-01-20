import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Navbar.css";
export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      url: "/",
    };
    console.log(this.state.url);
    this.logout = this.logout.bind(this);
  }
  logout() {
    // Axios.defaults.headers = {
    //      'auth-token': ''
    //      // 'auth-token':localStorage.getItem('token')
    //      }
    localStorage.clear();
    return <Redirect to="/" />;
  }
  componentDidMount() {
    this.mytimer = setInterval(() => {
      this.setState({
        url: window.location.pathname,
      });
    }, 500);
  }
  componentWillUnmount() {
    clearInterval(this.mytimer);
  }

  render() {
    const { url } = this.state;

    // return(
    //      <div>

    //      <nav class="navbar navbar-expand navbar-dark bg-primary">
    //      <div class='container'>
    //      <a class="navbar-brand" href="/">Post Manager</a>

    //      <ul class="navbar-nav">
    //      <li class="nav-item ">

    //      </li>
    //      <li class="nav-item">
    //      <a class='nav-link text-white' href='/Addpost'>Add</a>
    //      </li>
    //      <li class="nav-item">
    //      <a class='nav-link text-white' href='/' onClick={this.logout}>Logout</a>
    //      </li>

    //      </ul>

    //      </div>
    //      </nav>
    //       </div>
    const userPic = localStorage.getItem("Photo");
    // )
    return (
      <div className="">
        {/* <div class="header"></div> */}
        {url === "/" ? (
          <></>
        ) : (
          <nav class="navbar navbar-light bg-white shadow ">
            {/* <nav class="navbar navbar-light bg-transparent"> */}
            <div className="container">
              <Link class="navbar-brand" to="/">
                Post Manager
              </Link>

              <div class="dropdown mr-1">
                <button
                  type="button"
                  class="btn btn-transparent dropdown-toggle"
                  id="dropdownMenuOffset"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-offset="10,20"
                >
                  <span class="profile-icon">
                    <img src={userPic} alt="" />
                  </span>
                </button>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                  {url === "/home" ? (
                    <></>
                  ) : (
                    <Link class="dropdown-item" to="/home">
                      Home
                    </Link>
                  )}
                  {url === "/Createpost" ? (
                    <></>
                  ) : (
                    <Link class="dropdown-item" to="/Createpost">
                      Create Post
                    </Link>
                  )}
                  {url === "/profile" ? (
                    <></>
                  ) : (
                    <Link class="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  )}

                  <div class="dropdown-divider"></div>
                  <Link
                    class="dropdown-item"
                    to="/"
                    onClick={() => {
                      localStorage.clear();
                    }}
                  >
                    Log Out
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    );

    // return(
    //      <div>

    //      <nav class="navbar navbar-expand navbar-dark bg-primary">
    //      <div class='container'>
    //      <a class="navbar-brand" href="/">Post Manager</a>

    //      <ul class="navbar-nav">
    //      <li class="nav-item ">
    //      <a class='nav-link text-white' href='/'>Login</a>
    //      </li>
    //      <li class="nav-item">

    //      </li>

    //      </ul>

    //      </div>
    //      </nav>
    //       </div>
    // )
  }
}
