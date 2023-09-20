import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css"
export const Navbar = () => {
  return (
    
    <nav className={`${styles.navigation} container`}>
      <div>
      <Link to="/"><img src="/Images/images.png" alt="photo" className={`${styles.logo}`} /></Link>
         
      </div>
      <div>
         <ul>
            <Link to="/Login"> 
              <li className={`${styles.text}`}>
                Login
              </li>
            </Link>
            <Link to="/Signup">
            <li className={`${styles.text}`}>Signup</li>
            </Link>
            <Link to="/Weather">
              <li className={`${styles.text}`}>Weather</li>
            </Link>
            <Link to="/Calculator">
              <li className={`${styles.text}`}>Calculator</li>
            </Link>
            
         </ul>
      </div>


    </nav>
    
  )
}
