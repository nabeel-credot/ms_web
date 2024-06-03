import React from 'react'
import styles from './ButtonYellow.module.css'

function ButtonYellowSimple({value,backgroundColor,color,width,height,style}) {

  return (
 
  <button className={styles.button} style={{backgroundColor:backgroundColor,color:color,width:width,height:height,...style}} type='submit' >
   
   <>{value}</>


</button>

  )
}

export default ButtonYellowSimple