import React from 'react';
import {Router} from '@reach/router';
import Header from './components/header/Header';
import MainForm from "./components/FormResidence/MainForm";
import Apartment from './components/apartment';
import Form from './components/Form';
import SignInOutContainer from './containers';

function App() {

  
  return (
    <Router>
      {/* <Navbar/> */}
      <Form path='/reg'/>
      <Header path="/"/>
      <Apartment path="/apartment"/>
      <MainForm  path='/fromResidnce' />
      
      <SignInOutContainer path="/login"/>
    </Router>
  )
}
export default App;
