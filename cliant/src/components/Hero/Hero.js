import { Button } from '@material-ui/core';
import React from 'react';
import Card from '../../Card/Card';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import Serchbar from '../header/Serchbar';
import './Hero.css'
import Grid from '@material-ui/core/Grid';
const Hero = (props) => (
  <>  

      <BackgroundAnimation/>
  <div className="automation_WithDesc Hero">
    <br/> <br/> <br/> <br/>  
    
    <h1 style={{color:"whitesmoke"}} > Welcom in Our websit <span style={{color:"rgb(166 67 72)"}}  > BZR  </span>  </h1>
    <p style={{color:"white" ,fontSize:"22px"}}> this web site is Made to Help You to find Your Perfect Reseidence easly, <br/> if you need any help feel free to contact us <br/> <br/> <Button style={{backgroundColor:"cadetblue"}}>  Leran More   </Button> </p>
    
    <Card/>
    <Serchbar/>
    

    
    
    
      

     </div>
          
     
     
     
  </>
);

export default Hero;