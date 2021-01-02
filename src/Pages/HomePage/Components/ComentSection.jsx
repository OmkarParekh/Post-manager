import React, { Component } from "react";
import "../post.css";
import Axios from "axios";
export default class ComentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      comment: "",
    };
    this.fetchcomment();
    this.input = this.input.bind(this);
    this.comm = this.comm.bind(this);
  }
  fetchcomment() {
    Axios.get(
      `https://post-manage.herokuapp.com/lc/getcomments/${this.props.id}`
    )
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data.Comments,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  input(e) {
    this.setState({
      comment: e.target.value,
    });
  }
  comm() {
    if (this.state.comment === "") {
      window.alert("Please Write Commment");
    } else {
      Axios.post(
        `https://post-manage.herokuapp.com/lc/comments/${
          this.props.id
        }/${localStorage.getItem("Username")}/${this.state.comment}`
      )
        .then((res) => {
          // alert(res.data);
          this.fetchcomment();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  delete(id) {
    Axios.post(
      `https://post-manage.herokuapp.com/lc/deletecomments/${this.props.id}/${id}`
    )
      .then((res) => {
        // alert(res.data)
        this.fetchcomment();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <div class="form-group">
          <label for="exampleInputPassword1">Comment</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            onChange={this.input}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={this.comm}>
          Post
        </button>
        <ul class="list-group">
          {this.state.data.map((item) => (
            <li class="list-group-item mt-3">
              <b>{item.Name}</b>: {item.Comment}
              {item.Name === localStorage.getItem("Username") ? (
                <i
                  class="fas fa-times icon-custom"
                  onClick={() => {
                    this.delete(item._id);
                  }}
                ></i>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
