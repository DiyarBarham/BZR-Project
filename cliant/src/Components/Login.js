import React,{useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Cookies} from 'js-cookie';
import axios from 'axios';
import {navigate} from '@reach/router';
const Login=({handleChange})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}


    const onSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/login', {email, password})
        .then( res => {
            Cookies.set('user', res.data.user)
            navigate('/')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={onSubmit}>
                <TextField label='email' placeholder='Enter email' value={email} onChange={e => setEmail(e.value)} fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' value={password} onChange={e => setPassword(e.value)} fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login