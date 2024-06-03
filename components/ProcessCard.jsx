import React from 'react'
import styles from "./ProcessCard.module.css"
import Image from 'next/image'
function ProcessCard({ num, info }) {
    return (
        <div className={styles.box}>
              <div className={styles.top}>
                            <div className={styles.logo}>
                                <Image src="/images/MSLogo.svg" alt="" width={66} height={65} />
                            </div>
                            <div className={styles.num}>{num}</div>
                        </div>
            <div className={styles.info}>
                {info}
            </div>
        </div>
    )
}

export default ProcessCard