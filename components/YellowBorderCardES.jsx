import React from 'react'
import styles from "../components/Home/Services.module.css"
import Image from 'next/image'
import Link from 'next/link'

function YellowBorderCard({src,title,backgroundClr,imgWidth,imgHeight,href,...style}) {
  return (
    <Link href={href?href:"/"}  prefetch={false}>
      <a>
     <div style={{...style}} className={styles.audit_box_ES}>
      <Image src={src} alt="" width={imgWidth?imgWidth:"90"} height={imgHeight?imgHeight:"90"} />
    <div className={styles.audit_title}>
      {title}</div>
</div>
</a>
</Link>
   
  )
}

export default YellowBorderCard