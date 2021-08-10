import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/header/Header';

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
