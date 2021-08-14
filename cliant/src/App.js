import React from 'react';
import {Router} from '@reach/router';
import Header from './components/header/Header';
import MainForm from "./components/FormResidence/MainForm";

import Form from './components/Form';
import SignInOutContainer from './containers';

function App() {

  
  return (
    <Router>
      {/* <Navbar/> */}
      <Form path='/reg'/>
      <Header path="/"/>

      <MainForm  path='/fromResidnce' />
      
      <SignInOutContainer path="/login"/>
    </Router>
  )
}
export default App;
