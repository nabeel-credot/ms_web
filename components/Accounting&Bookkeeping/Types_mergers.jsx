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
  return (
    <div className={styles.typeOuter}>
    <Container>
        <div>
    <div className={styles.typemergetitle} data-aos="fade-up">Types of Mergers and <br/>
    Acquisitions</div>
    <div className={styles.typecontainer} data-aos="fade-up">
    <div className={styles.typewrapper}>
    <div className={styles.typehead}>
       <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>
        <p className={styles.typenumber}>01</p>
    </div>
    <div className={styles.typeheadmob} onClick={handleClick} style={!show ? { borderBottom: "none" } : { borderBottom: "1px solid white" }}>

<div className={styles.headmob}><p className={styles.pnumber}>01</p>{!show ?<p className={styles.mobiletitletype}>Vertical Integration</p>:""}</div>
{!show ?<IoMdArrowDropdown style={{fontSize:"30px"}}/>:<IoMdArrowDropup onClick={handleClick} style={{fontSize:"30px"}}/>}
</div>
<div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Vertical Merger
        </p>
      
        <p>Involves the combination of two companies operating at different stages of the production process or within the same industry&apos;s supply chain. To improve efficiency, streamline operations, and gain better control over the supply chain.
</p>
        </div>
   {show && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Vertical Merger
        </p>
      
        <p>Involves the combination of two companies operating at different stages of the production process or within the same industry&apos;s supply chain. To improve efficiency, streamline operations, and gain better control over the supply chain.
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
{!show1 ?<p className={styles.mobiletitletype}>Horizontal Integration</p>:""}</div>
{!show1 ?<IoMdArrowDropdown style={{fontSize:"30px"}}/>:<IoMdArrowDropup onClick={handleClick1} style={{fontSize:"30px"}}/>}
</div>

    <div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Horizontal Integration
        </p>
      
        <p>Involves the combination of two companies operating in the same industry and at the same stage of the production process. Aimed at achieving synergies, such as cost reduction, increased market share, and enhanced competitiveness.
</p>
        </div>
        {show1 && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Horizontal Integration
        </p>
      
        <p>Involves the combination of two companies operating in the same industry and at the same stage of the production process. Aimed at achieving synergies, such as cost reduction, increased market share, and enhanced competitiveness.</p>
        </div>}
        </div>
        <div className={styles.typewrapper}>
    <div className={styles.typehead}>
    
    <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>

        <p className={styles.typenumber}>03</p>
    </div>
    {/* mobile */}
    <div className={styles.typeheadmob} onClick={handleClick2} style={!show2 ? { borderBottom: "none" } : { borderBottom: "1px solid white" }}>

   <div className={styles.headmob}> <p className={styles.pnumber}>03</p>{!show2 ?<p className={styles.mobiletitletype}>Conglomeration</p>:""}</div>
    {!show2 ?<IoMdArrowDropdown style={{fontSize:"30px"}}/>:<IoMdArrowDropup onClick={handleClick2} style={{fontSize:"30px"}}/>}
    </div>
    {/*  */}
    <div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Conglomerate Merger
        </p>
      
        <p>Involves the combination of two companies that operate in unrelated industries. Typically pursued to diversify the business portfolio, reduce risk, and enter new markets.

</p>
        </div>
        {show2 && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Conglomerate Merger
        </p>
      
        <p>Involves the combination of two companies that operate in unrelated industries. Typically pursued to diversify the business portfolio, reduce risk, and enter new markets.

</p>
        </div>}
        </div>
        </div>
        <div className={styles.typecontainer}  data-aos="fade-up">
    <div className={styles.typewrapper}>
    <div className={styles.typehead}>
       <div className={styles.typelogo}> <Image src="/images/logo3.svg" layout='fill' alt="logo"/></div>
        <p className={styles.typenumber}>04</p>
    </div>
    <div className={styles.typeheadmob} onClick={handleClick3} style={!show3 ? { borderBottom: "none" } : { borderBottom: "1px solid white" }}>

<div className={styles.headmob}><p className={styles.pnumber}>04</p>{!show3 ?<p className={styles.mobiletitletype}>Hostile Takeover</p>:""}</div>
{!show3 ?<IoMdArrowDropdown style={{fontSize:"30px"}}/>:<IoMdArrowDropup onClick={handleClick3} style={{fontSize:"30px"}}/>}
</div>
<div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Hostile Takeover
        </p>
      
        <p>Occurs when an acquiring company pursues the target company against its wishes. Involves direct engagement with shareholders to gain control, often bypassing the target company&apos;s management.

</p>
        </div>
   {show3 && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Hostile Takeover
        </p>
      
        <p>Occurs when an acquiring company pursues the target company against its wishes. Involves direct engagement with shareholders to gain control, often bypassing the target company&apos;s management.

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
{!show4 ?<p className={styles.mobiletitletype}>Reverse Merge</p>:""}</div>
{!show4 ?<IoMdArrowDropdown style={{fontSize:"30px"}}/>:<IoMdArrowDropup onClick={handleClick4} style={{fontSize:"30px"}}/>}
</div>

    <div className={styles.webdetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Reverse Merger
        </p>
      
        <p>Involves a private company acquiring a public company to gain access to public markets without undergoing an initial public offering (IPO). The private company merges into the public company, which remains listed on the stock exchange.

</p>
        </div>
        {show4 && <div className={styles.mobiledetail}>
        <p className={styles.assisthead} style={{fontWeight:"500"}}>
        Reverse Merger
        </p>
      
        <p>Involves a private company acquiring a public company to gain access to public markets without undergoing an initial public offering (IPO). The private company merges into the public company, which remains listed on the stock exchange.
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
