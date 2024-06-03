import React from 'react'
import styles from "./WhiteCard.module.css"

function BluePointBox({children,style}) {
  return (
    <div className={styles.bluePointContainer} style={{...style}}>
        {children}
    </div>
  )
}

export default BluePointBox