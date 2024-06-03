import React ,{useState} from 'react'
import styles from "./Styles.module.css";
import Appointment from "./Appointment_schedule"
function Alreem_yMs({title,content1,content2,background,btncolor}) {
  const [appoint,setAppoint]=useState(false)
  return (
    <div className={styles.alreem_container}style={{
      backgroundImage: background ? background : 'url(/images/alreemYms1.webp)'
    }}>
      <div className={styles.yms_popup}  data-aos="fade-up" >
      <img src="/images/logo3.svg" alt="MS LOGO" />
<p className={styles.yms_title}>Why<span style={{fontWeight:"500"}}> MS </span><br/>{title}</p>
<p>{content1}</p>

<p>{content2}</p>
<div className={styles.yms_btnwrapper}>
  <button className={styles.speakbtn} style={{ backgroundColor: btncolor }} onClick={()=>setAppoint(true)}>
    <span>Speak to Our Team</span>
    </button>
    </div>
      </div>
      {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}

    </div>
  )
}

export default Alreem_yMs