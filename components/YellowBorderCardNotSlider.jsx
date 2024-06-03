import React from 'react'
import styles from "../components/Home/Services.module.css"
import Image from 'next/image'
import Link from 'next/link'

function YellowBorderCard({ src, title, backgroundClr, imgWidth, imgHeight, href }) {
  return (
    <Link href={href ? href : "/"}  prefetch={false}>
      <a>
        <div style={{ backgroundColor: backgroundClr }} className={styles.audit_box_notSlider}>
          <Image src={src} alt="" width={imgWidth ? imgWidth : "90"} height={imgHeight ? imgHeight : "90"} />
          <div className={styles.audit_title} style={{ fontSize: "20px" }}>
            {title}</div>
        </div>
      </a>
    </Link>

  )
}

export default YellowBorderCard