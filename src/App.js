import React, { Component } from 'react'
import { BrowserRouter as Router ,Route, Redirect } from 'react-router-dom';
import Home from './Pages/HomePage/Home'
import Signin from "./Pages/LoginSignup/Signup";
import Addpost from "./Pages/Post/Createpost";
import Login from "./Pages/LoginSignup/Login";
import Nav from './Components/Navbars/Navbar'
import Auth from './Pages/oauth'
export default class App extends Component {
     render() {
          return (
               <div>
<Router>
<Nav/>



<Route path='/' exact component={Login}/>
<Route path='/home'  exact component={Home} />
<Route path='/signup' exact component={Signin}/>
<Route path='/Createpost' exact component={Addpost}/>
<Route path='/auth' exact component={Auth}/>
</Router>
               </div>
          )
     }
}