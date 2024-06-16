import React from 'react'
import VdoBlock from './VdoBlock'
import { useParams } from 'react-router-dom'
import B1 from './B1'
import styles from './B1.module.css'

const Recepie = (props) =>{
  const {id} = useParams();
  
  return (
    <>
      { id!=-1 && <VdoBlock  Index={parseInt(id)}/>}
      <div className={styles.nav}>
        <B1 name='Poori' icons={require('../Navbar/images/Card/img1.jpg')} index={0}/>
        <B1 name='Pav Bhaji'  icons={require('../Navbar/images/Card/img2.jpg')} index={1}/>
        <B1 name='Cheese Cake' icons={require('../Navbar/images/Card/img3.jpg')} index={2}/>
        <B1 name='Burger' icons={require('../Navbar/images/Card/img4.jpg')} index={3}/>
        <B1 name='Cappuccino' icons={require('../Navbar/images/Card/img1.jpg')} index={0}/>
        <B1 name='Pav Bhaji'  icons={require('../Navbar/images/Card/img2.jpg')} index={1}/>
        <B1 name='Cheese Cake' icons={require('../Navbar/images/Card/img3.jpg')} index={2}/>
        <B1 name='Burger' icons={require('../Navbar/images/Card/img4.jpg')} index={3}/>
      </div>
      <footer></footer>
    </>
  )
}

export default Recepie
