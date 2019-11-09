import React, { Component } from 'react';
import DatePicker from './Component/Datepicker';
import { Container } from '@material-ui/core';
import './App.css';

class LeftPic extends React.Component {

  render() {
    
    return (
      <>
        <div id="leftbox">
          <DatePicker text='Start Date' start="2019-05-24" /> <br/>
          <DatePicker text='End Date' start="2019-11-07" />
          <p></p>
        </div>
      </>
    )
  }
}
export default LeftPic;