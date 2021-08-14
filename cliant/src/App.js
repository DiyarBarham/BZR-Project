import React from 'react';

import {Router} from '@reach/router';
import Header from './components/header/Header';
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
      <Cardview path="/card"/> 
      <SignInOutContainer path="/login"/>
    </Router>
  )
}
export default App;
