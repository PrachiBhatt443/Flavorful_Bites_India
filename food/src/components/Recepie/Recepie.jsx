import React from 'react'
import s from '../Navbar/Navbar.module.css'
import VdoBlock from './VdoBlock'
import { useParams } from 'react-router-dom'
import styles from './RecepieBlock.module.css'


const Recepie = (props) =>{
  const { index } = useParams();
  console.log(props)

// const Recepie = ({index}) => {
  
  return (
    <>
      <div className={s.search}>
        <input type="text"  placeholder="  Search...for the recepie"  className={s.search_box}/>
        <button type="submit" className={s.red}>Search</button>
      </div>
        <VdoBlock  Index={index}/>
      <footer></footer>
    </>
  )
}

export default Recepie
