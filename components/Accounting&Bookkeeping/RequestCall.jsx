import React from 'react'
import styles from "./RequestCall.module.css"
import Button from '../ButtonYellow'
function RequestCall({subHeading,style,big}) {
  return (
    <div className={big?styles.bigContainer:styles.container} style={{...style}}>
        <div className={styles.heading}>Request for a Call</div>
        <div className={styles.subHeading}>
        {subHeading}
        </div>
        <div className={styles.webOnly}>
        <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="301px"
                        height="77px" src="/images/LarrowB.svg" href="tel:+97123093344"  call={true}/>
        </div>
        <div className={styles.mobOnly}>
        <Button value="Let’s Talk" backgroundColor="#D5AF32" color="#192B3A" width="200px"
                        height="60px" src="/images/LarrowB.svg" href="tel:+97123093344"  call={true}/>
        </div>
        
    </div>
  )
}

export default RequestCall