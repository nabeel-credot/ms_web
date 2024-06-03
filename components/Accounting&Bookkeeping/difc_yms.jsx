import React ,{useState} from 'react'
import styles from "./Styles.module.css";
import Appointment from "./Appointment_schedule"
function Alreem_yMs({title,content1,content2,background}) {
  const [appoint,setAppoint]=useState(false)
  return (
    <div className={styles.alreem_container} style={{
      backgroundImage: background ? background : 'url(/images/alreemYms.jpg)'
    }}>
      <div className={styles.yms_popup}>
      <img src="/images/logo3.svg" alt="MS LOGO" />
<p className={styles.yms_title}><span style={{fontWeight:"500"}}>Why MS? </span><br/>{title}</p>
<p>{content1}</p>

<p>{content2}</p>
<div className={styles.yms_btnwrapper}>
  <button className={styles.speakbtn_difc} onClick={()=>setAppoint(true)}>
    <span>Speak to Our Team</span>
    </button>
    </div>
      </div>
      {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}

    </div>
  )
}

export default Alreem_yMs