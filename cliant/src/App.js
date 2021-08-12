<<<<<<< HEAD
import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Todos from './Components/Todos';
import Register from './Components/Register';
import Admin  from './Components/Admin';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AuthContext} from './Context/AuthContext'
import { useContext } from 'react';


function App() {
  const{user,setUser,isAuthenticated}   = useContext(AuthContext)
  console.log(user);
  console.log(isAuthenticated);
  
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}  />
      
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/todos" roles={["user","admin"]} component={Todos}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
    </Router>
   
=======
import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from './components/header/Header';
import Searchbar from './components/searchbar';
import Card from './Card/Card';
function App() {

 
  return (
    <div className="App">


    <header className="App-header">

    <Router>
      <Header path="/"/>
      <Card path="card"/>
   </Router>
   
      
     
     
       


    </header>
    </div>

>>>>>>> 0cf08e31a99c2d7f29d8896dff441702743e4c73
  );
}

export default App;
