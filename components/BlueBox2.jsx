import React from 'react'
import styles from "./WhiteCard.module.css"


function BlueBox({num,detail,fontSize}) {
  return (
    <div className={styles.blueBox_container2}>
         <div className={styles.first}>
          <div className={styles.num}>{num}</div>
        </div>
       
        <div className={styles.detail} style={{fontSize:fontSize?fontSize:"24px"}}>
            {detail}
        </div>
    </div>
  )
}

export default BlueBox