import React from 'react'
import { Navbar } from "./Navbar";
import { Login } from '../LoginPage/Login';
import styles from "./Home.module.css"
import { Signup } from '../LoginPage/Signup';
import Calculator from '../Calculator/Calculator';
import WeatherApp from '../Weather/WeatherApp';


const Home=()=>{
    return(
        <>
        
           <div className={`${styles.container}`}>
           <span>
            <h1 className={`${styles.h1}`}>Welcome to TaskBoard</h1>
           </span>
           </div>
        </>
        
        
    )
}

export default Home