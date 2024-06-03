import React from 'react'
import styles from "../components/Home/Services.module.css"
import Image from 'next/image'
import Link from 'next/link'

function YellowBorderCard({src,title,backgroundClr,imgWidth,imgHeight,href,...style}) {
  return (
    <Link href={href?href:"/"}  prefetch={false}>
      <a>
     <div style={{...style}} className={styles.audit_box}>
      <div className={styles.iconWrap}>
      <Image src={src} alt="" layout="fill"  />
      </div>

      {/* <div className={styles.mobOnly}>
      <Image src={src} alt="" width={56} height={56} />
      </div> */}
    
    <div className={styles.audit_title}>
      {title}</div>
</div>
</a>
</Link>
   
  )
}

export default YellowBorderCard