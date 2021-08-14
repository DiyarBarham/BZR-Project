import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Register from './components/register';
import Admin  from './components/admin';
import {Router} from '@reach/router';
import { useContext } from 'react';
import Header from './components/header/Header';
<<<<<<< HEAD
import MainForm from "./components/FormResidence/MainForm";






function App() {
=======
import Card from './Card/Card';
import Form from './components/Form';
import Cardview from './components/Cardview';
import SignInOutContainer from './containers';
>>>>>>> 810fe19b311cb62c48636489f76ce903404acfdc

function App() {
  // const{user,setUser,isAuthenticated}   = useContext(AuthContext)
  // console.log(user);
  // console.log(isAuthenticated);
  
  return (
    <Router>
      {/* <Navbar/> */}
      <Form path='/reg'/>
      <Header path="/"/>
<<<<<<< HEAD
      <MainForm  path='/fromResidnce' />
      
   </Router>
   
      
     
     
       


    </header>
    </div>

  );
=======
      <Cardview path="/card"/> 
      <SignInOutContainer path="/login"/>
    </Router>
  )
>>>>>>> 810fe19b311cb62c48636489f76ce903404acfdc
}
export default App;
