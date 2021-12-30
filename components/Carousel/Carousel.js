import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';

import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import muiTheme from '../../themes/mui';
import { ThemeProvider } from '@material-ui/core/styles';



const baseUrl = "https://image.tmdb.org/t/p/original/";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    backgroundColor: '#171717',
    maxHeight: '500px',
    zIndex:-1,
  },
  rootStepper: {
    position: 'relative',
    bottom: '10vh',
    backgroundColor: 'transparent'
  },
  title1: {
    position: 'relative',
    bottom: '44vh',
    color: 'white',
    textAlign: 'left',
    marginLeft: '50px',
    textTransform: 'uppercase',
    fontSize: '47px',
    opacity: 0.8
  },
  title2: {
    position: 'relative',
    bottom: '44vh',
    color: 'white',
    textAlign: 'left',
    marginLeft: '50px',
    opacity: 0.5
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: '#171717',
    color: 'white'
  },
  img: {
    height: 500,
    display: 'block',
    maxWidth: '100%',
    objectFit: 'cover',
    objectPosition: '100% 25%',
    overflow: 'hidden',
    width: '100%',
    boxShadow: '1px 10px 20px 0px rgba(0,0,0,0.75)'
  },
  btn: {
    position: 'relative',
    bottom: '32vh',
    right: '75vh',
    marginRight: "200px",
    backgroundColor: '#e4c520d6',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '5px',
    height: '32px',
    width: '100px',
    cursor: 'pointer',
    fontWeight: 600,
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}));

function Carousel({movies}) {
  const classes = useStyles();
  const theme = useTheme();
  const maxSteps = 8;
  const [activeStep, setActiveStep] = React.useState(0);

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
    <div className={classes.root} style={{height:'500px'}}>
     
      <AutoPlaySwipeableViews style={{height:'500px'}}
    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
    index={activeStep}
    onChangeIndex={handleStepChange}
    enableMouseEvents
    >
        {movies? movies.map((movie, i) => (

      <div  key={i}> 
            {Math.abs(activeStep - i) <= 2 ? (
        <div style={{height:'500px'}}>
        <img className={classes.img} src={`${baseUrl}${movie.backdrop_path}`} alt={movie.name} />
        <h1 className={classes.title1}>{movie.original_title ? movie.original_title : movie.name}</h1>
        <h3 className={classes.title2}>{movie.overview}</h3>
        </div>
        ) : null}
          </div>
    )):null}
      </AutoPlaySwipeableViews>
      <ThemeProvider theme={muiTheme}>
            <MobileStepper
    variant="dots"
    steps={maxSteps}
    position="static"
    activeStep={activeStep}
    className={classes.root && classes.rootStepper}
    nextButton={

    <Button  size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                      </Button>
    }
    backButton={
    <Button  size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                      
                      </Button>

    }
    />
      </ThemeProvider>
    </div>
    );
}

export default Carousel;
