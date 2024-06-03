import React from 'react'
import styles from "./WhiteCard.module.css"


function BlueBox({title,num,detail,style}) {
  return (
    <div className={styles.blueBoxAudt} style={{...style}}>
      <div className={styles.title_audit}>{title}</div>
         <div className={styles.first}>
          <div className={styles.num}>{num}</div>
        </div>
       
        <div className={styles.detail_audit}>
            {detail}
        </div>
    </div>
  )
}

export default BlueBox