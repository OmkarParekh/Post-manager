import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Post from './Components/Postcon'
import './post.css'
import Axios from 'axios'
// Axios.defaults.headers = {
// 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6Ik9ta2FyNjAwMSIsIlBhc3N3b3JkIjoiT21rYXJANjAwIiwiaWF0IjoxNTk2NzExOTEyfQ.IX3HTYdvOPFsZY97wNy5RDPMyrUylxO2vUGTHkpMPHM'
// // 'auth-token':localStorage.getItem('token')
// }

export default class Home extends Component {
     constructor(){
          super()
          this.state={
               data:[]
          }
          // Axios.get('https://post-manage.herokuapp.com/')
          // .then(res=>{
          //      this.setState({
          //           data:res.data
          //      })
          // })
     }
     render() {
          const {data}=this.state
          return (
               <div>
               <div class='post'>
             
                         <Post/> 
                
               </div>
               </div>
          )
     }
}


