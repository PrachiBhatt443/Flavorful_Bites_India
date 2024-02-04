import React from 'react'
import VdoBlock from './VdoBlock'
import { useParams } from 'react-router-dom'


const Recepie = (props) =>{
  const {id} = useParams();
  
  return (
    <>
      { id!=-1 && <VdoBlock  Index={parseInt(id)}/>}
      <footer></footer>
    </>
  )
}

export default Recepie
