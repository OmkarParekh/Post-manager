import React, { Component } from 'react'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'
import './LoginSignup.css'
import firebase from '../../Components/Firebase/Firebase'

export default class Login extends Component {
     constructor(){
          super()
          this.state={
               Username:'',
               Password:'',
               login:false
          }
          // this.us=this.us.bind(this)
          // this.ps=this.ps.bind(this)
          // this.login=this.login.bind(this)
          this.gauth=this.gauth.bind(this)
          // this.gitauth=this.gitauth.bind(this)
     }
     // us(e){
     //      this.setState({
     //           Username:e.target.value
     //      })
     // }
     // ps(e){
     //      this.setState({
     //           Password:e.target.value
     //      })
     // }
     // login(){
     //      if(this.state.Username===""&&this.state.Password===""){
     //           window.alert('Please Enter Login Credentials')
     //      }
     //      else if(this.state.Username===""){
     //           window.alert('Please Enter UserName')
     //      }
     //      else if(this.state.Password===""){
     //           window.alert('Please Enter Password')
     //      }
     //      else{
     //           const data={
     //                Username:this.state.Username,
     //                Password:this.state.Password
     //           }
               
     //           Axios.post(`https://post-manage.herokuapp.com/login`,data)
     //           .then(res=>{

     //                console.log(res.data.token)
     //                this.setState({
     //                     login:true
     //                })
     //               localStorage.setItem('token',res.data.token)
     //               localStorage.setItem('Name',res.data.Name)
     //               localStorage.setItem('Username',res.data.Username)
     //               localStorage.setItem('Photo','')
     //           })
     //           .catch(err=>{
     //                if(err.response.status===401)
     //                {
     //                     window.alert('UserName or Password Is Incorrect')
     //                }
     //                console.log(err);
     //           })
     //      }
          
     // }
     gauth(){
          var provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
               console.log(result.user);
               const res=result.user
          const data={
               uid:res.uid,
               photo:res.photoURL,
               Name:res.displayName,
               email:res.email
          }
          Axios.post('http://localhost:7000/oauth',data)
          .then(res=>{
               console.log(res);
               localStorage.setItem('token',res.data.token)
               localStorage.setItem('Name',res.data.Name)
               localStorage.setItem('Username',res.data.Username)
               localStorage.setItem('Photo',res.data.photo)
               this.setState({
                    login:true,
                    })
          })
               
          //   console.log(credential);
          //   console.log(token);
          //   console.log(user);
          }).catch((error) => {
            console.log(error);
          });
     }
     
     render() {
          if(this.state.login===true){
               return <Redirect to='/home' />
          }
          return (
               <div class='container '  >
                    <div class="card text-white bg-primary mb-2  login" >
                    
                    <div class="card-body" id='loginspace'>
                    <h2 class="card-title text-center" id='lheader'>Login</h2>
                    
                    </div>
                    </div>
                    
                    <div class="card btn text-white bg-primary mb-3 login-2card  " onClick={this.gauth} >
                    <div class="card-body">
                    <h5 class="card-title text-center">Sign-in with Google </h5>
                    
                    </div>
                    </div>
            
                   
                  
                   
                    
               </div>
          )
     }
}
