import React from 'react'
import styles from "./WhiteCardC.module.css"
import Image from 'next/image'

function Form({children,style}) {
    return (
        <div style={{...style}} className={styles.container} >
            <div className={styles.header}>
                <div className={styles.icon}>
                <Image src="/images/operator.svg" alt="" layout='fill' />
                </div>
                <div className={styles.head}>Ask a different Question</div>
            </div>
            {children}
        </div>
    )

}

export default Form