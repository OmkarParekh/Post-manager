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
      // `http://localhost:7000/lc/getcomments/${this.props.id}`
      `${window.url}/lc/getcomments/${this.props.id}`,
      {
        headers: {
          Authorization: `post ${localStorage.getItem("token")}`,
        },
      }
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
  comm(e) {
    e.preventDefault();
    if (this.state.comment === "") {
      window.alert("Please Write Commment");
    } else {
      Axios.post(
        // `http://localhost:7000/lc/comments/${this.props.id}/${this.state.comment}`
        `${window.url}/lc/comments/${this.props.id}`,
        {
          Comment: this.state.comment,
        },
        {
          headers: {
            Authorization: `post ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => {
          // alert(res.data);
          this.fetchcomment();
          this.setState({
            comment: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  delete(id) {
    Axios.post(
      // `http://localhost:7000/lc/deletecomments/${this.props.id}/${id}`
      `${window.url}/lc/deletecomments/${this.props.id}/${id}`,
      {},
      {
        headers: {
          Authorization: `post ${localStorage.getItem("token")}`,
        },
      }
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
        <form onSubmit={this.comm}>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              value={this.state.comment}
              onChange={this.input}
              placeholder="Comment"
              aria-label="Comment"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary"
                type="submit"
                id="button-addon2"
                onClick={this.comm}
              >
                {" "}
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </form>

        <ul class="list-group">
          {this.state.data.map((item) => (
            <li class="list-group-item mt-3">
              <b>{item.Name}</b>: {item.Comment}
              {item.email === localStorage.getItem("email") ? (
                <i
                  class="fas fa-times icon-custom"
                  onClick={() => {
                    this.delete(item._id);
                  }}
                ></i>
              ) : (
                <>
                  {window.location.pathname === "/profile" ? (
                    <>
                      <i
                        class="fas fa-times icon-custom"
                        onClick={() => {
                          this.delete(item._id);
                        }}
                      ></i>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
