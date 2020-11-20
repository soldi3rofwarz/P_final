import React from 'react';
import {
    makeStyles,
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './cliente.css';
import Snackbar from './../snackbar';
import WarningIcon from '@material-ui/icons/Warning';
import Header from './../../../header/Head';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flex: 1,
        background: '#7D9857',
        minWidth: '100%',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        width: '290px',
        minHeight: '150px',
        padding: '8px 14px',
    },
    containerLogo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    containerButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '12px',
        marginBottom: '12px',
    },
    textField: {
        width: '100%',
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
}));

const Login = (props) => {

    const classes = useStyles();

    const {
        email,
        onChangeEmail,
        password,
        onChangePassword,
        onSignin,
        estado,
        errorGeneral,
        errorEmail,
        errorPassword,
        messageClose,
    } = props;

    return(
        <>
        <Header/>
        <div
            className={classes.container}
        >
            {errorGeneral && (
                <Snackbar
                    open={errorGeneral ? true : false}
                    messageClose={messageClose}
                    message={errorGeneral}
                    icon={<WarningIcon />}
                    className={classes.error}
                />
            )}
            <Paper
                className={classes.containerForm}
                elevation={5}
            >
                <h1>Iniciar Sesión</h1>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            className={classes.textField}
                            label="E-mail"
                            margin="normal"
                            variant="outlined"
                            value={email}
                            onChange={onChangeEmail}
                            disabled={estado === 'cargando' ? true : false}
                            error={ errorEmail ? true : false }
                            helperText={ errorEmail }
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            className={classes.textField}
                            type='password'
                            label="Contraseña"
                            margin="normal"
                            variant="outlined"
                            value={password}
                            onChange={onChangePassword}
                            disabled={estado === 'cargando' ? true : false}
                            error={ errorPassword ? true : false }
                            helperText={ errorPassword }
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <div
                            className={classes.containerButtons}
                        >
                            <Button
                                variant="contained"
                                color='#7D9857'
                                size="large"
                                onClick={onSignin}
                                disabled={estado === 'cargando' ? true : false}
                            >
                                Entrar
                            </Button>
                            <Button
                                variant="outlined"
                                color='#7D9857'
                                size="large"
                                component={Link}
                                to='/register'
                            >
                                Crear Cuenta
                            </Button> 
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    </>
    );
};
export default Login;