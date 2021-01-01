import React, { Component } from 'react'
// import '../App.css'
import '../post.css'
import Axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Comment from './ComentSection'
import {Link} from 'react-router-dom'
export default class Postcon extends Component {
     constructor(props){
          super(props)
          this.state={
               data:this.props.data,
               id:this.props.data._id,
               nulike:this.props.data.Likes,
               like:'Like'
           
              
          }
     //     this.state.data.Likedby.map((res)=>{
        
     //      if(res===localStorage.getItem('Username'))
     //      {
     //           console.log('Done');
     //           this.state.like='Liked'
     //      }
          
     //     })
               
          this.like=this.like.bind(this)
     }

     like(){
          if(this.state.like==='Like')
          {    
               
               this.setState({ 
                              like:'Liked',
                              // nulike:this.state.nulike+1
                             
                         })
               // Axios.post(`https://post-manage.herokuapp.com/lc/like/${this.state.id}/${localStorage.getItem('Username')}`)
               // .then(()=>{
               //      this.setState({ 
               //           like:'Liked',
               //           nulike:this.state.nulike+1
                        
               //      })
               // })
               // .catch(err=>{
               //      alert(err)
               // })
          }
          else{
               this.setState({ 
                              like:'Like',
                              // nulike:this.state.nulike-1
                              
                         })
               // Axios.post(`https://post-manage.herokuapp.com/lc/unlike/${this.state.id}/${localStorage.getItem('Username')}`)
               // .then(()=>{
               //      this.setState({ 
               //           like:'Like',
               //           nulike:this.state.nulike-1
                         
               //      })
               // })
               // .catch(err=>{
               //      alert(err)
               // })
          }
          


     }
     render() {
          const {data,like,refresh}=this.state
          // console.log(data._id)
          // if(refresh===true){
          //      return <Redirect to='/home' />
          // }
          return (
               <div>
                   <div class="card bg-primary text-white mb-3 mt-3 postcard ">
               <h6 class='card-header'>Username</h6>
               {/* {         
                    data.path? */}
                    <img src={`https://theuniqueacademy.co.in/assets/images/test.png`} class="card-img-top" alt="..."/>
                    {/* : */}
                    {/* <div></div> */}
                    {/* // <img src={`https://post-manage.herokuapp.com${data.path}`} class="card-img-top" alt="..."/>
               } */}
               
               <div class="card-body">
               <div class='container'>
               


               </div>
               <h5 class="card-title">PostName</h5>
               <p class="card-text">Post Describtion</p>
               <p class="card-text">Like 10 </p>
               <div class="btn-group " role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary post-btn" onClick={this.like}>{like} </button>  
               <Popup trigger={<button type="button" class="btn btn-primary post-btn"> Comment</button>}  modal nested>
               <><Comment /></>
               </Popup>

               
               <button type="button" class="btn btn-primary post-btn">Share</button>
               </div>
               </div>

               <div class="card-footer">
               <small class="text-white">{data.Date}</small>
               </div>
               </div> 
               </div>
          )
     }
}

