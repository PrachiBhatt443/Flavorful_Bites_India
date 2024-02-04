import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const [visible, makeVisible] = useState(false);
  const toggleVisibility = () => {
    makeVisible(!visible);
  };
  return (
      <>
        <nav>
            <div>
              <img className={styles.logo} src='./img/cooking1.png' alt="Logo" />
            </div>
            <ul>
              <li><Link to='/'>Homepage</Link></li>
              <li><Link to={`/recepie/-1`}>Recipe Page</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="#">Buy</Link></li>
            </ul>
            <div>
              <FaSearch onClick={toggleVisibility}>S</FaSearch>
              <button className={styles.red}>Sign In</button>
            </div>
            
        </nav>
        {visible && 
          <div className={styles.search}>
            <input type="text"  placeholder="  Search...for the recepie"  className={styles.search_box}/>
            <button type="submit" className={styles.red}>Search</button>
          </div>}
      </>
  )
}

export default Navbar
