import React from 'react'
import styles from "./WhiteCard.module.css"
import Image from 'next/image'

function BlueBox({icon,num,title,detail,height,width}) {
  return (
    <div className={styles.blueBox_container}>
         <div className={styles.first}>
            <div className={styles.icon}>
        <Image src={icon}  alt="" width={width} height={height} />
           </div>
          <div className={styles.num}>{num}</div>
        </div>
       
        <div className={styles.title}>
            {title}
        </div>
        <div className={styles.detail}>
            {detail}
        </div>
    </div>
  )
}

export default BlueBox