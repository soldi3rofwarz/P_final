import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Amerrique',
    imgPath:
    '/res/amerrique.jpg'
  },
  {
    label: 'El nanciatal',
    imgPath:
      '/res/elnancital.jpg',
  },
  {
    label: 'Hato grande',
    imgPath:
      '/res/back.jpg',
  },
  {
    label: 'Amerrique',
    imgPath:
      '/res/foto2.jpg',
  },
  {
    label: 'Puerto Diaz',
    imgPath:
      '/res/foto4.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    Width: '100vw',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.success.light,
    color: 'white',
    fontZise: '60px'
  },
  img: {
    height: '100vh',
    display: 'block',
    maxWidth: '100vw',
    overflow: 'hidden',
    width: '100%',
    backgroundAttachment:'fixed'
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
      <>
      <div style={{height: '50px'}}></div>
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label} >
            {Math.abs(activeStep - index) <= 2 ? (
                <div  >
                    <img className={classes.img} src={step.imgPath} alt={step.label} />
                    <div  style={{
                        background:'linear-gradient(rgba(255,255,255,0), rgba(0,0,0,1) )', width:'100%', height:'290px',
                        position:'absolute', top:'55.8%'
                        }}>
                    <Typography 
                    style={{ top:'70%',fontSize: '90px',color:'white' ,
                    }}>Chontales</Typography></div>
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
    </>
  );
}
export default SwipeableTextMobileStepper;