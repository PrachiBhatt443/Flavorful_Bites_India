import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <nav>
        <div>
          <img className={styles.logo} src='./img/cooking1.png' alt="Logo" />
        </div>
        <ul>
        <li><Link to='/'>Homepage</Link></li>
          <li><Link to='/recepie/{0}'>Recipe Page</Link></li>
          {/* <li><Link to={'/recepie'}>Recipe Page</Link></li> */}
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="#">Buy</Link></li>
        </ul>
        <button className={styles.red}>Sign In</button>
      </nav>
    
  )
}

export default Navbar
