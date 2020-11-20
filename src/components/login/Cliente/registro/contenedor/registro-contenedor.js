import React, { Component } from 'react';

import Register from './../../registro/componente/registro';

import {
    addUser,
} from './../../../../../api/data/user-data';

import {
    Redirect,
} from 'react-router-dom';

class RegisterContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirm: '',
            estado: '',
        };
    }

    render() {

        const {
            email,
            password,
            confirm,
            estado,
            errorGeneral,
            errorEmail,
            errorPassword,
            errorConfirm,
        } = this.state;

        if(estado === 'registrado') {
            return (
                <Redirect
                    to='/'
                />
            );
        }

        return (
            <Register
                email={email}
                onChangeEmail={this.handleChangeEmail}
                password={password}
                onChangePassword={this.handleChangePassword}
                confirm={confirm}
                onChangeConfirm={this.handleChangeConfirm}
                estado={estado}
                onRegister={this.handleRegister}
                errorGeneral={errorGeneral}
                errorEmail={errorEmail}
                errorPassword={errorPassword}
                errorConfirm={errorConfirm}
                messageClose={this.messageClose}
            />
        );

    }

    handleChangeEmail = (event) => this.setState({ email: event.target.value });
    handleChangePassword = (event) => this.setState({ password: event.target.value });
    handleChangeConfirm = (event) => this.setState({ confirm: event.target.value });

    handleRegister = () => {
        const validating = this.validate();
        if(validating) {
            const {
                email,
                password,
            } = this.state;
            this.loading();
            addUser({
                email,
                password,
            })
            .then(() => {
                this.reinitialize();
            })
            .catch((e) => {
                console.log("Erroooooooooooor!!!!!", e);
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
            estado: 'registrado',
            email: '',
            password: '',
            confirm: '',
        });
    };

    validate = () => {
        let errorEmail,
            errorPassword,
            errorConfirm;
        const {
            email,
            password,
            confirm,
        } = this.state;
        if(!email) errorEmail = 'E-mail obligatorio';
        if(!password) {
            errorPassword = 'Contraseña obligatorio';
            if(!confirm) errorConfirm = 'Confirmación obligatorio';
        }
        else {
            if(password !== confirm) errorConfirm = 'Las contraseñas no coinciden';
        }
        this.setState({
            estado: 'error',
            errorEmail,
            errorPassword,
            errorConfirm,
        });
        if(!errorEmail && !errorPassword && !errorConfirm)
            return true;
        else
            return false;
    };

    error = (e) => {
        let errorGeneral,
            errorEmail,
            errorPassword;

        switch (e.code) {
            case 'auth/invalid-email':
                errorEmail = 'E-mail inválido';
                break;
            case 'auth/email-already-in-use':
                errorEmail = 'Ya existe un usuario con este e-mail';
                break;
            case 'auth/weak-password':
                errorPassword = 'Contraseña inválida. Debe tener al menos 6 caracteres';
                break;
            default:
                errorGeneral = e.message;
                break;
        }
        this.setState({
            estado: 'error',
            errorGeneral,
            errorEmail,
            errorPassword,
        });
    };

    messageClose = () => {
        this.setState({
            errorGeneral: '',
        });
    };

}
export default RegisterContainer;
//export default RegisterWithContext;