import React, { Component } from "react";
import Post from "./Components/Postcon";
import "./post.css";
import Axios from "axios";
// Axios.defaults.headers = {
// 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6Ik9ta2FyNjAwMSIsIlBhc3N3b3JkIjoiT21rYXJANjAwIiwiaWF0IjoxNTk2NzExOTEyfQ.IX3HTYdvOPFsZY97wNy5RDPMyrUylxO2vUGTHkpMPHM'
// // 'auth-token':localStorage.getItem('token')
// }

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    Axios.get(
      // "http://localhost:7000/"
      "https://post-manage.herokuapp.com/",
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
        <div class="post">
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

// import React,{useState} from 'react'

// export default function Home() {
//      const [data, setdata] = useState([])
//      Axios.get('https://post-manage.herokuapp.com/')
//                .then(res=>{
//                     setdata(res.data)
//                })
//                console.log(data)
//      return (
//           <div>
//                <div>
//                <div class='container'>
//                                    {
//                                         data.map(data=>(
//                                          <Post data={data} />
//                                         ))
//                                    }
//                </div>
//                </div>
//           </div>
//      )
// }
