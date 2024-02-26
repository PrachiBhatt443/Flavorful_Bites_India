import React from 'react'
import styles from './B1.module.css'
import { Link } from 'react-router-dom'
const B1 = (props)=>{
    const{name,icons,index}=props
    return(
    <div >
      <div className={styles.box}>
      <Link to={`/recepie/${index}`}><img className={styles.IMG} src={icons}></img>  </Link>    
        <h1>
        {name}
        </h1> 
      </div>
      <div className={styles.main}>
      Stars 
      </div>
    </div>
    )
}

export default B1