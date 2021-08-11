import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/header/Header';
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';
function App() {

  

  return (
    <div className="App">

    <header className="App-header">

    <Router>
      <Header path="/"/>
      


   </Router>
      
     
     
       


    </header>
    </div>
  );
}
export default App;
