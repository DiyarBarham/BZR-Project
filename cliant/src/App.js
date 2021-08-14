import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Register from './components/register';
import Admin  from './components/admin';
import {Router} from '@reach/router';
import { useContext } from 'react';
import Header from './components/header/Header';
import MainForm from "./components/FormResidence/MainForm";






function App() {
import Card from './Card/Card';
import Form from './components/Form';
import Cardview from './components/Cardview';
import SignInOutContainer from './containers';

function App() {
  // const{user,setUser,isAuthenticated}   = useContext(AuthContext)
  // console.log(user);
  // console.log(isAuthenticated);
  
  return (
    <Router>
      {/* <Navbar/> */}
      <Form path='/reg'/>
      <Header path="/"/>
      <MainForm  path='/fromResidnce' />
      <Cardview path="/card"/> 
      <SignInOutContainer path="/login"/>
   </Router>
   
      
     
     
       


  
   
  )
}
export default App;
