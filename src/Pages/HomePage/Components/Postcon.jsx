import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../post.css";
import Axios from "axios";
import commentOutline from "../assets/comment-alt.svg";
import likeOutlineIcon from "../assets/Outline-Heart.svg";
import likeFillIcon from "../assets/Icons-Fill-Heart.svg";
import shareIcon from "../assets/share.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Comment from "./ComentSection";
import userIcon from "../../../Components/Navbars/assets/user.svg";
export default class Postcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      id: this.props.data._id,
      nulike: this.props.data.Likes,
      like: "Like",
      isButtonDisabled: false,
      date: {
        date: [
          new Date(Number(this.props.data.Date)),
          new Date(Number(this.props.data.Date)),
          new Date(Number(this.props.data.Date)),
        ],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
    };
    this.state.data.Likedby.map((res) =>
      res === localStorage.getItem("email") ? (this.state.like = "Liked") : ""
    );
    // if (res === localStorage.getItem("email")) {
    //   this.state.like = "Liked";
    // }

    this.like = this.like.bind(this);
  }

  like() {
    if (this.state.like === "Like") {
      Axios.post(
        // `http://localhost:7000/lc/like/${this.state.id}`
        `https://post-manage.herokuapp.com/lc/like/${this.state.id}`,

        {},
        {
          headers: {
            Authorization: `post ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((data) => {
          // console.log(data);
          if (data.data === "Error") {
            //  console.log('err');
          } else {
            this.setState({
              like: "Liked",
              nulike: this.state.nulike + 1,
              isButtonDisabled: true,
            });
            setTimeout(() => this.setState({ isButtonDisabled: false }), 2000);
          }
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      Axios.post(
        // `http://localhost:7000/lc/unlike/${this.state.id}`,
        `https://post-manage.herokuapp.com/lc/unlike/${this.state.id}`,

        {},
        {
          headers: {
            Authorization: `post ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((data) => {
          if (data.data === "Error") {
          } else {
            this.setState({
              like: "Like",
              nulike: this.state.nulike - 1,
              isButtonDisabled: true,
            });
            setTimeout(() => this.setState({ isButtonDisabled: false }), 2000);
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  }
  Delete(id,iid){
    Axios.post(`http://localhost:7000/delete/${id}/${iid}`,
    {},
    {
      headers: {
        Authorization: `post ${localStorage.getItem("token")}`,
      },
    })
    .then(res=>{
      console.log(res);
      if(res.data==='Unauth')
      {
      alert('Some thing Went Wrong')
      }
      else{
        alert('Post Delted')
        console.log('Post Deleted');
      }
     
    })
    .catch(err=>{
      console.log(err);
    })
    
  }
  render() {
    const { data, like, date } = this.state;
    // console.log(data._id)
    // if(refresh===true){
    //      return <Redirect to='/home' />
    // }

    return (
      <div>
        <div class="card bg-white my-4 postcard shadow">
          <h6 class="card-header d-flex justify-content-between">
            <div className="user">
              <img src={!data.Uphoto ? userIcon : data.Uphoto} alt="" />{" "}
              {data.UName}
            </div>
            <div class="dropdown dropleft">
           { window.location.pathname==='/profile'?  
           <button
                type="button"
                class="btn btn-transparent dropdown-toggle"
                id="dropdownMenuOffset"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-offset="40,0"
              >
                <span class="profile-icon">
                  <i class="fas fa-ellipsis-v"></i>
                </span>
              </button>
             :<></>} 
              <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                <div class="dropdown-item" onClick={()=>{
                  this.Delete(data._id,data.path?data.path.id:"Nophoto")
                }}>Delete</div>
                <Link to={`/Edit/${data._id}`}><div class="dropdown-item">Edit Post</div></Link>
              </div>
            </div>
          </h6>
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
            <h5 class="card-title">{data.Postname}</h5>
            <p class="card-text">{data.Description}</p>
            {/* <br/> */}
            <div class="d-flex mb-3">
              <button
                type="button"
                class="btn post-btn"
                onClick={this.like}
                disabled={this.state.isButtonDisabled}
              >
                <img
                  src={like === "Like" ? likeOutlineIcon : likeFillIcon}
                  className="like mb-1"
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

              <Link to={`/post/${data._id}`} class="btn post-btn">
                <img src={shareIcon} alt="" /> Share
              </Link>
            </div>
            <p class="card-text">Likes: {this.state.nulike} </p>
          </div>

          <div class="card-footer">
            <small class="">
              {`${date.months[date.date[1].getMonth()]} `}
              {date.date[0].getDate()}, {date.date[2].getFullYear()}
            </small>
            {/* <small class="">{new Date(data.Date)}</small> */}
          </div>
        </div>
      </div>
    );
  }
}
