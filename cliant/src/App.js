import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from './components/header/Header';
import Searchbar from './components/searchbar';
function App() {

  const t={

  }
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Header path="/"/>
        <Searchbar path="/" />
        </Router>
        
      </header>
    </div>
  );
}
export default App;
