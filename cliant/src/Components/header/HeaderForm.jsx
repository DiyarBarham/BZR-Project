import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link, navigate } from '@reach/router';
import Hero from '../Hero/Hero';
import './header.css'   
import Serchbar from './Serchbar';
import Card from '../../Card/Card';
import Cookies from 'js-cookie';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   
    title: {
      flexGrow: 1,
    },
  }));

const HeaderForm = () => {
    const classes = useStyles();
    const [loggedin, setLoggedin] = useState(false);
    const [loggedout, setLoggedout] = useState(false);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const logg = e =>{
      axios.get('http://localhost:8000/api/user/logout')
      .then(res => {
        Cookies.remove('user')
        navigate('/login')
      })
    }
    useEffect(()=>{
      const mycookie = Cookies.get('user');
      if(mycookie == null){
        setLoggedout(true);
      }else{
        setLoggedin(true);
      }
    },[]);
    
    return (
        <div className="main-page">
        <AppBar style={{backgroundColor:"cadetblue",borderRadius:"10px"}} position="static">
          <Toolbar>
            <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            <Link to="/"><img src={process.env.PUBLIC_URL +"/Logo.png" } width="150px" height="80px" alt="Logo" style={{float:"left"}} /> </Link>

            </Typography> 
            {loggedout && <Link to="/login" style={{textDecoration:"none",color:"black"}}>  <Button  >Login</Button></Link>}
            {loggedin && <Button  onClick={logg}>logout</Button>}  

          </Toolbar>
          
        </AppBar> 
      </div>
      
    )
}
export default HeaderForm;