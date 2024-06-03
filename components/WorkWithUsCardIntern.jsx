
import React from 'react'
import styles from "./WhiteCard.module.css"
import Link from 'next/link';
function WorkWithUsCard({ date, title, details, style, id }) {
  
    return (
        <div className={styles.work_with_us_container} style={{ ...style }} >
            <div className={styles.date} >{date}</div>
            <div className={styles.work_title} style={{ marginTop: 30 }}>{title}</div>
            <div className={styles.work_detail} style={{ marginTop: 30 }}>{details}</div>
            <div className={styles.work_btns} style={{ marginTop: 40 }}>
                <Link href={`/internship/${id}`} passHref>
                    <button className={styles.button1}>Details</button>
                </Link>
                <Link href={`/internship/${id}`} passHref>
                    <button className={styles.button2}>  Apply</button>

                </Link>

            </div>
        </div>
    )
}

export default WorkWithUsCard