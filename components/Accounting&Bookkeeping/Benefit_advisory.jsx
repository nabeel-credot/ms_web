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
    <div className={styles.typeOuter}>
    <Container>
        <div>
    <div className={styles.typemergetitle} data-aos="fade-up">Benefits of availing <br/> Advisory services from us</div>
    <div className={styles.typecontainer}data-aos="fade-up">
    <div className={styles.typewrapper}>
    <div className={styles.typehead}>
       <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>
        <p className={styles.typenumber}>01</p>
    </div>
    <div className={styles.typeheadmob}onClick={handleClick} style={!show ? { borderBottom: "none" } : { borderBottom: "1px solid white" }}>

<div className={styles.headmob}><p className={styles.pnumber}>01</p>{!show ?<p className={styles.mobiletitletype}> Deal Structuring and Negotiation</p>:""}</div>
{!show ?<IoMdArrowDropdown style={{fontSize:"30px"}} />:<IoMdArrowDropup style={{fontSize:"30px"}} onClick={handleClick}/>}
</div>
<div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Deal Structuring and Negotiation
        </p>
      
        <p>Our advisory services assist in structuring deals to ensure they align with your strategic objectives. We also play a crucial role in negotiations, aiming to secure favorable terms and conditions for their clients.

</p>
        </div>
   {show && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Deal Structuring and Negotiation
        </p>
      
        <p>Our advisory services assist in structuring deals to ensure they align with your strategic objectives. We also play a crucial role in negotiations, aiming to secure favorable terms and conditions for their clients.
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
{!show1 ?<p className={styles.mobiletitletype}>Valuation Expertise</p>:""}</div>
{!show1 ?<IoMdArrowDropdown style={{fontSize:"30px"}} />:<IoMdArrowDropup style={{fontSize:"30px"}} onClick={handleClick1}/>}
</div>

    <div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Valuation Expertise
        </p>
      
        <p>We can help in determining the fair value of the target company or assets. Accurate valuation is essential for making informed decisions and ensuring that the deal is financially sound.

</p>
        </div>
        {show1 && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Valuation Expertise
        </p>
      
        <p>We can help in determining the fair value of the target company or assets. Accurate valuation is essential for making informed decisions and ensuring that the deal is financially sound.</p>
        </div>}
        </div>
        <div className={styles.typewrapper}>
    <div className={styles.typehead}>
    
    <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>

        <p className={styles.typenumber}>03</p>
    </div>
    {/* mobile */}
    <div className={styles.typeheadmob} onClick={handleClick2} style={!show2 ? { borderBottom: "none" } : { borderBottom: "1px solid white" }}>

   <div className={styles.headmob}> <p className={styles.pnumber}>03</p>{!show2 ?<p className={styles.mobiletitletype}> Market Insights</p>:""}</div>
    {!show2 ?<IoMdArrowDropdown  style={{fontSize:"30px"}}/>:<IoMdArrowDropup style={{fontSize:"30px"}} onClick={handleClick2}/>}
    </div>
    {/*  */}
    <div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Market Insights
        </p>
      
        <p>By providing valuable insights into market trends, competitive landscapes, and potential opportunities or threats we help you make well-informed decisions and assess the viability of a merger or acquisition.


</p>
        </div>
        {show2 && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Market Insights
        </p>
      
        <p>By providing valuable insights into market trends, competitive landscapes, and potential opportunities or threats we help you make well-informed decisions and assess the viability of a merger or acquisition.


</p>
        </div>}
        </div>
        </div>
        <div className={styles.typecontainer} data-aos="fade-up">
    <div className={styles.typewrapper}>
    <div className={styles.typehead}>
       <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>
        <p className={styles.typenumber}>04</p>
    </div>
    <div className={styles.typeheadmob} onClick={handleClick3} style={!show3 ? { borderBottom: "none" } : { borderBottom: "1px solid white" }}>

<div className={styles.headmob}><p className={styles.pnumber}>04</p>{!show3 ?<p className={styles.mobiletitletype}>Due Diligence Support</p>:""}</div>
{!show3 ?<IoMdArrowDropdown  style={{fontSize:"30px"}} />:<IoMdArrowDropup style={{fontSize:"30px"}} onClick={handleClick3}/>}
</div>
<div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Due Diligence Support
        </p>
      
        <p>Thorough due diligence helps to assess the financial, legal, operational, and other aspects of the target company. This process helps to identify any potential risks or issues that could impact the success of the transaction.


</p>
        </div>
   {show3 && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Due Diligence Support
        </p>
      
        <p>Thorough due diligence helps to assess the financial, legal, operational, and other aspects of the target company. This process helps to identify any potential risks or issues that could impact the success of the transaction.


</p>
        </div>}
        </div>
        <div className={styles.typewrapper}>
    <div className={styles.typehead}>
    <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>

        <p className={styles.typenumber}>05</p>
    </div>

    <div className={styles.typeheadmob} onClick={handleClick4} style={!show4 ? { borderBottom: "none" } : { borderBottom: "1px solid white" }}>

<div className={styles.headmob}><p className={styles.pnumber}>05</p>
{!show4 ?<p className={styles.mobiletitletype}>Regulatory Compliance</p>:""}</div>
{!show4 ?<IoMdArrowDropdown style={{fontSize:"30px"}} />:<IoMdArrowDropup style={{fontSize:"30px"}} onClick={handleClick4}/>}
</div>

    <div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Regulatory Compliance
        </p>
      
        <p> M&A transactions are subject to various regulations and legal requirements. We help you navigate the complex regulatory landscape, ensuring compliance and minimizing legal risks associated with the deal.


</p>
        </div>
        {show4 && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Regulatory Compliance
        </p>
      
        <p> M&A transactions are subject to various regulations and legal requirements. We help you navigate the complex regulatory landscape, ensuring compliance and minimizing legal risks associated with the deal.

</p>
        </div>}
        </div>
        <div className={styles.typewrapper}>
    <div className={styles.typehead}>
       <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>
        <p className={styles.typenumber}>06</p>
    </div>
    <div className={styles.typeheadmob} onClick={handleClick5} style={!show5 ? { borderBottom: "none" } : { borderBottom: "1px solid white" }}>

<div className={styles.headmob}><p className={styles.pnumber}>06</p>{!show5 ?<p className={styles.mobiletitletype}>Customized Solutions</p>:""}</div>
{!show5 ?<IoMdArrowDropdown style={{fontSize:"30px"}} />:<IoMdArrowDropup style={{fontSize:"30px"}} onClick={handleClick5}/>}
</div>
<div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Customized Solutions
        </p>
      
        <p> M&A advisory services are tailored to the specific needs of the client. We work closely with clients to understand their strategic goals and develop a customized approach to achieve a successful merger or acquisition.



</p>
        </div>
   {show5 && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Customized Solutions
        </p>
      
        <p> M&A advisory services are tailored to the specific needs of the client. We work closely with clients to understand their strategic goals and develop a customized approach to achieve a successful merger or acquisition.



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
