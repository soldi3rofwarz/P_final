import React from 'react';
import {
    makeStyles,
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Snackbar from './../../snackbar';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flex: 1,
        background: 'linear-gradient(45deg, #f44336 20%, #e91e63 90%)',
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

const Register = (props) => {

    const classes = useStyles();

    const {
        email,
        onChangeEmail,
        phone,
        onChangePhone,
        password,
        onChangePassword,
        confirm,
        onChangeConfirm,
        estado,

        onRegister,

        errorGeneral,
        errorEmail,
        errorPhone,
        errorPassword,
        errorConfirm,
        messageClose,
    } = props;

    return (
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
                <h1>Registrarse</h1>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            className={classes.textField}
                            label='E-mail'
                            margin="normal"
                            variant="outlined"
                            value={email}
                            onChange={onChangeEmail}
                            disabled={estado === 'cargando' ? true : false}
                            error={errorEmail ? true : false}
                            helperText={errorEmail}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            className={classes.textField}
                            label="Teléfono"
                            margin="normal"
                            variant="outlined"
                            value={phone}
                            onChange={onChangePhone}
                            disabled={estado === 'cargando' ? true : false}
                            error={errorPhone ? true : false}
                            helperText={errorPhone}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            className={classes.textField}
                            label="Contraseña"
                            margin="normal"
                            variant="outlined"
                            value={password}
                            onChange={onChangePassword}
                            type="password"
                            disabled={estado === 'cargando' ? true : false}
                            error={errorPassword ? true : false}
                            helperText={errorPassword}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            className={classes.textField}
                            label='Confirmar contraseña'
                            margin='normal'
                            variant='outlined'
                            value={confirm}
                            onChange={onChangeConfirm}
                            type='password'
                            disabled={estado === 'cargando' ? true : false}
                            error={errorConfirm ? true : false}
                            helperText={errorConfirm}
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
                                color="secondary"
                                size="large"
                                onClick={onRegister}
                                disabled={estado === 'cargando' ? true : false}                                
                            >
                                Registrarme
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                size="large"
                                component={Link}
                                to='/login'
                            >
                                Entrar
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );

};

export default Register;