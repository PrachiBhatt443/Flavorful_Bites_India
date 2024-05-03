import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import cookingImage from '../../img/cooking1.png';
function Navbar() {
  const [visible, makeVisible] = useState(false);
  const toggleVisibility = () => {
    makeVisible(!visible);
  };
  return (
    
      <>
        <nav>
            <div>
              <img src={cookingImage} className={styles.logo} alt="Cooking" />
            </div>
            <ul>
              <li><Link to='/' className={styles.navlink}>Homepage</Link></li>
              <li><Link to={`/recepie/-1`} className={styles.navlink}>Recipe Page</Link></li>
              <li><Link to="/blogs" className={styles.navlink}>Blogs</Link></li>
              <li><Link to="#" className={styles.navlink}>Buy</Link></li>
              
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
