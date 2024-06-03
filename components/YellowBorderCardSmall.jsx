import React from 'react'
import styles from "../components/Home/Services.module.css"
import Image from 'next/image'
import Link from 'next/link'

function YellowBorderCard({ src, title, backgroundClr, href }) {
  return (
    <Link href={href ? href : "/"}  prefetch={false}>
      <a>
        <div className={styles.audit_box5} style={{ backgroundColor: backgroundClr }}>
          <div className={styles.webOnly}>
            <Image src={src} alt="" width={90} height={90} />
          </div>
          <div className={styles.mobOnly}>
            <Image src={src} alt="" width={50} height={50} />
          </div>


          <div className={styles.audit_titleS} style={{ marginLeft: 15 }}>{title}</div>
        </div>
      </a>
    </Link>
  )
}

export default YellowBorderCard