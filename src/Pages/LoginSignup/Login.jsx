import React, { Component } from 'react'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'
import './LoginSignup.css'
export default class Login extends Component {
     constructor(){
          super()
          this.state={
               Username:'',
               Password:'',
               login:false
          }
          this.us=this.us.bind(this)
          this.ps=this.ps.bind(this)
          this.login=this.login.bind(this)
     }
     us(e){
          this.setState({
               Username:e.target.value
          })
     }
     ps(e){
          this.setState({
               Password:e.target.value
          })
     }
     login(){
          if(this.state.Username===""&&this.state.Password===""){
               window.alert('Please Enter Login Credentials')
          }
          else if(this.state.Username===""){
               window.alert('Please Enter UserName')
          }
          else if(this.state.Password===""){
               window.alert('Please Enter Password')
          }
          else{
               const data={
                    Username:this.state.Username,
                    Password:this.state.Password
               }
               
               Axios.post(`https://post-manage.herokuapp.com/login`,data)
               .then(res=>{

                    console.log(res.data.token)
                    this.setState({
                         login:true
                    })
                   localStorage.setItem('token',res.data.token)
                   localStorage.setItem('Name',res.data.Name)
                   localStorage.setItem('Username',res.data.Username)
               })
               .catch(err=>{
                    if(err.response.status===401)
                    {
                         window.alert('UserName or Password Is Incorrect')
                    }
                    console.log(err);
               })
          }
          
     }
     render() {
          if(this.state.login===true){
               return <Redirect to='/home' />
          }
          return (
               <div class='container '  >
                    <div class="card text-white bg-primary mb-2  login" >
                    
                    <div class="card-body" id='loginspace'>
                    <h2 class="card-title text-center" id='lheader'>Post Manager</h2>
                    <div class="form-group">
                    
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Username" onChange={this.us}/>
                    </div>
                    <div class="form-group">
                    
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Password" onChange={this.ps}/>
                    </div>
                    <button type="button" class="btn btn-primary login-btn "  onClick={this.login}>Login</button>
                    </div>
                    </div>
                    <div class="card text-white bg-primary mb-3 login-2card "  >
                    <div class="card-body">
                    <h5 class="card-title text-center">Dont Have Account <a href='/signup' class='text-warning'>Sign up</a></h5>
                    
                    </div>
                    </div>
                    
               </div>
          )
     }
}
