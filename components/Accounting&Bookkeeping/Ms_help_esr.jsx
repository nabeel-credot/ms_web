import React,{useState} from 'react'
import Container from '../Common/Container'
import styles from "./Styles.module.css";
import Image from "next/image"
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

export default function Types_mergers() {
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [show2,setShow2]=useState(false)
    const [show3,setShow3]=useState(false)
    const [show4,setShow4]=useState(false)
    const [show5,setShow5]=useState(false)
    const handleClick=()=>{
        setShow(!show)
    }
    const handleClick1=()=>{
        setShow1(!show1)
    }
    const handleClick2=()=>{
        setShow2(!show2)
    }
    const handleClick3=()=>{
        setShow3(!show3)
    }
    const handleClick4=()=>{
        setShow4(!show4)
    }
    const handleClick5=()=>{
        setShow5(!show5)
    }
  return (
    <div className={styles.esrhelp}>
    <Container>
        <div>
    <div className={styles.esrhelptitle} data-aos="fade-up">How MS can help?</div>
    <div className={styles.typecontainer}data-aos="fade-up">
    <div className={styles.typewrapper}>
    <div className={styles.typehead}>
       <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>
        <p className={styles.typenumber}>01</p>
    </div>
    <div className={styles.typeheadmob}onClick={handleClick} style={!show ? { borderBottom: "none" } : { borderBottom: "1px solid white" }}>

<div className={styles.headmob}><p className={styles.pnumber}>01</p>{!show ?<p className={styles.mobiletitletype}>Thorough Examination and Discrepancy Analysis</p>:""}</div>
{!show ?<IoMdArrowDropdown style={{fontSize:"30px"}} />:<IoMdArrowDropup style={{fontSize:"30px"}} onClick={handleClick}/>}
</div>
<div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Thorough Examination and Discrepancy Analysis
        </p>
      
        <p>If your business falls under the purview of the Amended Regulations, we will assess and determine whether it meets the Economic Substance Test under these regulations. Additionally, we will pinpoint any areas of non-compliance if the criteria set forth in the Amended Regulations are not satisfied.

</p>
        </div>
   {show && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Thorough Examination and Discrepancy Analysis
        </p>
      
        <p>If your business falls under the purview of the Amended Regulations, we will assess and determine whether it meets the Economic Substance Test under these regulations. Additionally, we will pinpoint any areas of non-compliance if the criteria set forth in the Amended Regulations are not satisfied.
</p>
        </div>}
        </div>
        <div className={styles.typewrapper}>
    <div className={styles.typehead}>
    <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>

        <p className={styles.typenumber}>02</p>
    </div>

    <div className={styles.typeheadmob} onClick={handleClick1} style={!show1 ? { borderBottom: "none" } : { borderBottom: "1px solid white" }}>

<div className={styles.headmob}><p className={styles.pnumber}>02</p>
{!show1 ?<p className={styles.mobiletitletype}>Corporate Measures to Fulfil the Economic Substance Test</p>:""}</div>
{!show1 ?<IoMdArrowDropdown style={{fontSize:"30px"}} />:<IoMdArrowDropup style={{fontSize:"30px"}} onClick={handleClick1}/>}
</div>

    <div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Corporate Measures to Fulfil the Economic Substance Test
        </p>
      
        <p>We will recommend and implement corrective or preventive corporate actions to ensure that your company meets the requirements stipulated by the Economic Substance Test.

</p>
        </div>
        {show1 && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Corporate Measures to Fulfil the Economic Substance Test
        </p>
      
        <p>We will recommend and implement corrective or preventive corporate actions to ensure that your company meets the requirements stipulated by the Economic Substance Test.</p>
        </div>}
        </div>
        <div className={styles.typewrapper}>
    <div className={styles.typehead}>
    
    <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>

        <p className={styles.typenumber}>03</p>
    </div>
    {/* mobile */}
    <div className={styles.typeheadmob} onClick={handleClick2} style={!show2 ? { borderBottom: "none" } : { borderBottom: "1px solid white" }}>

   <div className={styles.headmob}> <p className={styles.pnumber}>03</p>{!show2 ?<p className={styles.mobiletitletype}> Support for Regulatory Compliance</p>:""}</div>
    {!show2 ?<IoMdArrowDropdown  style={{fontSize:"30px"}}/>:<IoMdArrowDropup style={{fontSize:"30px"}} onClick={handleClick2}/>}
    </div>
    {/*  */}
    <div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Support for Regulatory Compliance
        </p>
      
        <p>We will ascertain whether your business falls within the ambit of the Amended Regulations by evaluating whether the company, as a Licensee, engages in Relevant Activity during the Reportable Period. We will then outline the compliance requirements for your company. Assistance in the Submission or Resubmission of Notification and Substance Return to the Ministry of Finance. We also provide ongoing review services to maintain the company&apos;s compliance with the Amended Regulations.


</p>
        </div>
        {show2 && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Support for Regulatory Compliance
        </p>
      
        <p>We will ascertain whether your business falls within the ambit of the Amended Regulations by evaluating whether the company, as a Licensee, engages in Relevant Activity during the Reportable Period. We will then outline the compliance requirements for your company. Assistance in the Submission or Resubmission of Notification and Substance Return to the Ministry of Finance. We also provide ongoing review services to maintain the company&apos;s compliance with the Amended Regulations.


</p>
        </div>}
        </div>
        </div>
        </div>
        {/* mobile */}
        {/* <div>
        <div className={styles.typemergetitle}>Types of Mergers and <br/>
    Acquisitions</div>
        </div> */}
    </Container>
    </div>
  )
}
