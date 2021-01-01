import React, { Component } from 'react'
// import '../App.css'
import Axios from 'axios'
export default class Signup extends Component {
     constructor(){
          super()
          this.state={
               Name:'',
               Username:'',
               Password:'',
               Phonenumber:''
          }
          this.input=this.input.bind(this)
          this.signup=this.signup.bind(this)
     }
     input(e){
          this.setState({
               [e.target.name]:e.target.value
          })
     }
     signup(){
          // Axios.post('https://post-manage.herokuapp.com/signup',{...this.state})
          // .then(res=>{
          //      if(res.data.errors)
          //      {
          //           const path=Object.keys(res.data.errors)
          //           alert(`${path.map((d)=>(`${d}`))} is Required`)
          //      }
          //      window.alert(res.data)
               
          //      console.log(res);
          // })
          // .catch(err=>{
          //      console.log(err);
          // })
     }
     render() {
          return (
               <div class='signup' >
                    
                 <h1 class='text-primary'>SignUp</h1> 
               <form>
                    
               <div class="form-group">
               <label for="exampleFormControlInput1" class='text-primary' >Name</label>
               <input type="text" class="form-control" id="exampleFormControlInput1" name='Name'  onChange={this.input} />
               </div>
               <div class="form-group">
               <label for="exampleFormControlInput1" class='text-primary'>Username</label>
               <input type="text" class="form-control" id="exampleFormControlInput1" name='Username' onChange={this.input} placeholder="name@number"/>
               </div>
               <div class="form-group">
               <label for="exampleFormControlInput1" class='text-primary'>Password</label>
               <input type="password" class="form-control" id="exampleFormControlInput1" name='Password'  onChange={this.input}/>
               </div>
               <div class="form-group">
               <label for="exampleFormControlInput1" class='text-primary'>Phone Number</label>
               <input type="text" class="form-control" id="exampleFormControlInput1" name='Phonenumber' onChange={this.input} />
               </div>
               <button type="button" class="btn btn-primary" onClick={this.signup}>Signin</button>
               </form>
               </div>
          )
     }
}
