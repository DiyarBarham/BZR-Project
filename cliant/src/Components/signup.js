import React,{useState} from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import axios from 'axios';
import Cookies from 'js-cookie';
import {navigate} from '@reach/router';
const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const onSubmit = e =>{
        e.preventDefault();
        const thisUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            role : 'user',
            password: password,
            confirmPassword: confirmPassword,
        }
        console.log(thisUser);
        axios.post('http://localhost:8000/api/user/register', thisUser)
        .then( res => {
            Cookies.set('user', res.data.user)
            navigate('/')
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={onSubmit}>
                    <TextField fullWidth label='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Enter your first name" />
                    <TextField fullWidth label='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Enter your last name" />
                    <TextField fullWidth label='Email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />                    
                    <TextField fullWidth label='Password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm your password"/>
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;