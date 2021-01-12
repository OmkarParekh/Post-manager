import React, { Component } from "react";
import "./EditProfile.css";
export default class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      desc: "",
      email: "official.yashpurohit@gmail.com",
    };
  }
  onChangeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { user, desc, email } = this.state;
    return (
      <div className="container edit-profile">
        <h2>Edit Profile</h2>
        <div className="edit-picture">
          <img
            src="https://lh4.googleusercontent.com/-5oDImgSbAzw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmOmrpzXPAnnzUSiGNGQr5P7Ay_mA/s96-c/photo.jpg"
            alt="profilePicture"
          />
          <input type="file" class="custom-file-input" id="inputGroupFile02" />
          <i className="fas fa-pen"></i>
        </div>
        <div className="edit-data">
          <input
            type="email"
            className="form-control"
            value={email}
            disabled
            style={{ cursor: "not-allowed" }}
          />
          <input
            type="text"
            name="user"
            className="form-control"
            value={user}
            placeholder="User Name"
            onChange={this.onChangeHandle}
          />

          <textarea
            name="desc"
            rows="5"
            onChange={this.onChangeHandle}
            placeholder="Description"
            className="form-control"
          >
            {desc}
          </textarea>
        </div>
        <div className="update-btn">
          <button className="btn btn-update">Save</button>
        </div>
      </div>
    );
  }
}
