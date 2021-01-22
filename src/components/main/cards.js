import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {height: 0,
    paddingTop: '56.25%', // 16:9 },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },}));


      export default function RecipeReviewCard(){ 
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
        return (
          <section> <Card className={classes.root} style={{margin:'40px'}}>
          <CardHeader
            title="Piedra de cuapas"
          />
          <CardMedia
            className={classes.media}
            image={`${process.env.PUBLIC_URL}/res/cuapa1.jpg`}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Visita la piedracuapa
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
    
            </IconButton>
    
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
              Fecha: 16/01/2021
              </Typography>
              <Typography paragraph>
              Precio: C$200
              </Typography>
              <Typography paragraph>
              Organizador: INTUR
              </Typography>
    
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.root}>
      <CardHeader
        title="Puerto Díaz"
      />
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/res/puertodiaz.jpg`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Visita a las costas de Puerto Díaz
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">

        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Fecha: 16/01/2021
          </Typography>
          <Typography paragraph>
          Precio: C$200
          </Typography>
          <Typography paragraph>
          Organizador: INTUR
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
    </section>
  );

        }
