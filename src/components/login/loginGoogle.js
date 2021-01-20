import React, { Component } from 'react';
import firebase from './../../api/data/firebase-config'
import { Link } from 'react-router-dom';
import Header from './../../elements/theme/components/header'

class GoogleLogin extends Component{
    /** @param {Record<string, any>} props */
constructor(props){
    super(props)
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
    let currentComponent = this;


    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            console.log("user sign in")
            console.log(user.displayName + '\n' + user.email);
            currentComponent.setState = {
                isLogIn: true,
                name: user.displayName,
                photo: user.photoURL
            }
            
        }
        else{
            console.log("no user is signed in");
        }
    });
}
    render(){
        return(
            <section >
            <div className="login" >
                {this.state.isLogIn === false ?
                    <div className = "p-5" style={{
                        background: 'linear-gradient(#f8f8f8, #6EEDFA )', alignItems: 'center',justifyContent:'center', height: '400px',
                        boxShadow:'16px 16px 16px', borderRadius: '15px', maxWidth: '500px', marginLeft: '400px', minWidth: '400px'
                        }}>  
                        <img src={`${process.env.PUBLIC_URL}/res/login.jpg`} style={{width: '200px', display: 'flex', flex: '2', marginLeft: '50px'}} />
                       <button
                        type="button"
                        className="btn "
                        onClick={this.onSubmit}
                        style={{
                            width: '160px', boxShadow:'5px 5px 5px', background: '#698DFA', top: '500px', margin: '10px 10px 10px', marginLeft: '60px'
                        }}
                        > <Link to ='/' style={{color:'white', textDecoration: 'none'}}>
                            Login Google
                        </Link>
                    </button>
                        <h4>¿Eres Promotor? entra <Link to='/login' style={{textDecoration:'none'}}>Aqui</Link></h4>
                    
                        

                     
                     
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
            </section>
        )
    }
}
export default GoogleLogin;