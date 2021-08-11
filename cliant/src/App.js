import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import SearchBar from "material-ui-search-bar";
import Header from './components/header/Header';

function App() {

  const t={

  }
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Header path="/"/>
        </Router>
        <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
      </header>
    </div>
  );
}
export default App;
