import React, { Component } from "react";
// import '../App.css'
import "../post.css";
import Axios from "axios";
import commentOutline from "../assets/comment-alt.svg";
import likeOutlineIcon from "../assets/Outline-Heart.svg";
import likeFillIcon from "../assets/Icons-Fill-Heart.svg";
import shareIcon from "../assets/share.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Comment from "./ComentSection";
import { Link } from "react-router-dom";
export default class Postcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      id: this.props.data._id,
      nulike: this.props.data.Likes,
      like: "Like",
    };
    this.state.data.Likedby.map((res) => {
      if (res === localStorage.getItem("Username")) {
        console.log("Done");
        this.state.like = "Liked";
      }
    });

    this.like = this.like.bind(this);
  }

  like() {
    if (this.state.like === "Like") {
      Axios.post(
        `https://post-manage.herokuapp.com/lc/like/${
          this.state.id
        }/${localStorage.getItem("Username")}`
      )
        .then(() => {
          this.setState({
            like: "Liked",
            nulike: this.state.nulike + 1,
          });
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      Axios.post(
        `https://post-manage.herokuapp.com/lc/unlike/${
          this.state.id
        }/${localStorage.getItem("Username")}`
      )
        .then(() => {
          this.setState({
            like: "Like",
            nulike: this.state.nulike - 1,
          });
        })
        .catch((err) => {
          alert(err);
        });
    }
  }
  render() {
    const { data, like, refresh } = this.state;
    // console.log(data._id)
    // if(refresh===true){
    //      return <Redirect to='/home' />
    // }
    return (
      <div>
        <div class="card bg-white mb-3 mt-3 postcard ">
          <h6 class="card-header">{data.Username}</h6>
          {
            data.path ? (
              <img
                src={data.path.secure_uri}
                onDoubleClick={this.like}
                class="card-img-top"
                // class={
                //   like === "Liked" ? "card-img-top liked" : "card-img-top like"
                // }
                alt="..."
              />
            ) : (
              <div></div>
            )
            // <img src={`https://post-manage.herokuapp.com${data.path}`} class="card-img-top" alt="..."/>
          }

          <div class="card-body">
            <div class="container"></div>
            <div class="d-flex mb-3">
              <button type="button" class="btn post-btn" onClick={this.like}>
                <img
                  src={like === "Like" ? likeOutlineIcon : likeFillIcon}
                  className="like"
                  alt=""
                />
                {like}{" "}
              </button>
              <Popup
                trigger={
                  <button type="button" class="btn post-btn">
                    {" "}
                    <img src={commentOutline} alt="" /> Comment
                  </button>
                }
                modal
                nested
              >
                <>
                  <Comment id={data._id} />
                </>
              </Popup>

              <button type="button" class="btn post-btn">
                <img src={shareIcon} alt="" /> Share
              </button>
            </div>
            <h5 class="card-title">{data.Postname}</h5>
            <p class="card-text">{data.Description}</p>
            <p class="card-text">Likes: {this.state.nulike} </p>
          </div>

          <div class="card-footer">
            <small class="">{data.Date}</small>
            {/* <small class="">{new Date(data.Date)}</small> */}
          </div>
        </div>
      </div>
    );
  }
}

// import React,{useState} from 'react'

// export default function Postcon(props) {
//      const [data, setdata] = useState(props.data)
//      const [likd, setlike] = useState('Like')
//      const [id, setid] = useState(props.data._id)
//      function like(){
//                     if(likd==='Like')
//                     {
//                          setlike('Liked')
//                          Axios.post(`https://post-manage.herokuapp.com/lc/like/${id}/Omkar`)
//                          .then(()=>{
//                               console.log(data._id)
//                          })
//                     }
//                     else{
//                          this.setState({
//                               like:'Like'
//                          })
//                     }

//                }

//      return (
//           <div>
//                <div>
//                     <div class="card bg-primary text-white">
//                 <h6 class='card-header'>{data.Username}</h6>
//                 <img src="https://devdiscourse.blob.core.windows.net/devnews/15_09_2019_19_55_17_1265758.jpg" class="card-img-top" alt="..."/>
//                 <div class="card-body">
//                 <div class='container'>
//                 <p class="card-text">Like {data.Likes} </p>
//                 <div class="btn-group " role="group" aria-label="Basic example">
//                 <button type="button" class="btn btn-primary" onClick={like}>{likd} </button>
//                 <button type="button" class="btn btn-primary">Comment</button>
//                 <button type="button" class="btn btn-primary">Share</button>
//                 </div>

//                 </div>
//                 <h5 class="card-title">{data.Postname}</h5>
//            <p class="card-text">{data.Description}</p>
//                 </div>

//                 <div class="card-footer">
//                 <small class="text-white">{data.Date}</small>
//                 </div>
//                 </div>
//                 </div>
//           </div>
//      )
// }
