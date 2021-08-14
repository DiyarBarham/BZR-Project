import React,{useState, useEffect} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Cookies from 'js-cookie';
import axios from 'axios';
import {navigate} from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import HeaderForm from './header/HeaderForm'
import ReactCardCarousel from 'react-card-carousel';

const useStyles = makeStyles((theme) => ({
    height: "250px",
        width: "400px",
        paddingTop: "100px",
        textAlign: "center",
        background: "rgb(95 158 160)",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box"
  }));
const Apartment=(props)=>{
    const classes = useStyles();
    const [residance, setResidance] = useState({});

    useEffect(()=>{
        console.log('.........................')
        console.log(props.id)
        axios.get("http://localhost:8000/api/residence/"+props.id)
        .then(res => {setResidance(res.data)
            if(residance.state){
                navigate('/')
            }
        })
        
      },[]);
    const CONTAINER_STYLE = () => {
        return {
          position: "relative",
          height: "60vh",
          width: "100%",
          right:"25%",
          flex: 1,
          justifyContent: "center",
          alignItems: "middle"
        };
      }
    
      
    return(
        <div>
            <HeaderForm />
            <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
            <div style={{height: "250px",
        width: "400px",
        paddingTop: "100px",
        textAlign: "center",
        background: "rgb(95 158 160)",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box"}}>First Card</div>
            <div style={{height: "250px",
        width: "400px",
        paddingTop: "100px",
        textAlign: "center",
        background: "rgb(95 158 160)",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box"}}>Second Card</div>
            <div style={{height: "250px",
        width: "400px",
        paddingTop: "100px",
        textAlign: "center",
        background: "rgb(95 158 160)",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box"}}>Third Card</div>
            <div style={{height: "250px",
        width: "400px",
        paddingTop: "100px",
        textAlign: "center",
        background: "rgb(95 158 160)",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box"}}>Fourth Card</div>
            <div style={{height: "250px",
        width: "400px",
        paddingTop: "100px",
        textAlign: "center",
        background: "rgb(95 158 160)",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box"}}>Fifth Card</div>
          </ReactCardCarousel>
        <div style={{marginTop:'500px', marginLeft:'-1000px'}}>
        <h4>Name: {residance.name}</h4>
        <h4>price: {residance.price}</h4>
        <h4>roms Number: {residance.rooms}</h4>
        <h4>balcones Number: {residance.balcones}</h4>
        <h4>for: {residance.gender}</h4>
        <h4>destance From University: {residance.destanceFromUniversity}</h4>
        <h4>location: {residance.location}</h4>
        <h4>description: {residance.description}</h4>


        </div>
        </div>
    )
}

export default Apartment