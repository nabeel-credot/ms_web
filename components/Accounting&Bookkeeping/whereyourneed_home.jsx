import React ,{useState} from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image"
import Appointment from "./Appointment_schedule"
import Link from 'next/link'
function Adgm_benefits() {
  const [appoint,setAppoint]=useState(false)
    const benifits=[{
        content:"Advisory",
        link:"/advisory",
    },{
        content:"Technology",
        link:"/technology",
    },
    {
        content:"Accounting",
        link:"/accounting-services",
    },
    {
        content:"ADGM",
        link:"/#abu-dhabi-global-market-uae",
    },
    {
        content:"DIFC",
        link:"/difc",
    },
]
  return (
    <div className={styles.home_needContainer}>
      <Container>
        <div className={styles.yourneed_outerdiv}>
          <div className={styles.need_left} data-aos="fade-right">
          <div className={styles.servicelogodifc}> <Image src={"/images/logo3.svg"} alt="logo" layout="fill"/> </div>
            <div className={styles.needTitle} >Where Your Needs Meet Our Expertise</div>
            <p>
            We don&apos;t believe in imposing our ideas onto clients; rather, our sole aim is to bring their visions to life. Each distinct vision and mission you bring forth fuels our passion, propelling us to deliver lasting and impactful results. Empower your financial and non-financial journey with personalised strategies tailored just for you. Together, we&apos;ll build a solid foundation for your entrepreneurial dreams and aspirations. Beyond business formation, we help businesses succeed. 
            <br/>
            <br/>
            Building a team of individuals is no small feat, but transforming that team to be a driving force for success is an even greater undertaking.</p>
           <div className={styles.settingbtnweb}> <button className={styles.settingbtnhom} onClick={()=>setAppoint(true)}><span>Meet Our Team</span></button></div>
           <button className={styles.settingbtnhommob} onClick={()=>setAppoint(true)}><span>Meet Our Team</span></button>
          </div>
          <div className={styles.need_right} data-aos="fade-left">
         {benifits.map((item,index)=>
         {
          return <Link href={item?.link} key={index}>
            <div className={styles.need_wrapper} >
           <div> <Image src="/images/logo3.svg" width={27} height={27} alt=""/> </div>
            {/* <div className={styles.tickpoints}></div> */}
            
            <p className={styles.needpoints}>{item?.content}</p> 
            
            <div> <Image src="/images/black_arrowhom.svg" width={15} height={20} alt=""/> </div></div></Link>}) }

          </div>
          {appoint && <div className={styles.appointwrapper}> <Appointment appoint={appoint} setAppoint={setAppoint}/></div>}

        </div>
        
      </Container>
    </div>
  );
}

export default Adgm_benefits;
