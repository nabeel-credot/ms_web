import React from 'react'
import styles from "./YellowBorderCard.module.css"
import Image from 'next/image'

function YellowBorderCard({ src, title}) {
  return (
    <div className={styles.audit_box2} >
      <div className={styles.iconWrap}>
        <Image src={src} alt="" layout="fill" />
      </div>
    

      <div className={styles.audit_title}>{title}</div>
      {/* {children?
    <div className={styles.YCdetail2}>
        {children}
      </div>
:""} */}
    </div>
  )
}

export default YellowBorderCard