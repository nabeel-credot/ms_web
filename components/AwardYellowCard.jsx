import React from 'react'
import styles from "./WhiteCard.module.css"
import Image from 'next/image'
function AwardCard({src,title,imgWidth,imgHeight,children,style}) {
    return (
        <div className={styles.award_container_yellow} style={{...style}} >
             <Image src={src}  alt="" width={imgWidth} height={imgHeight} />
             <div className={styles.title2}>{title}</div>
             <div className={styles.detail2}>{children}</div>
        </div>
    )

}

export default AwardCard