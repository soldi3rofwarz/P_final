import React, {useState, useEffect} from 'react'
import firebase from './firebase-config'
import { db } from './firebase-config'
import 'firebase/auth'
import Login from './../../components/login/Cliente/componente/login-cliente'
import Header from './../../elements/theme/components/header'
import Head from './../../components/header/Head'


 const Userd=()=>{

    const [user, setuser] = useState('')
    const[email, setemail]= useState('')
    const[pass, setpass]= useState('')
    const[emailerror, setemailerror]= useState('')
    const[passerror, setpasserror]= useState('')
    const[cuenta, setcuenta]= useState(false)

    const clearInputs=()=>{
        setemail('')
        setpass('')
    }
    const clearErrors=()=>{
        setemailerror('')
        setpasserror('')
    }

    const handleLogin=()=>{
        clearErrors()
        firebase
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .catch((err)=> {
            switch(err.code){
            case "email invalido":
            case "usuario desabilitado":
            case "usuario no encontrado":   
              setemailerror(err.message) 
                break 
            case "mala contraseña":
            setpasserror(err.message)
                break
            }
        })
       
    }

    const handleSignup=()=>{
        clearErrors()
        firebase.out()
        .signInWithEmailAndPassword(email, pass)
        .catch((err)=> {
            switch(err.code){
            case "email ya en uso":
            case "usuario invalido":   
              setemailerror(err.message) 
                break 
            case "contraseña muy debil":
            setpasserror(err.message)
                break
            }
        })
    
    }

    const signout = async () => {
        await firebase.auth().signOut();
    };

    const Listener=()=>{
        //posible error cambiar el onAth.. por onAuthStateChanged
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                clearInputs()
                setuser(user)
            }
            else {
                setuser("")
            }
        })
    }

    useEffect(()=>{
        Listener()
    },[]);

     return(
         <>
         {user?
                <Header signout={signout}/>
                :
                <Login 
                    email ={email}
                    setemail={setemail}
                    pass={pass}
                    setpass={setpass}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    cuenta={cuenta}
                    setcuenta={setcuenta}
                    emailerror={emailerror}
                    passerror={passerror}
                />
            }
        
        </>
     )

 }

 export default Userd;


// export const selectUser = async(userId) => {
//     const document = await queryUser().doc(userId).get();

//     if(document.exist){
//         const user = {
//             id:document.id,
//             ...document.data(),
//         };
//         return user;
//     }
//     else {
//         return null;
//     }
// };
// export const currentUser = () =>{
//     const user = firebase.auth().currentUser;
//     if(user){
//         return user;
//     }
//     else{
//         return null;
//     }
// };

// export const onAuthChanged = (response) =>{
//     firebase.auth().onAuthStateChanged(response);
// };



// export const signin = async (email, password) => {
//     await firebase.auth().signInWithEmailAndPassword(email, password);
// };

// export const addUser = async (user) =>{
//     const {email, password} = user;
//     const result = await firebase.auth().createUserWithEmailAndPassword(email, password);

//     await queryUser().doc(result.user.uid).set({
//         email: email,
//     })
// };