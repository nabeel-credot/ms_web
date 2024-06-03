import React from 'react'
import styles from "../components/Home/Services.module.css"
import Image from 'next/image'

function YellowBorderCard({src,title,children}) {
  return (
    <div className={styles.audit_box2_smartup}  >
      <div className={styles.webOnly}>
      <Image src={src} alt="" width={"128"} height={"128"} />
      </div>
      <div className={styles.mobOnly}>
      <Image src={src} alt="" width={"78"} height={"78"} />
      </div>
   
    <div className={styles.audit_title}>{title}</div>
    {children?
    <div className={styles.YCdetail2}>
        {children}
      </div>
:""}
</div>
  )
}

export default YellowBorderCard