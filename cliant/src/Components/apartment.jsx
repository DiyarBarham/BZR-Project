import React,{useState, useEffect} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Cookies from 'js-cookie';
import axios from 'axios';
import {navigate} from '@reach/router';
import HeaderForm from './header/HeaderForm'
const Apartment=({handleChange})=>{
    const [email, setEmail] = useState('');

    return(
        <div>
            <HeaderForm />
            
        </div>
    )
}

export default Apartment