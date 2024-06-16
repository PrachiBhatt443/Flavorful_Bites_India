import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FaSearch , FaBars} from "react-icons/fa";
import cookingImage from '../../img/cooking1.png';
function Navbar() {
  const [visible, makeVisible] = useState(false);
  const toggleVisibility = () => {
    makeVisible(!visible);
  };
  const [visible1, makeVisible1] = useState(false);
  const toggleVisibility1 = () => {
    makeVisible1(!visible1);
  };
  return (
      <>
        <nav>
            <div>
              <img src={cookingImage} className={styles.logo} alt="Cooking" />
            </div>
            {/* <ul> */}
            <FaBars onClick={toggleVisibility} size={20} className={`${styles.hamburger} ${visible && styles.hide} ${{ 'display':'flex','gap':10}}`} />
            <ul className={visible ? styles.navLinksMobile : styles.navLinks}>
              <li><Link to='/' className={styles.navlink}>Homepage</Link></li>
              <li><Link to={`/recipe/-1`} className={styles.navlink}>Recipe Page</Link></li>
              <li><Link to="/blogs" className={styles.navlink}>Blogs</Link></li>
              <li><Link to="#" className={styles.navlink}>Buy</Link></li>
              <button className={`${styles.hamburger} ${visible && styles.red1}`}>Sign In</button>
          </ul>
          <div style={{ 'display':'flex','gap':10}}>
              <FaSearch onClick={toggleVisibility1} size={20} style={{'padding':5}}>S</FaSearch>
              <button className={styles.red}>Sign In</button>
            </div> 
        </nav>
        {visible1 && 
          <div className={styles.search}>
            <input type="text"  placeholder="  Search...for the recepie"  className={styles.search_box}/>
            <button type="submit" className={styles.red1}>Search</button>
          </div>}
      </>
  )
}

export default Navbar
