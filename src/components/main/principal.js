import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Parallax } from 'react-parallax';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import HomeIcon from '@material-ui/icons/Home';
import PollIcon from '@material-ui/icons/Poll';
import PicturesIcon from '@material-ui/icons/Collections';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import UserIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/ListAlt';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import SimpleReactFooter from "simple-react-footer";
import {Link} from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  insideStyles: {
    color: 'white',
    backgroundColor: "rgba(0,0,0,.3)",
    borderRadius: 8,
    padding: 40,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: 'center'
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
    height: 0,
    paddingTop: '56.25%'
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
  },
  textoInicio: {
    textAlign: 'center',
    marginBottom: 20,
  },
}));

const Home = () => {

    const classes = useStyles();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [expanded1, setExpanded1] = React.useState(false);

    const handleExpandClick1 = () => {
      setExpanded1(!expanded1);
    };

    const [expanded2, setExpanded2] = React.useState(false);

    const handleExpandClick2 = () => {
      setExpanded2(!expanded2);
    };

    const description = "¡Aventura y emoción! Nuestra plataforma está empeñada en informar a los amantes de los viajes, sobre los diversos destinos naturales, turísticos, históricos y culturales del departamento de Chontales.";
    const title = "Acerca de nosotros";
    const columns = [
        {
            title: "Recursos",
            resources: [
                {
                    name: "Acerca",
                    link: "/"
                },
                {
                    name: "Administración",
                    link: "/"
                },
                {
                    name: "Contactos",
                    link: "/"
                },
                {
                    name: "Correos",
                    link: "/"
                }
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    name: "Privacidad",
                    link: "/privacy"
                },
                {
                    name: "Términos y Condiciones",
                    link: "/terms"
                }
            ]
        },
        {
            title: "Consulte",
            resources: [
                {
                    name: "Destinos",
                    link: "/"
                },
                {
                    name: "Restaurantes",
                    link: "/"
                },
                {
                  name: "Alojamientos",
                  link: "/"
                },
                {
                  name: "Ofertas",
                  link: "/"
                },
            ]
        }
    ];

    return ( 
        <>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title} noWrap>
                  VagaChontal
                </Typography>
                <IconButton color="inherit">
                    <AccountCircle/>
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                  <ListItem button>
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary={'Inicio'} />
                    
                  </ListItem>
                  <Divider />
                  <ListItem button>
                  <ListItemIcon><PicturesIcon/></ListItemIcon>
                    <Link to = '/galeria'>
                        <ListItemText primary={'Galería'} />
                    </Link>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon><EventAvailableIcon/></ListItemIcon>
                    <ListItemText primary={'Actividades'} />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon><PollIcon/></ListItemIcon>
                    <ListItemText primary={'Estadísticas'} />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon><ListIcon/></ListItemIcon>
                    <ListItemText primary={'Formulario'} />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon><UserIcon/></ListItemIcon>
                    <ListItemText primary={'Cliente'} />
                  </ListItem>
                  <Divider />
              </List>

            </Drawer>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
             
            </main>
          </div>
      </>

    );
}
export default Home;