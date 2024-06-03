import React from 'react'
import styles from "../components/Home/Services.module.css"
import Image from 'next/image'

function YellowBorderCard({src,title,width,height,children,fontSize,imgWidth,imgHeight}) {
  return (
    <div className={styles.audit_box2_fdd} style={{width:width?width:"295px",height:height?height:"295px"}} >
    <Image src={src} alt="" width={imgWidth?imgWidth:"90"} height={imgHeight?imgHeight:"90"} />
    <div className={styles.audit_title} style={{fontSize:fontSize?fontSize:"20px"}}>{title}</div>
    {children?
    <div className={styles.YCdetail2}>
        {children}
      </div>
:""}
</div>
  )
}

export default YellowBorderCard