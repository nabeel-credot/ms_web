import React from 'react'
import styles from "../components/Home/Services.module.css"
import Image from 'next/image'
import Link from 'next/link'

function YellowBorderCard({ src, title, backgroundClr, children ,imgWidth,imgHeight,fontSize,padding,href}) {
  return (
    <Link href={href?href:"/"}  prefetch={false}>
      <a>
  <div style={{ backgroundColor: backgroundClr }} className={styles.audit_box_services} >
      <div  className={styles.image}>
   
      <div className={styles.iconWrap2}>
      <Image src={src} alt="" layout='fill' />
      </div>
       {/* <div className={styles.mobOnly}>
       <Image src={src} alt="" width={69} height={69} />
       </div> */}
        
      </div>
      
      <div className={styles.audit_title}>{title}</div>
      <div className={styles.audit_titleH}>{title}</div>
      <div className={styles.YCdetail} >
        {children}
      </div>
    </div>
    </a>
     </Link>
  )
}

export default YellowBorderCard