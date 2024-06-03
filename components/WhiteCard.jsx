import React from 'react'
import styles from "./WhiteCard.module.css"


function Form({children,style,small,auto}) {
    return (
        <div style={{...style}} className={small?styles.containerSmall:auto?styles.containerAuto:styles.container} >
            {children}
        </div>
    )

}

export default Form