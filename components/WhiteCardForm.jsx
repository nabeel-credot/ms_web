import React from 'react'
import styles from "./WhiteCard.module.css"


function Form({children,style,small}) {
    return (
        <div style={{...style}} className={styles.containerForm}>
            {children}
        </div>
    )

}

export default Form