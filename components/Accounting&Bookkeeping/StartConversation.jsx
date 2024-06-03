import React,{useEffect} from 'react'
import styles from "./Styles.module.css"
import Button from '../ButtonYellow'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Container from '../Common/Container';

function StartConversation() {

    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false,
        })},[]);

    return (
        <Container>
        <div className={styles.StartConversation_container} data-aos="fade-up">
            <div className={styles.bookbanner_details + " " + styles.StartConversationDetailWidth}>
                Growing businesses often start with smaller needs but rapidly grow to require a full suite of bookkeeping services.
                We know you’ve got a business to run and targets to achieve, so our approach to sorting out your company accounts is refreshingly no-nonsense. Share your visons and mission with us and let’s together work on that!
            </div>
            <div className={styles.webOnly2} style={{marginTop:"60px"}}>
                <Button value="Start the Conversation" backgroundColor="#D5AF32" color="#192B3A" width="416px"
                    height="97px" src="/images/LarrowB.svg" href="/contact" />
            </div>
            <div  className={styles.mobOnly2} style={{marginTop:"60px"}}>
                <Button value="Start the Conversation" backgroundColor="#D5AF32" color="#192B3A" width="281px"
                    height="50px" src="/images/LarrowB.svg" href="/contact" />
            </div>

        </div>
        </Container>
    )
}

export default StartConversation