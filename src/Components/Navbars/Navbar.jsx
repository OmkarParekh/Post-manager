import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import sideimg from "./assets/sidephoto.jpg";
import userIcon from "./assets/user.svg";
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
    // )

    return (
      <div className="">
        {/* <div class="header"></div> */}
        <nav class="navbar navbar-light bg-white shadow">
          {/* <nav class="navbar navbar-light bg-transparent"> */}
          <a class="navbar-brand" href="#">
            Post Manager
          </a>

          <div class="dropdown mr-1 dropleft">
            <button
              type="button"
              class="btn btn-transparent dropdown-toggle"
              id="dropdownMenuOffset"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-offset="10,20"
            >
              <a class="profile-icon" href="#">
                <img src={userIcon} alt="" />
              </a>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
              <Link class="dropdown-item" to="/Createpost">
                Create Post
              </Link>
              <Link class="dropdown-item" to="#">
                Edit Profile
              </Link>
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
        </nav>
        {this.state.url === "/home" ? (
          <>
            <input
              type="checkbox"
              class="openSidebarMenu"
              id="openSidebarMenu"
            />

            <div id="sidebarMenu">
              <ul class="sidebarMenuInner">
                <center>
                <img src={localStorage.getItem('Photo')} className="img-fluid rounded-circle" />
                </center  >
                <li>
                  {localStorage.getItem("Name")}
                  <span>{localStorage.getItem("email")}</span>
                </li>
                <li>
                  <Link to="/Createpost">Create Post</Link>
                </li>
                {/* <li><Link to='/Chat' >All Rooms</Link></li>
                        <li><Link to='/MyChat' >My Rooms</Link></li> */}
                <li>
                  <a>Edit Profile</a>
                </li>
                <li>
                  <a
                    href="/"
                    onClick={() => {
                      localStorage.clear();
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            {this.state.url === "/" || this.state.url === "/signup" ? (
              <>
                <input
                  type="checkbox"
                  class="openSidebarMenu"
                  id="openSidebarMenu"
                />

                <div id="sidebarMenu">
                  <ul class="sidebarMenuInner">
                    <img src={sideimg} className="img-fluid" />
                    <li>
                      Post Manager<span>Post Managing App</span>
                    </li>
                    {/* <li><a href="https://vanila.io" target="_blank">Add Post</a></li> */}
                    <li>
                      <Link to="/">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                      <Link>About</Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/home">
                  <i
                    class="fas fa-arrow-left sidebarIconToggle"
                    style={{ color: "white" }}
                    id="openSidebarMenu"
                  ></i>
                </Link>
              </>
            )}
          </>
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
