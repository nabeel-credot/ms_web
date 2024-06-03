import React ,{ useState} from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Image from "next/image";
import Appointment from "./Appointment_schedule"
function ADGM_WHYMS({ buttonColor, buttonBackgroundColor ,title,content1,content2}) {

  const buttonStyles = {
    color: buttonColor,
    backgroundColor: buttonBackgroundColor,
  };

  const [appoint,setAppoint]=useState(false)
  return (
    <div style={{backgroundColor:"#D5AF32"}}>
    <Container>
      <div className={styles.adgmouterDiv}>
        <div className={styles.adgm_Yms_Left}>
          <img src="/images/logo3.svg" />
          <div className={styles.ymsTitle}>
            {title}
          </div>
        </div>
        <div className={styles.adgm_Yms_Right}>
          <p>
          {content1}
          </p>{" "}
          <p>
         {content2}
          </p>
          <button onClick={()=>setAppoint(true)}  style={buttonStyles}><span>Speak to Our Team</span></button>
        </div>
        {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}

      </div>
    </Container>
    </div>
  );
}

export default ADGM_WHYMS;
