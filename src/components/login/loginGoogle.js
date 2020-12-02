import React, { Component } from 'react';
import {googleAuthProvider, auth} from './../../api/data/firebase-config'

class GoogleLogin extends Component{
constructor(){
    super();
    this.state={
        isLogIn:false,band:false,
        name:"",
        photo:""
    }
}

onSubmit = () => {
    googleAuthProvider()
    auth().signInWithPopup()
    .then(function(result){

        var token = result.credential.accessToken;
        var user = result.user;

    }).catch(function(error){
    
        
        console.log(error);
    });
}
onLogout = () => {
    auth().signOut().then(function(){
    }).catch(function(error){
        console.log(error);
    });
    this.setState({
        isLogIn:false
    })
}
componentDidMount = () =>{
auth().onAuthStateChanged(function(user){
    if(user){
        console.log("user sign in")
        console.log(user.displayName + '\n' + user.email);
        this.setState = {
            isLogIn:true,
            name: user.displayName,
            photo: user.photoURL
        }
        
    } else{
        console.log("no user is signed in");
    }
});
};

    
    render(){
        return(
            
            <div className="login">
                {this.state.isLogIn === false ?
                    <div className = "p-5">  
                     
                       <button
                        type="button"
                        className="btn "
                        onClick={this.onSubmit}>
                            Login Google
                    </button>
                     <button type="button" className="btn "
                        onClick={this.onLogout}>
                            Logout
                     </button>
                        
                    </div>
                    : 
                <>
                <div className="card-media">
                <img src={this.state.photo} alt="" />
                </div>

                <div className = "card-body">
                <h5>{this.state.name}</h5>
                
                </div>
                </>
                }
            </div>   
        )
    }
}
export default GoogleLogin;