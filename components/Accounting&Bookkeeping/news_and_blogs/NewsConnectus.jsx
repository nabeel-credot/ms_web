import React from 'react'
import styles from "../../../components/Accounting&Bookkeeping/Styles.module.css"
import Container from '../../Common/Container'
export default function NewsConnectus() {
  return (
    
    <div className={styles.newsconnectwrapper}>
    <Container>
        <div className={styles.newsinnerContainer}>
<div className={styles.newsleft}>
    <div className={styles.subscribehead}>Be Part Of Our Community </div>
    <p className={styles.newsSubcribe}>Subscribe for updates from MS—latest insight delivered to your inbox as you like.</p>
   <div className={styles.newinputwrapper}> <input type="email" placeholder="Enter your Email" className={styles.newsemailinput}/>
   <button className={styles.newsbutton}>Subscribe</button></div>
</div>
<div className={styles.newsright}>
    <div className={styles.subscribehead}>Let’s Connect</div>
    <p className={styles.newsSubcribe}>Reach out to us for all your queries. Assuring you a best solution from the most energetic team at MS.</p>
    <button className={styles.newscontactbutton}>Contact Us</button>
</div></div>
    </Container>
    </div> 
  )
}
