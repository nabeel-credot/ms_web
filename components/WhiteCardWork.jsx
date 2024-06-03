import React from 'react'
import styles from "./WhiteCard.module.css"


function Form({children,style}) {
    return (
        <div style={{...style}} className={styles.containerWork}>
            {children}
        </div>
    )

}

export default Form