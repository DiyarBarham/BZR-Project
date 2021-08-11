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

  );
}
export default App;
