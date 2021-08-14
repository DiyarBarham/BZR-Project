import { Button } from '@material-ui/core';
import React from 'react';
import Card from '../../Card/Card';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import Serchbar from '../header/Serchbar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import StepOne from "./StepOne";
import StepTwo from "./StepTow";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import './css/custom.css'
import './css/normilize.css'
import './css/skeleton.css'
import MultiStep from 'react-multistep'
import HeaderForm from '../header/HeaderForm';

const steps = [
    { component: <StepOne /> },
    { component: <StepTwo /> },
    { component: <StepThree /> },
    { component: <StepFour /> }
  ]
  
  const prevStyle = {'background': '#33c3f0', 'border-width': '2px'}
  const nextStyle = {'background': '#33c3f0',  'border-width': '2px'}

const MainForm = (props) => (

  <>

        
    <HeaderForm/>

      <BackgroundAnimation/>
  <div className="automation_WithDesc Hero">
    <br/> <br/> <br/> <br/>  
    
    <h1 style={{color:"whitesmoke"}} > Welcom in Our websit <span style={{color:"rgb(166 67 72)"}}  > BZR  </span>  </h1>
    <p style={{color:"white" ,fontSize:"22px"}}> You Can Add Your Resedinace form this form below <br/> if you need any help feel free to contact us <br/> <br/>  </p>
    
    <Card/>
    
<br/><br/>
  

    
<MultiStep path="/FormReseidnce" steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>





    
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

export default MainForm;