import React ,{useState} from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image"
import Appointment from "./Appointment_schedule"
function Adgm_benefits() {
  const [appoint,setAppoint]=useState(false)
    const benifits=[{
        content:"100% Repatriation of profit"
    },
    {
        content:"Easy Recruitment & competitive workforce"
    },
    {
        content:"Exemption from Import & Exports"
    },
    {
        content:"Steady & Transparent Laws & Regulations"
    },
    {
        content:"0% corporate tax for qualified income"
    },
    {
        content:"Fully Functional Infrastructure"
    }
]
  return (
    <div style={{padding:"50px 0"}}>
      <Container>
        <div className={styles.dmcc_outerdiv}>
          <div className={styles.benifitsdmcc_left}>
            <h3 className={styles.freezoneTitle}>Setting up <br/>A Business in Free Zone</h3>
            <p style={{maxWidth:"500px"}}>Establishing a business in a Free Zone has transformed the landscape of global economic markets, providing entrepreneurs worldwide with significant advantages and diverse business opportunities. Operating within a free zone allows businesses to enjoy exclusive benefits, including:
            </p>
           <div className={styles.settingbtnweb}> <button className={styles.settingbtn_dmcc} onClick={()=>setAppoint(true)}><span>Setting up in DMCC</span></button></div>
            
          </div>
          <div className={styles.benifitsnewdmcc_right}>
         {benifits.map((item,index)=>{return <div className={styles.freezone_wrapper} key={index}>
           <div className={styles.benifit_imagediv}> <Image src="/images/dmcc_tick.svg" width={27} height={27}/> </div>
            {/* <div className={styles.tickpoints}></div> */}
            <p className={styles.Bpoints}>{item?.content}</p> </div>}) }
            <button className={styles.settingbtndmccmob} onClick={()=>setAppoint(true)}><span>Setting up in DMCC</span></button>

          </div>
          {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}

        </div>
        
      </Container>
    </div>
  );
}

export default Adgm_benefits;
