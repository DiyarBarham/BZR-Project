import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { navigate } from '@reach/router'
import axios from 'axios';
const Navbar = props =>{
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext();
    
    const onClickLogoutHandler = ()=>{
        // AuthService.logout().then(data=>{
        //     console.log(data);
        //     if(data.success){
        //         console.log("2222222222222222222222222")
        //         setUser(data.user);
        //         setIsAuthenticated(false);
        //         navigate('/success');
        //     }
        // });
        console.log("hussssssaineeeee")
        axios.get('http://localhost:8000/api/logout')
            .then(data=> {
                console.log("mohamoudddddd")
                setUser(data.user);
                setIsAuthenticated(false);
                navigate('/success');
            }).catch(err => console.log(err))
    }

    const unauthenticatedNavBar = ()=>{
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link>  
                <Link to="/login">
                    <li className="nav-item nav-link">
                        Login
                    </li>
                </Link>  
                <Link to="/register">
                    <li className="nav-item nav-link">
                        Register
                    </li>
                </Link>  
            </>
        )
    }

    const authenticatedNavBar = ()=>{
        return(
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link> 
                <Link to="/todos">
                    <li className="nav-item nav-link">
                        Todos
                    </li>
                </Link> 
                {
                    user.role === "admin" ? 
                    <Link to="/admin">
                        <li className="nav-item nav-link">
                            Admin
                        </li>
                    </Link> : null
                }  
                <button type="button" 
                        className="btn btn-link nav-item nav-link" 
                        onClick={onClickLogoutHandler}>Logout</button>
            </>
        )
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <div className="navbar-brand">NoobCoder</div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;