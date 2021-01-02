import React, { Component } from 'react'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'
import './LoginSignup.css'
import firebase from '../../Components/Firebase/Firebase'

export default class Login extends Component {
     constructor(){
          super()
          this.state={
               login:false
          }
          this.gauth=this.gauth.bind(this)
         
     }
  
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
          Axios.post(

               // 'http://localhost:7000/oauth'
               `https://post-manage.herokuapp.com/oauth`
               
               ,data)
          .then(res=>{
               console.log(res);
               localStorage.setItem('token',res.data.token)
               localStorage.setItem('Name',res.data.Name)
               localStorage.setItem('email',res.data.email)
               localStorage.setItem('Photo',res.data.photo)
               this.setState({
                    login:true,
                    })
          })
               
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
