import React, { Component } from 'react'
import Axios from 'axios'
import Post from '../HomePage/Components/Postcon'
export default class Singlepost extends Component {
     constructor(props) {
          super(props);
          this.state = {
            data: {},
          };
          Axios.get(
          //   `http://localhost:7000/post/${this.props.match.params.id}`,
            `https://post-manage.herokuapp.com/post/${this.props.match.params.id}`,
            {
              headers: {
                Authorization: `post ${localStorage.getItem("token")}`,
              },
            }
          ).then((res) => {
            this.setState({
              data: res.data,
            });
          });
        }
        render() {
          const { data } = this.state;
          return (
            <div className="container">
              <div class="post">{Object.keys(data).length===0?<></>:
               <Post data={this.state.data} />  }
              </div>
            </div>
          );
        }
}
