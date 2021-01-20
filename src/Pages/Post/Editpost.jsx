import Axios from "axios";
import React, { Component } from "react";
import "./create.css";
export default class Editpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      p_t: "",
      p_d: "",
    };
    this.update = this.update.bind(this);

    Axios.get(
      `https://post-manage.herokuapp.com/update/fetch/${this.props.match.params.id}`,
      {
        headers: {
          Authorization: `post ${localStorage.getItem("token")}`,
        },
      }
    ).then((res) => {
      console.log(res);
      this.setState({
        data: res.data,
        p_t: res.data.Postname,
        p_d: res.data.Description,
      });
    });
  }
  update() {
    const data = {
      Postname: this.statep_t,
      Description: this.statep_d,
      Date: Date.now(),
    };
    Axios.post(
      // `http://localhost:7000/update/${this.state.data._id}`,
      `https://post-manage.herokuapp.com/update/${this.state.data._id}`,
      data,
      { headers: { Authorization: `post ${localStorage.getItem("token")}` } }
    );
  }
  render() {
    const { data, p_t, p_d } = this.state;
    return (
      <div class="Create">
        <form>
          <div class="card border-0" id="addcar">
            <h1 class="text-primary">Edit YOUR POST HERE</h1>

            {Object.keys(data).length === 0 ? (
              <></>
            ) : (
              <>
                {data.path ? (
                  <>
                    <img
                      src={data.path.secure_uri}
                      alt=""
                      className="img-fluid addpostimg "
                      id="addimg"
                    />
                  </>
                ) : (
                  <></>
                )}
              </>
            )}

            <div class="card-body">
              <div class="form-group">
                <label class="text-primary">Post Title</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    this.setState({
                      p_t: e.target.value,
                    });
                  }}
                  value={p_t}
                />
              </div>
              <div class="form-group">
                <label class="text-primary">Description</label>
                <textarea
                  class="form-control"
                  id="exampleInputEmail1"
                  onChange={(e) => {
                    this.setState({
                      p_d: e.target.value,
                    });
                  }}
                  value={p_d}
                />
              </div>

              <button
                type="button"
                class="btn btn-primary"
                onClick={this.update}
              >
                {" "}
                Add{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
