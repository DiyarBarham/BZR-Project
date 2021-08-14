import { Button } from '@material-ui/core';
import React from 'react';
import Card from '../../Card/Card';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import Serchbar from '../header/Serchbar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './Hero.css'
import Carousel from '../items/Carousel';
import Buttons from '../header/Buttons';
import SortByOptions from '../header/Select';
import AskToAddResidence from '../FormResidence/AskToAddResidence';
const Hero = (props) => (
  <>  

      <BackgroundAnimation/>
  <div className="automation_WithDesc Hero">
    <br/> <br/> <br/> <br/>  
    
    <h1 style={{color:"whitesmoke"}} > Welcom in Our websit <span style={{color:"rgb(166 67 72)"}}  > BZR  </span>  </h1>
    <p style={{color:"white" ,fontSize:"22px"}}> this web site is Made to Help You to find Your Perfect Reseidence easly, <br/> if you need any help feel free to contact us <br/> <br/> <Button style={{backgroundColor:"cadetblue"}}>  Leran More   </Button> </p>
    
    <Card/>
    
<br/><br/>
  
  <Serchbar/>  <br/><br/><br/> 
    <SortByOptions />

  
    <Carousel/>
    <AskToAddResidence/>

    
    <AppBar position="static" style={{backgroundColor:"#5f9ea0"}} >
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2019 Gistia
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    
    
    
      

     </div>
          
     
     
     
  </>
);

export default Hero;