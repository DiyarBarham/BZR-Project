import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   
    title: {
      flexGrow: 1,
    },
  }));
const Header = () => {
    const classes = useStyles();
    return (
    
        <div className={classes.root}>
        <AppBar style={{backgroundColor:"cadetblue"}} position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            <img src={process.env.PUBLIC_URL +"/Logo.png" } width="150px" height="80px" alt="Logo" style={{float:"left"}} />

            </Typography> 
            <Button >Login</Button>
            <Button color="inherit">Register</Button>

          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Header
