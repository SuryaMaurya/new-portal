import React, { Component } from 'react';
import LeftPic from './LefPic';
import NavBar from './NavBar';
import { Container } from '@material-ui/core';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <>
        <NavBar />
        <LeftPic />
      </>
    )
  }
}
export default App;