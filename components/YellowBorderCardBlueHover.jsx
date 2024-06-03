import React from 'react'
import styles from "../components/Home/Services.module.css"
import Image from 'next/image'
import Link from 'next/link'

function YellowBorderCard({ src, title, backgroundClr, children ,imgWidth,imgHeight,fontSize,href}) {
  return (
    <Link href={href?href:"/"}  prefetch={false}>
      <a>
    <div style={{ backgroundColor: backgroundClr }} className={styles.audit_box3} >
      <div  className={styles.image} >
      <Image src={src} alt="" width={imgWidth?imgWidth:"90"} height={imgHeight?imgHeight:"90"} />
      </div>
      
      <div className={styles.audit_title}>{title}</div>
      {/* <div className={styles.audit_titleH}>{title}</div>
      <div className={styles.YCdetail}>
        {children}
      </div> */}
    </div>
    </a>
    </Link>
  )
}

export default YellowBorderCard