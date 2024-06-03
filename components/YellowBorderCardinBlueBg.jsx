import React from 'react'
import styles from "../components/Home/Services.module.css"
import Image from 'next/image'

function YellowBorderCard({src,src2,title,backgroundClr,imgWidth,imgHeight}) {
  return (
    <div style={{backgroundColor:backgroundClr}} className={styles.audit_box_BlueBg}>
   
      <div className={styles.IconYC+" "+styles.webOnly}>
      <Image src={src} alt="" width={imgWidth?imgWidth:"90"} height={imgHeight?imgHeight:"90"} />
      </div>
    
      <div className={styles.IconYC+" "+styles.mobOnly}>
      <Image src={src} alt="" width={imgWidth?imgWidth:"56"} height={imgHeight?imgHeight:"56"} />
      </div>
   
      <div className={styles.webOnlyhoverIconYC } >
      <Image src={src2} alt="" width={imgWidth?imgWidth:"90"} height={imgHeight?imgHeight:"90"} />
      </div> 
      <div className={styles.mobOnlyhoverIconYC } >
      <Image src={src2} alt="" width="56" height="56" />
      </div> 
  
      {/* <div className={styles.hoverIconYC+" "+styles.webOnly} >
      <Image src={src2} alt="" width={imgWidth?imgWidth:"90"} height={imgHeight?imgHeight:"90"} />
      </div> */}
      {/* <div className={styles.hoverIconYC+" "+styles.mobOnly} >
      <Image src={src2} alt="" width="56" height="56" />
      </div> */}


    <div className={styles.audit_title_blueBg} >{title}</div>
</div>
  )
}

export default YellowBorderCard