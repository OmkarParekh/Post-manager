// import React, { Component } from 'react'
// import firebase from '../Components/Firebase/Firebase'
// export default class oauth extends Component {
//      submit(){
//           var provider = new firebase.auth.GoogleAuthProvider();
//           firebase.auth()
//           .signInWithPopup(provider)
//           .then((result) => {
//           //   /** @type {firebase.auth.OAuthCredential} */
//             var credential = result.credential;
        
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             // ...

//             console.log(credential);
//             console.log(token);
//             console.log(user);
//           }).catch((error) => {
//             console.log(error);
//           });
//      }

//      render() {
//           return (
//                <div>
//                     <button class='btn-primary mt-5' onClick={this.submit}>Login With Google</button>
//                </div>
//           )
//      }
// }
