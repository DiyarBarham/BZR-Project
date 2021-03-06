import React from 'react';
import {Router} from '@reach/router';
import Header from './components/header/Header';
import MainForm from "./components/FormResidence/MainForm";
import Apartment from './components/apartment';
import Form from './components/Form';
import SignInOutContainer from './containers';
import Car from './components/items/Car'
import Chat from './components/Chat/Chat'
function App() {

  
  return (
    <Router>
      {/* <Navbar/> */}
      <Form path='/reg'/>
      <Header path="/"/>
      <Apartment path="/apartment/:id" />
      <MainForm  path='/fromResidnce' />
      <Car path='/car'/>
      <SignInOutContainer path="/login"/>
      <Chat path="/chat"/>
    </Router>
  )
}
export default App;
