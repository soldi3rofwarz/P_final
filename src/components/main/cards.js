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
            title: "Resources",
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
                  <Badge badgeContent={15} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
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
                    <ListItemText primary={'Galería'} />
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
              <div className={classes.drawerHeader} />
                <div>
                  <Parallax
                    bgImage={require('../../assets/back.jpg')}
                    bgImageAlt="the cat"
                    strength={500}
                  >
                    <div style={{ height: 570 }}>
                      <div className={classes.insideStyles}>
                        <Typography variant="h5" component="h2" className={classes.textoInicio}>
                          ¡Conoce tu tierra, conoce Chontales!
                        </Typography>
                        <Button variant="contained" size="large" color="secondary">
                          ¡Únete!
                        </Button>
                      </div>
                    </div>
                  </Parallax>
                </div>
                <div className={classes.rootGrid}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Card className={classes.rootCard}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Misión"
                            height="250"
                            image="https://concepto.de/wp-content/uploads/2013/05/mision.jpg"
                            title="Mision"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Misión
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Dar a conocer el turismo Chontaleño, al exponer al público las diferentes actividades que realizan las distintas organizaciones.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={6}>
                      <Card className={classes.rootCard}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Misión"
                            height="250"
                            image="https://www.anticiparse.org/wp-content/uploads/2018/02/vision-300x155.jpg"
                            title="Mision"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Visión
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              Llegar ser a reconocidos en nuestra región y a nivel internacional ofreciendo siempre un servicio de calidad y con compromiso.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <Typography variant="h3" color="textSecondary" component="h3">
                          Galería
                        </Typography>
                        <Grid  container spacing={3}>
                          <Grid item xs={4}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                
                                  image='https://www.visitanicaragua.com/wp-content/uploads/2020/06/Sierra-de-Amerrique-Chontales-2.jpg'
                                  imageAlt="the cat"
                                  strength={500}
                                >
                                  <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                          <Grid item xs={8}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                  bgImage={require('../../assets/foto1.jpg')}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                  <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                          <Grid item xs={4}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                  bgImage={require('../../assets/foto3.jpg')}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                  <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                          <Grid item xs={4}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                  bgImage={require('../../assets/foto4.jpg')}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                  <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                          <Grid item xs={4}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                  bgImage={require('../../assets/foto5.jpg')}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                  <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                          <Grid item xs={7}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                  bgImage={require('../../assets/foto6.jpg')}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                  <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                          <Grid item xs={5}>
                            <Paper className={classes.paper}>
                              <div>
                                <Parallax
                                  bgImage={require('../../assets/foto7.jpg')}
                                  bgImageAlt="the cat"
                                  strength={500}
                                >
                                  <div style={{ height: 200 }}>
                                  </div>
                                </Parallax>
                              </div>
                            </Paper>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <Typography variant="h3" color="textSecondary" component="h3">
                          Actividades
                        </Typography>
                        <Grid  container spacing={3}>
                          <Grid item xs={4}>
                            <Card className={classes.rootC}>
                              <CardHeader
                                avatar={
                                  <Avatar aria-label="recipe" className={classes.avatar}>
                                    P
                                  </Avatar>
                                }
                                action={
                                  <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                  </IconButton>
                                }
                                title="Puerto Díaz"
                                subheader="Viernes 22 de enero"
                              />
                              <CardMedia
                                className={classes.mediaC}
                                image="https://assets.cdnelnuevodiario.com/cache/85/41/85415047407c57fdef92a54f9ee9d987.jpg"
                                title="Paella dish"
                              />
                              <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  Recorrido por las costas de la comunidad de puerto díaz.
                                </Typography>
                              </CardContent>
                              <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                  <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                  <ShareIcon />
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
                                  <Typography paragraph>Detalles:</Typography>
                                  <Typography>
                                    Fecha: 22/01/2020
                                    Hora: 7:00 a. m.
                                    Punto de reunión: Gasolinera Puma
                                    Precio: C$ 200.00
                                    Organizador: INTUR
                                  </Typography>
                                </CardContent>
                              </Collapse>
                            </Card>
                          </Grid>
                          <Grid item xs={4}>
                            <Card className={classes.rootC}>
                              <CardHeader
                                avatar={
                                  <Avatar aria-label="recipe" className={classes.avatar}>
                                    A
                                  </Avatar>
                                }
                                action={
                                  <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                  </IconButton>
                                }
                                title="Amerrique"
                                subheader="Lunes 15 de febrero"
                              />
                              <CardMedia
                                className={classes.mediaC}
                                image="https://www.visitanicaragua.com/wp-content/uploads/2020/09/Pe%C3%B1%C3%B3n-del-Cacique-Amerrique-Juigalpa.jpg"
                                title="Paella dish"
                              />
                              <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  Recorrido por los escarpados senderos de las montañas de la Serranía de Amerrique.
                                </Typography>
                              </CardContent>
                              <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                  <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                  <ShareIcon />
                                </IconButton>
                                <IconButton
                                  className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded1,
                                  })}
                                  onClick={handleExpandClick1}
                                  aria-expanded={expanded1}
                                  aria-label="show more"
                                >
                                  <ExpandMoreIcon />
                                </IconButton>
                              </CardActions>
                              <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                <CardContent>
                                  <Typography paragraph>Detalles:</Typography>
                                  <Typography>
                                    Fecha: 22/01/2020
                                    Hora: 7:00 a. m.
                                    Punto de reunión: Gasolinera Puma
                                    Precio: C$ 200.00
                                    Organizador: INTUR
                                  </Typography>
                                </CardContent>
                              </Collapse>
                            </Card>
                          </Grid>
                          <Grid item xs={4}>
                            <Card className={classes.rootC}>
                              <CardHeader
                                avatar={
                                  <Avatar aria-label="recipe" className={classes.avatar}>
                                    N
                                  </Avatar>
                                }
                                action={
                                  <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                  </IconButton>
                                }
                                title="El Nancital"
                                subheader="Sabado 13 de marzo"
                              />
                              <CardMedia
                                className={classes.mediaC}
                                image="https://nuevaya.com.ni/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/01/Archipielago-El-Nancital-Nicaragua.jpg.webp"
                                title="Paella dish"
                              />
                              <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  Recorrido por las costas del municipio de Acoyapa y visita las islas del archipielago.
                                </Typography>
                              </CardContent>
                              <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                  <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                  <ShareIcon />
                                </IconButton>
                                <IconButton
                                  className={clsx(classes.expand, {
                                    [classes.expandOpen]: setExpanded2,
                                  })}
                                  onClick={handleExpandClick2}
                                  aria-expanded={expanded2}
                                  aria-label="show more"
                                >
                                  <ExpandMoreIcon />
                                </IconButton>
                              </CardActions>
                              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                <CardContent>
                                  <Typography paragraph>Detalles:</Typography>
                                  <Typography>
                                    Fecha: 22/01/2020
                                    Hora: 7:00 a. m.
                                    Punto de reunión: Gasolinera Puma
                                    Precio: C$ 200.00
                                    Organizador: INTUR
                                  </Typography>
                                </CardContent>
                              </Collapse>
                            </Card>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
                <SimpleReactFooter 
                  description={description} 
                  title={title}
                  columns={columns}
                  linkedin="fluffy_cat_on_linkedin"
                  facebook="fluffy_cat_on_fb"
                  twitter="fluffy_cat_on_twitter"
                  instagram="fluffy_cat_live"
                  youtube="UCFt6TSF464J8K82xeA?"
                  pinterest="fluffy_cats_collections"
                  copyright="VagaChontal 2021"
                  iconColor="white"
                  backgroundColor="blue"
                  fontColor="white"
                  copyrightColor="white"
                />
            </main>
          </div>
      </>

    );
}
export default Home;