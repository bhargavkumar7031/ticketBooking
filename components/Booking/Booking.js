import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../Header/Header';
import CalenderClass from '../Calender/CalenderClass';
import SeatPickerMain from '../SeatPicker/SeatPicker';
import ShowTiming from '../showTiming/showTiming';
import muiTheme from '../../themes/mui';
import { ThemeProvider } from '@material-ui/core/styles';
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    height: '100vh'
  },
  backButton: {
    marginRight: theme.spacing(1),
    color: 'white',
    backgroundColor: 'grey'
  },
  buttonContainer: {
    textAlign: 'center',
    width: '100%'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select Date', 'Availbale Show Timing', 'Choose Number of Seats', 'Proceed with Booking'];
}



function getStepContent(stepIndex,date,hall,seat) {

  switch (stepIndex) {
    case 0:
      return (<CalenderClass className={useStyles.calender}/>);
    case 1:
      return <ShowTiming/>;
    case 2:
      return <SeatPickerMain />;
    default:
  return (<div>
        <ul>
          <li>{date}</li>
          <li>{hall}</li>
          <li>{seat}</li>
          <li>Please confirm the Booking</li>
        </ul>
  </div>);
  }
}

function Booking({selectedBookingDate, selectedTimeAndHall,selectedSeat}) {
  const classes = useStyles();
  let apple = true;
  const [activeStep, setActiveStep] = React.useState(0);
  if(selectedBookingDate && selectedBookingDate.length>0){
    apple = false;
  }
  const steps = getSteps();

  const handleNext = () => {
    if(selectedBookingDate && selectedBookingDate.length>0 && !selectedTimeAndHall){
      apple = true;
    }
   
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
  
    <div className={classes.root}>
      <Header />
      <ThemeProvider theme={muiTheme}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
      <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
    ))}
      </Stepper>
      </ThemeProvider>
      <div>
        {activeStep === steps.length ? (
 
             <div style={{margin:'20px', textAlign:'center'}}>
            <h3>Congratulations Your Booking confirmed</h3>
            <p>{selectedBookingDate}</p>
            <p>{selectedTimeAndHall}</p>
            <p>{selectedSeat}</p>
            <img src={'data:image/png;base64,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'}/>
        </div>
           
        
      ) : (
      <div >
            <Typography className={classes.instructions}>{getStepContent(activeStep,selectedBookingDate, selectedTimeAndHall,selectedSeat)}</Typography>
            <div className={classes.buttonContainer} >
              <Button
      disabled={activeStep === 0}
      onClick={handleBack}
      className={classes.backButton}
      >
                Back
              </Button>
    
              <Button variant="contained" disabled={apple} color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                
              </Button>
            </div>
          </div>
      )}
      </div>
    </div>
    );
}

const mapStateToProps = (state) => (
  {
    selectedBookingDate: state.bookingDate,
    selectedTimeAndHall: state.bookingTimeAndHall,
    selectedSeat: state.selectedSeat
  
  } )
  
  
  
  Booking = connect(mapStateToProps, null)(Booking);
  export default Booking;
  