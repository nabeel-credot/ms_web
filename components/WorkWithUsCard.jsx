import React, { useState } from 'react'
import styles from "./WhiteCard.module.css"
import Link from 'next/link';

import dayjs from "dayjs"

import CV_upload from '../components/Popup_cv/Popup';
function WorkWithUsCard({ date, title, details, style, id,slug,index ,parentCallBack,parentCallback2}) {
   

 

    return (
        <div className={styles.work_with_us_container} style={{ ...style }} >
            <div className={styles.date} >{dayjs(date).format('MMMM DD, YYYY')}</div>
            <div className={styles.work_title} style={{ marginTop: 30 }}>{title}</div>
            <div className={styles.work_detail} 
            dangerouslySetInnerHTML={{ __html: details?.length>125?details?.substr(0,125)+"...":details }}
             style={{ marginTop: 30 }}></div>
            <div className={styles.work_btns} style={{ marginTop: 40 }}>
                <Link href={`/careers/${slug}`} passHref key={index}  prefetch={false}>
                    <button className={styles.button1}>View</button>
                </Link>
                 
                {/* <Link href={`/careers/${slug}`} passHref key={index}  prefetch={false}> */}
                    <button className={styles.button2} onClick={()=>{parentCallBack(true),parentCallback2(title)}}>Apply</button>
{/* 
                </Link> */}

            </div>
            {/* {popup && <CV_upload onClick={() => setPopup(false)} />} */}
        </div>
    )
}

export default WorkWithUsCard