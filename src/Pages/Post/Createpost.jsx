import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
// import '../App.css'
import './create.css'
import Axios from 'axios'
export default class Addpost extends Component {
     constructor(){
          super()
          this.state={
            image: null,
            file:null,
            pt:'',
            pd:'',
            out:false
           
          }
         
          this.imageupload = this.imageupload.bind(this);
          this.dataupload = this.dataupload.bind(this);
          this.pt = this.pt.bind(this);
          this.pd = this.pd.bind(this);
        }
     imageupload(e){
          let images=e.target.files[0]
        
            this.setState({
              image:images,
              file:URL.createObjectURL(e.target.files[0])
            })  
            
        }
     async dataupload(e){
          console.log(this.state.image)
          let file=this.state.image
          if(file===null){
               if(this.state.pt==='')
               {
                    alert('Please Provide Post Title')
               }
               else{
                    const data=
                    {
                         Postname:this.state.pt,
                         Description:this.state.pd,
                         Date:Date.now(),
                         Likes:0,
                       
                    }
                    Axios.post(
                         // `http://localhost:7000/Create`
                         `http://post-manage.herokuapp.com/Create`
                    ,data,{
                         headers: {
                         'Authorization': `post ${localStorage.getItem('token')}`}
                    })
                    .then(res=>{
                         if(res.data.errors)
                         {
                              const path=Object.keys(res.data.errors)
                              alert(`${path.map((d)=>(`${d}`))} Are Required`)
                         }
                         console.log(res);
                         this.setState({
                              out:true
                         })
                    })
                    .catch(err=>{
                         console.log(err);
                    })
               }
               
          
          }
          else{     
              try{
          let formdata =new FormData()
          formdata.append('file',file)
          const image=await Axios.post(
          // `http://localhost:7000/Create/upload`
          `http://post-manage.herokuapp.com/Create/upload`
          ,formdata,
          {
               headers: {
               'Authorization': `post ${localStorage.getItem('token')}`}
          }
          )
          console.log(image);
          if(image.data==="UnAuthorized")
          {
               console.log('UnAuthorized');
               alert('UnAuthorized');
          }
          else{
               const data=
               {
                    Postname:this.state.pt,
                    Description:this.state.pd,
                    Date:Date.now(),
                    path:{
                         secure_uri:image.data.url,
                         id:image.data.public_id
                    },
                    Likes:0,
                   
               }
               const Post=await Axios.post(
                    `http://post-manage.herokuapp.com/Create`
                    // `http://localhost:7000/Create`
                    ,data,{
                    headers: {
                    'Authorization': `post ${localStorage.getItem('token')}`
               }
               })
              if(Post.data.errors)
               {
                    const path=Object.keys(Post.data.errors)
                    alert(`${path.map((d)=>(`${d}`))} Are Required`)
               }
               console.log(Post);
                 this.setState({
                    out:true
               })
          }
        
     
         
     }
     catch(err){
          console.log(err);
     }
     }
          
         
        }
        pt(e){
          this.setState({
               pt:e.target.value
          })
        }
        pd(e){
          this.setState({
               pd:e.target.value
          })
        }
     render() {
          const {file,out}=this.state
          if(out===true){
               return <Redirect to='/home' />
          }
          return (
               <div class='Create'>
                   
                    <form>
                    
                  <div class="card border-0" id='addcar'>
                  <h1 class='text-primary'>Posting</h1> 
                  {
                       file===null?<div></div>: <img src={this.state.file} class="img-fluid addpostimg"  id='addimg'  />
                  }
                 
                  <div class="card-body">
                 
                  <div class="input-group mb-3">
                  <div class="custom-file">
                  <input type='file' accept="image/gif, image/jpeg, image/png" onChange={this.imageupload}
                  class="custom-file-input" id="inputGroupFile02" />
                  <label class="custom-file-label"  aria-describedby="inputGroupFileAddon02">Choose file</label>
                  </div>
                  <div class="input-group-append">
                  
                  
                  </div>
                  </div>
                  <div class="form-group">
                  <label class='text-primary'>Post Title</label>
                  <input type="text" class="form-control" onChange={this.pt}/>
                  </div>
                  <div class="form-group">
                  <label class='text-primary'>Description</label>
                  <textarea class="form-control" id="exampleInputEmail1" onChange={this.pd} />                  
                  </div>
                  
                 
                  <input type='button' class="btn btn-primary" value='Add' onClick={this.dataupload}/>
                  </div>
                  </div>

                  </form>
               </div>
          )
     }
}
