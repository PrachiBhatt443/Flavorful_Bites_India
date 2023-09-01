import React from 'react'
import styles from './Navbar.module.css'
import Button from '../Button/Button'
function Navbar() {
  return (    
    <nav>
        <div >
            <img className={styles.logo} src='./img/cooking1.png'/>
        </div>
      <ul>
        <li href="#">Homepage</li>
        <li href="#">Receipe Page</li>
        <li href="#">Blogs</li>
        <li href="#">Buy</li>
      </ul>
      <button className={styles.red}>
        Sign In
      </button>
    </nav>
  )
}
export default Navbar
