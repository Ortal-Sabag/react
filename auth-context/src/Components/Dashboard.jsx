import React from 'react';
import { useAuth } from '../Contexts/AuthContext';

const Dashboard = () => {
    const {        
        authUser,
        setAuthUser, 
        isLoggedIn,
        setIsLoggedIn
    } = useAuth();

    const logIn =(e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        setAuthUser({
            Name: 'Ortal'
        })
    };

    const logOut =(e) => {
        e.preventDefault();
        setIsLoggedIn(false);
        setAuthUser({
            Name: ''
        })
    };

    return (
        <> 
            <span> User is currently : {isLoggedIn? 'Logged In': 'Logged Out'} .</span>
            <br/>
            {isLoggedIn? (
                <>
                    <span> User Name: {authUser?.Name}</span>
                    <br/>
                    <button onClick={(e) => {logOut(e)}}>Log Out</button>
                </>
            ) : (
                <button onClick={(e) => {logIn(e)}}> Log In</button> 
            )}
        </>
    )
}

export default Dashboard;