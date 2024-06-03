import React from 'react'
import styles from "./WhiteCard.module.css"
import Image from 'next/image'

import Link from 'next/link'
function AwardCard({ src, title, detail, width, height }) {
    let result = ""

    result = detail.slice(0, 95) + "...";

    return (
        <Link href="/our-awards" prefetch={false}>
            <a>
            <div className={styles.award_container}  >
                <Image src={src} alt="" width={width} height={height} />
                <div className={styles.title}>{title}</div>
                <div className={styles.detail}>{result}</div>
            </div>
            </a>
           
        </Link>
    )

}

export default AwardCard