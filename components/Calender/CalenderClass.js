import React, { Component } from 'react';
import CalendarInput from './Calender';
import './Calender.css';
import { setBookingDate } from '../../redux/actions';
import { connect } from "react-redux";

class CalenderClass extends Component {
  constructor() {
    super();
    this.state = {
      bookingDate: ''
    };

    this.dateChanged = this.dateChanged.bind(this);
  }

  dateChanged(date) {
    this.setState({
      bookingDate: date
    })
    this.props.setBookingDate(date)
  }

  render() {
    return (
      <div className="calender-class-container">
        <h2>Select Date</h2>
        <CalendarInput onDateChanged={this.dateChanged}/>
        <h4>{this.state.bookingDate}</h4>
      </div>
      );
  }
}


  const mapDispatchToProps = {
    setBookingDate: setBookingDate,
  }
  
  CalenderClass = connect(null, mapDispatchToProps)(CalenderClass);
  export default CalenderClass;
  

