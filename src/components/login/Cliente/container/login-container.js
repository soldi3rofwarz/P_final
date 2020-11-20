import React, { Component } from 'react';

import Login from '../componente/cliente';

import {
    signin,
    onAuthChanged,
} from '../../../../api/data/user-data';

import { Redirect } from 'react-router-dom';

class LoginContainer extends Component{

    constructor (props){
        super(props);

        this.state = {
            email:'',
            password:'',

            estado: '',
        };
    }

    render(){
        const{
            email,
            password, 
            estado,
            errorGeneral,
            errorEmail,
            errorPassword,

        } = this.state;
        if(estado === 'logueado'){
            return(
                <Redirect
                to='/' 
                />
            );
        }
        return(
            <Login
                email={email}
                onChangeEmail = {this.handleChangeEmail}
                password={password}
                onChangePassword={this.handleChangePassword}
                onSignin={this.handleSignin}
                estado={estado}
                errorGeneral={errorGeneral}
                errorEmail={errorEmail}
                errorPassword={errorPassword}
                messageClose={this.messageClose}
            />
        );
    }
    componentDidMount() {
        onAuthChanged((user) => {
            if(user) {
                this.setState({
                    estado: 'logueado',
                });
            }
        });
    }

    handleChangeEmail = (event) => this.setState({ email: event.target.value });
    handleChangePassword = (event) => this.setState({ password: event.target.value });

    handleSignin = () => {
        const {
            email,
            password,
        } = this.state;

        if(!email || !password) {
            this.error(null);
        }
        else {
            this.loading();
            const a = signin(email, password)
            console.log(a)
            .then(() => {
                this.reinitialize();
            })
            .catch((e) => {
                this.error(e);
            });
        }
    };
   

    loading = () => {
        this.setState({
            estado: 'cargando',
        });
    };

    reinitialize = () => {
        this.setState({
            estado: 'logueado',

            email: '',
            password: '',
        });
    };

    error = (e) => {
        let errorGeneral = null;
        let errorEmail = null;
        let errorPassword = null;
        const {
            email,
            password,

        } = this.state;
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
        this.setState({
            estado: 'error',
            errorGeneral,
            errorEmail,
            errorPassword,
        });
     };
}
export default LoginContainer;