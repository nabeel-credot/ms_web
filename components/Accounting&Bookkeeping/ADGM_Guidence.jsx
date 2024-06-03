import React ,{useState} from 'react'
import Container from '../Common/Container'
import styles from "./Styles.module.css";
import Appointment from "./Appointment_schedule"
function ADGM_Guidence() {
  const [appoint,setAppoint]=useState(false)
  return (
    <>
    <div className={styles.guidenceWeb}>
    <Container>
<div className={styles.adgm_guidence} data-aos="fade-up" >
        
        <div className={styles.adgm_guidenceleft}>
            <p className={styles.guidepara1}>Reach out to us for all your inquiries in and around ADGM. Rest assured, our dynamic team at MS provides you with the best solutions, including assistance with ADGM incorporation and compliance in the UAE. </p>
<div className={styles.guidetitle}>Get the Right Guidance.</div>
<button onClick={()=>{console.log("click"); setAppoint(true)}}><span>Speak to Our Team</span></button>
</div>
<div className={styles.adgm_guidenceright} >

<img src="/images/serviceguide1.webp"/>
</div>
</div>
    </Container></div>

    <div className={styles.guidenceMob}>
    <div className={styles.adgm_guidence} >
        
        <div className={styles.adgm_guidenceleft} data-aos="fade-up">
            <p>Reach out to us for all your inquiries in and around ADGM. Rest assured, our dynamic team at MS provides you with the best solutions, including assistance with ADGM incorporation and compliance in the UAE. </p>
<div className={styles.guidetitle}>Get the Right Guidance.</div>
<button  onClick={()=>setAppoint(true)}>Speak to Our Team</button>
</div>
<div className={styles.adgm_guidenceright} >

<img src="/images/serviceguide.jpg"/>
</div>
<div className={styles.adgm_guidencerightmobile} >

<img src="/images/serviceguidemobile.png"/>
</div>
</div>

    </div>
{appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}
    </>
  )
}

export default ADGM_Guidence