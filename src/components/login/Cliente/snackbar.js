import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/core/Icon';
import {
    makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonClose: {
        padding: theme.spacing(0.5),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export default (props) => {

    const classes = useStyles();

    const {
        open,
        messageClose,
        message,
        icon,
        className,
    } = props;

    return(
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={3000}
            onClose={messageClose}
        >
            <SnackbarContent
                className={className}
                aria-describedby="login-snackbar"
                message={
                    <span className={classes.message}>
                        {icon} {message}
                    </span>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.buttonClose}
                        onClick={messageClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </Snackbar>
    );

};