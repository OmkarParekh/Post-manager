import "./Profile.css";
import React, { Component } from 'react'
import Axios from 'axios'
import Post from '../HomePage/Components/Postcon'
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      profile:{}
    };
    
    Axios.get(
      // "http://localhost:7000/withprofile",
      "https://post-manage.herokuapp.com/withprofile",
      {
        headers: {
          Authorization: `post ${localStorage.getItem("token")}`,
        },
      }
    ).then((res) => {
      // console.log(res);
      this.setState({
        data: res.data.data,
        profile:res.data.profile
      });
    });
  }
  render() {
    const { data,profile } = this.state;
    return (
      <div className="container profile_wrapper">
        {
          Object.keys(profile).length === 0?
          <></>:<>
          <div className="d-flex align-items-center flex-wrap">
          <div className="profile-picture">
            <img
              src={profile.Uphoto}
              alt="profile"
            />
          </div>
          <div className="d-flex flex-column ml-4">
            <h5 className="profile-name">{profile.UName}</h5>
            <p className="profile-name">{profile.email}</p>
            <a href="#edit" className="btn btn-edit">
              Edit Profile
            </a>
          </div>
       
        </div>
        <div className="profile-description">
            <div className="font-weight-bold mb-1">Description:-</div>
           {profile.description}
          </div>
        </>
        }
       
        <hr />
        <div className="profile-post">
          <h3>Posts</h3>
          {data.length === 0 ? (
            <>No Post Available</>
          ) : (
            data.reverse().map((data) => <Post data={data} />)
          )}
        </div>
      </div>
    );
  }
}

