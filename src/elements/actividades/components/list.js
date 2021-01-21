import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EyeIcon from '@material-ui/icons/Visibility';
import { red } from '@material-ui/core/colors';
import './list.styles.css';
import {Link}from 'react-router-dom';
//import Detalle from './../../Detalles/componentes/detalles'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    title: {
      flexGrow: 1,
    },
    rootGrid: {
      flexGrow: 1,
      margin: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    rootCard: {
      width: '100%',
    },
    media: {
      height: 140,
    },
    rootC: {
      width: '100%',
    },
    mediaC: {
      height: 200,
    },
    textoInicio: {
      textAlign: 'center',
      marginBottom: 20,
    },
  }));
  

export const List = (props) => {

    const {
        listActividades,
        onDelete,
    } = props;

    const classes = useStyles();

    return (
        <>

            {listActividades ?

             
            <div className={classes.rootGrid}>
                <Paper className={classes.paper}>
                    <Typography variant="h3" color="textSecondary" component="h3">
                        Actividades
                    </Typography>
                    <Grid  container spacing={3} className={classes.rootC}>
                        {listActividades.map ((item) =>
                            <p key={item.id}>
                                
                                <Grid item xs={12}>
                        <Card className={classes.rootC}>
                            <CardHeader
                           
                            title={item.actividad}
                            
                            />
                            <CardMedia
                            className={classes.mediaC}
                            image={item.fileUrl}
                           
                            />
                            <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Actividad: {item.actividad}
                                <Typography/>
                                Fecha: {item.fecha}
                                <Typography/>
                                Precio: {item.precio}
                                <Typography/>
                                Organización: {item.organizacion}
                            </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                            <Link to={`/form/${item.id}`}>
                            <IconButton aria-label="editar">
                                <EditIcon  />
                            </IconButton>
                            </Link>
                            <IconButton aria-label="eliminar">

                                <DeleteIcon onClick = {()=> {onDelete(item.id)}}/>
                            </IconButton>
                            <IconButton aria-label="ver">
                                <EyeIcon />
                            </IconButton>
                            </CardActions>
                            </Card>
                        </Grid>
                            </p>
                        )}
                    </Grid>
                </Paper>
            </div>               
                :
                'No hay datos'
                
            }
        </>
    );
};