import React from 'react'
import styles from './ButtonYellow.module.css'
import Image from 'next/image'

function ButtonYellow({value,backgroundColor,color,width,height,style,arrowW,arrowH,disable}) {
// console.log(disable)
  return (
 
  <button className={styles.button} disabled={disable} style={{backgroundColor:backgroundColor,color:color,width:width,height:height,...style}} type='submit' >
   
   <>{value}</>
 <div className={styles.arrow} >
   <Image src="/images/LarrowB.svg" width={arrowW?arrowW:12} height={arrowH?arrowH:22} alt="arrow" />
 </div>
 <div className={styles.arrowMob} >
   <Image src="/images/LarrowB.svg" width={9} height={12} alt="arrow" />
 </div>

</button>

  )
}

export default ButtonYellow