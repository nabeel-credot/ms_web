import React ,{ useState} from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Image from "next/image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import Appointment from "./Appointment_schedule";

const assistContents = [
  {
    num:"02",
    head: "Independent Courts System",
    content:
      "Benefit from a secure trading environment committed to the highest international compliance standards.",

    
    },

  {
   num:"03",
    head: "Cutting-Edge Infrastructure",
    content:
      "Enjoy the advantages of 0% personal income tax and a low corporate tax rate.",
  },
  {
   num:"04",
    head: "Global Connectivity",
    content:
      "Experience 100% capital repatriation and full business ownership rights.",
  },
  {
    num:"05",
    head: "Asset Protection",
    content:
      "Expand your network through exclusive events and workshops, connecting with over 22,000 businesses.",
  },
  {
   num:"06",
    head: "100% Foreign Ownership and Freehold Property",
    content:
      "Strategic location facilitates connectivity between Abu Dhabi and Dubai, with proximity to global markets and major transportation networks.",
  },
  {
   num:"07",
    head: "International Recognition",
    content:
      "Avail unique services such as flexible visas, medical services, serviced offices, and more.",
  },
  {
    num:"08",
     head: "Freehold Property Ownership",
     content:
       "Access a comprehensive online portal for streamlined business setup and customer service.",
   },
   {
    num:"09",
    head:"Global Talent Pool",
    content:"Utilise the best security system for a secure business environment."
   },{
    num:"10",
    head:"Innovation and Technology",
    content:"Benefit from reasonable license costs at DMCC."
   }
];
export default function Ms_assist() {
  const [appoint, setAppoint] = useState(false);
    
  return (
    <div style={{backgroundColor:"#05083B",padding:"70px 0"}}>
    <Container>
    {/* <div className={styles.assistweb}> */}
    <div className={styles.webbenifit_dmcc}>
      <div className={styles.dmcc_assist_wrapper}>
        <div style={{color:"white",paddingBottom:"40px"}}>
          <div className={styles.assistTitle}><span>Benefits of <span style={{fontWeight:"500"}}>DMCC</span></span></div>
          <p>
          DIFC, the Dubai International Financial Centre, stands as a beacon of 
excellence in the world of finance. Renowned as a world-class financial centre
          </p>
          {/* <button className={styles.settingbtndmccmob} onClick={()=>setAppoint(true)}><span>Setting up in DMCC</span></button> */}
          <button className={styles.settingbtn_dmcc}  onClick={() => setAppoint(true)}>Setting up in DMCC</button>
        </div>
        
           <div className={styles.dmcc_benifitContainer} style={{marginTop:"60px"}}>
          <p style={{fontSize:"16px"}}>
          Unmatched access to global commodities markets and diverse trading prospects in all industry sectors as a DMCC member.
          </p>
          <div className={styles.dmccnum}>
            01
          </div>
        </div>
        </div>
        </div>
        <div className={styles.mobbenifit_dmcc}>
        <div className={styles.dmcc_assist_wrapper}>
        <div style={{color:"white",paddingBottom:"40px"}}>
          <div className={styles.assistTitle}><span>Benefits of <span style={{fontWeight:"500"}}>DMCC</span></span></div>
          <p>
          DIFC, the Dubai International Financial Centre, stands as a beacon of 
excellence in the world of finance. Renowned as a world-class financial centre
          </p>
          <div className={styles.btnmob_dmcc}>
          {/* <button className={styles.settingbtndmccmob} onClick={()=>setAppoint(true)}><span>Setting up in DMCC</span></button> */}
          <button className={styles.settingbtn_dmcc}  onClick={() => setAppoint(true)}>Setting up in DMCC</button>
        </div>
        </div>
        <div className={styles.parentwrapper_dmccbenifit}>
        <div className={styles.dmcc_benifitContainer}>
          <p style={{fontSize:"16px"}}>
          Unmatched access to global commodities markets and diverse trading prospects in all industry sectors as a DMCC member.
          </p>
          <div className={styles.dmccnum}>
            01
          </div>
        </div>
        </div>
        </div>
      </div>
      <div className={styles.parentwrapper_dmccbenifit}>
       {assistContents.map((item,index)=>{
        return( 
        <div className={styles.dmcc_benifitContainer} key={index}  >
          {/* <div className={styles.purple_divnum}> */}
          
            
            {/* </div>  */}
           
            <div style={{minHeight:"200px"}}>
           
            <p className={styles.assistcontent_dmcc}>{item?.content}</p></div>
            <div className={styles.dmccnum}>
              {item?.num}
            </div>
                     </div>)
        
       })
        }
      </div>
      {/* <div className={styles.mobile_slide_banner}>
        <Image src="/images/responsive2.webp"  width={400} height={300} />
      </div> */}
      {appoint && (
        <div className={styles.appointwrapper}>
          {" "}
          <Appointment appoint={appoint} setAppoint={setAppoint} />
        </div>
      )}
    {/* </div> */}
  
    </Container>
    </div>
  );
}
