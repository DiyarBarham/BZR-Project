import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from './components/header/Header';
import MainForm from "./components/FormResidence/MainForm";






function App() {

 
  return (
    <div className="App">


    <header className="App-header">

    <Router>
      <Header path="/"/>
      <MainForm  path='/fromResidnce' />
      
   </Router>
   
      
     
     
       


    </header>
    </div>

  );
}
export default App;
