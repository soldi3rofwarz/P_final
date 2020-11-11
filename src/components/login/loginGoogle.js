import React, { Component } from 'react';
import firebase from '../../Firebase/config'

class GoogleLogin extends Component{
constructor(){
    super();
    this.state={
        isLogIn:false,
        name:"",
        photo:""
    }
}

onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){

        var token = result.credential.accessToken;
        var user = result.user;

    }).catch(function(error){
    
        
        console.log(error);
    });
}
onLogout = () => {
    firebase.auth().signOut().then(function(){
    }).catch(function(error){
        console.log(error);
    });
    this.setState({
        isLogIn:false
    })
}
componentDidMount = () =>{
firebase.auth().onAuthStateChanged(function(user){
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
            
            <div className="login-are card mx-auto mt-5">
                {this.state.isLogIn === false ?
                    <div className = "card-body p-5">  
                        <h5 className = "text-center mb-4">probando </h5>
                        <button
                            type="button"
                            className="btn btn-primary text-white w-100"
                            onClick={this.onSubmit}>
                                Login with Google
                        </button>
                        <button type="button" className="btn btn-danger"
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