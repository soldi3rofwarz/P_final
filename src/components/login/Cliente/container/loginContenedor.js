import React,{useState,useEffect} from 'react'
import Login from './../componente/login-cliente'
import {Link} from 'react-router-dom'
import {
    signin,
    onAuthChanged,
} from '../../../../api/data/user-data'
export const LoginContenedor =()=>{

    const [email, setemail] = useState()
    const [password, setPassword]= useState()
    const [estado, setestado] = useState('')

    

   
    const handleChangeEmail = (event) => setemail({ email: event.target.name });
    const handleChangePassword = (event) => setPassword({ password: event.target.name });


    const Loading = () => {
        setestado({
            estado: 'cargando',
        });
    };

    const Reinitialize = () => {
        setestado({
            estado: 'logueado',

            email: '',
            password: '',
        });
    }
     const Error = (e) => {
        let errorGeneral = null;
        let errorEmail = null;
        let errorPassword = null;

        if(email & password){
            switch(e.code){
                case 'auth/invalid-email':
                    errorEmail = 'E-mail o contraseña inválidos';
                    break;
                case 'auth/wrong-password':
                    errorGeneral = 'E-mail o contraseña inválidos';
                    break;
                case 'auth/network-request-failed':
                    errorGeneral = 'Problemas de conexion';
                    break;
                    default:
                        errorGeneral = e.messageClose;
                        break;
            }
        }
        else{
            if(!email) errorEmail = 'E-mail obligatorio'
            if(!password) errorPassword = 'Contraseña obligatorio';
        }
        setestado({
            estado: 'error',
            errorGeneral,
            errorEmail,
            errorPassword,
        });
     };

    const handleSignin = () => {

        if(!email || !password) {
            Error(null);
        }
        else {
            Loading();
            signin(email, password)
           
            .then(() => {
                Reinitialize();
            })
            onAuthChanged(user => {
                if(user) {
                     setestado(
                       estado=== 'logueado',
                     )
                     if(estado === 'logueado'){
                        return(
                            <Link
                                to='/' 
                            />
                        );
                    }
                }
             })
            .catch((e) => {
                Error(e);
            });
        }
    };
    
    
        
   
     
    console.log("cargando login");
    

        
       
    
    return (
        <Login
                email={email}
                onChangeEmail = {handleChangeEmail}
                password={password}
                onChangePassword={handleChangePassword}
                onSignin={handleSignin}
                estado={estado}
                // errorGeneral={errorGeneral}
                // errorEmail={errorEmail}
                // errorPassword={errorPassword}
                // messageClose={messageClose}
            />
    )
}