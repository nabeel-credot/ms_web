import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Link from "next/link"
import Image from "next/image";
import { MdArrowRight,MdArrowLeft } from "react-icons/md";
import { useState } from "react";
function Company_Form_Banner() {

  const difccard=[
    {
      image:"/images/difchom1.png",
      title:"Company Formation",
      desc:"DIFC offers a secure and efficient platform for businesses to access emerging markets. With vast expertise, MS is your reliable partner in DIFC company formation, delivering services tailored to your needs."
  },
  {
    image:"/images/difchom2.png",
    title:"Tech Innovation License",
    desc:"DIFC encourages tech startups to acquire the Tech Innovation License, fostering innovation within its acclaimed financial hub. With our dynamic team, acquire your Tech Innovation License through a simplified and smooth process."
},
{
  image:"/images/adgm-hom3.svg",
  title:"Compliance",
  desc:"We guarantee regulatory compliance for your company at DIFC, keeping you legally sound and stress-free. Feeling overwhelmed by the compliance process? Team MS will handle it for you."
},
{
  image:"/images/difchom4.png",
  title:"Annual Auditing",
  desc:"Businesses within DIFC must maintain accurate accounting records and undergo financial audits. Let us guide you through DIFC audit requirements. As a trusted Tax and Advisory firm in Dubai, we provide top-notch audit assistance services to meet your specific needs."
},
  ]
  
  const [cardIndex, setCardIndex] = useState(difccard ? 0 : null);

  const handleChange = (type) => {
    if (type === 1) {
      if (cardIndex >= difccard.length - 1) {
        setCardIndex(0);
      } else {
        setCardIndex((i) => i + 1);
      }
    } else if (type === -1) {
      if (cardIndex <= 0) {
        setCardIndex(difccard.length - 1);
      } else {
        setCardIndex((i) => i - 1);
      }
    }
  };
  return (
    <div className={styles.difcbg_hom}>
        <Container>
          <div className={styles.web_dmcc}>
            <div className={styles.adgmContainer}>
              <div style={{paddingLeft:"30px"}}>
<div className={styles.difccard_hom} data-aos="fade-right">
{cardIndex !== null ? (
<div 
  onClick={() => handleChange(-1)} className={styles.test_circle_left}>
                  <MdArrowLeft style={{ fontSize: '30px' }} />
                </div>):null}
                <div 
                 onClick={() => handleChange(1)}
                 className={styles.test_circle_right}>
                  <MdArrowRight style={{ fontSize: '30px' }} />
                </div>
            <div className={styles.dmcc_serviceimg}> 
            <Image src={difccard[cardIndex].image} alt="logo" width={50} height={50}/></div>
            <p style={{fontWeight:"500"}}>{difccard[cardIndex].title}</p>
            <span className={styles.servicedescribe}>
            {difccard[cardIndex].desc}
            </span>
            </div>
            </div>
            <div className={styles.msdifc_hom} data-aos="fade-left">
      <div className={styles.mshom_difc_title}><span style={{fontWeight:"500"}}>MS</span> at <span style={{fontWeight:"500"}}>DIFC</span></div>
      <p className={styles.company_form_para}>
      MS is your right partner specialised in set-up and compliance assistance at Dubai International Financial Centre (DIFC). We understand the vibrant landscape of the DIFC, and we&apos;re here to guide you through every step of your business journey. From facilitating seamless company formation to ensuring the smooth operation of businesses, we empower our clients within the dynamic DIFC ecosystem. Clients can rely on us for a comprehensive range of services, from incorporation assistance to ensuring compliance with DIFC annual filings, AML, and MLRO regulations. With our team of dynamic experts, we deliver services that are fast, hassle-free, and seamlessly streamlined.
      </p>
</div>
</div>
</div>


<div className={styles.mob_dmcc}>
<div className={styles.adgmContainer}>
          <div className={styles.msdifc_hom}>
          <div className={styles.mshom_difc_title}><span style={{fontWeight:"500"}}>MS</span> at <span style={{fontWeight:"500"}}>DIFC</span></div>
      <p className={styles.company_form_para}>
      MS is your right partner specialised in set-up and compliance assistance at Dubai International Financial Centre (DIFC). We understand the vibrant landscape of the DIFC, and we&apos;re here to guide you through every step of your business journey. From facilitating seamless company formation to ensuring the smooth operation of businesses, we empower our clients within the dynamic DIFC ecosystem. Clients can rely on us for a comprehensive range of services, from incorporation assistance to ensuring compliance with DIFC annual filings, AML, and MLRO regulations. With our team of dynamic experts, we deliver services that are fast, hassle-free, and seamlessly streamlined.
      </p>
      {/* <div>
      <Link href="/incorporation-advisory-and-assistance">
  <button className={styles.}>
    <span>Discover More</span>
  </button>
</Link>      </div> */}
</div>
<div className={styles.adgmcard_homright}>
<div className={styles.adgmcard_hom}>
{cardIndex !== null ? (
<div 
  onClick={() => handleChange(-1)} className={styles.test_circle_left}>
                  <MdArrowLeft style={{ fontSize: '30px' }} />
                </div>):null}
                <div 
                 onClick={() => handleChange(1)}
                 className={styles.test_circle_right}>
                  <MdArrowRight style={{ fontSize: '30px' }} />
                </div>
            <div className={styles.dmcc_serviceimg}> 
            <Image src={difccard[cardIndex].image} alt="logo" width={50} height={50}/></div>
            <p style={{fontWeight:"500"}}>{difccard[cardIndex].title}</p>
            <span className={styles.servicedescribe}>
           {difccard[cardIndex].desc}
            </span>
            </div>
            </div>
</div>
</div>
      </Container>
    </div>
  );
}

export default Company_Form_Banner;
