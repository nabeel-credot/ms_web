import React from 'react'
import styles from "../components/Home/Services.module.css"
import Image from 'next/image'

function YellowBorderCard({ src, title, width, height, children, fontSize, imgWidth, imgHeight }) {
  return (
    <div className={styles.audit_box2}  >
       <div className={styles.big}>
      <Image src={src} alt="" width={90} height={90} />
      </div>
      <div className={styles.small}>
      <Image src={src} alt="" width={56} height={56} />
      </div>

      <div className={styles.audit_title} >{title}</div>
      {children ?
        <div className={styles.YCdetail2}>
          {children}
        </div>
        : ""}
    </div>
  )
}

export default YellowBorderCard