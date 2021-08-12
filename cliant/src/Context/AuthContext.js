import React, {createContext,useState,useEffect} from 'react';
import AuthService from '../Services/AuthService';

export const AuthContext = createContext();

export default ({ children })=>{
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        console.log("hello11111");
        AuthService.isAuthenticated().then(data =>{
            console.log("hello2222");
            setUser(data.user);
            console.log("hello3333333333");
            setIsAuthenticated(data.isAuthenticated);
            console.log("hello444444444");
            setIsLoaded(true);
        });
    },[]);

    return (
        <div>
            {!isLoaded ? <h1>Loading</h1> : 
            <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}