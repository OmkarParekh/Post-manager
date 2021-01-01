import React, { Component } from 'react'
import firebase from '../Components/Firebase/Firebase'
import Axios from 'axios'
export default class oauth extends Component {
     constructor(){
          super()
          this.state={
               loggedin:false
          }
          this.submit=this.submit.bind(this)
          this.submit2=this.submit2.bind(this)
     }
     componentDidMount(){
          if(localStorage.getItem('token')){

          }
         
     }
     
     submit2(){
        localStorage.clear()
     }

     render() {
          // if(this.state.loggedin===true){
          //      return (
          //           <div>
          //               <img src={this.state.user.photoURL} alt=""/>
          //                <button class='btn-primary mt-5' onClick={this.submit2}>Login Wdfsdfith Google</button>
          //           </div>
          //      ) 
          // }
          return (
               <div>
                    <button class='btn-primary mt-5' onClick={this.submit}>Login With Google</button>
                    <button class='btn-primary mt-5' onClick={this.submit2}>Login Wdfsdfith Google</button>
               </div>
          )
     }
}
