import React, { Component } from 'react';
import LeftPic from './LefPic';
import NavBar from './NavBar';
import DataTable from './Component/DataTable';
import SliderData from './Component/SliderData';

import { Container } from '@material-ui/core';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <>
        {/* <NavBar />
        <LeftPic />
        <DataTable /> */}
        <SliderData />
      </>
    )
  }
}
export default App;