import React from "react";
import styles from "./Styles.module.css";
import Container from "../Common/Container";
import Link from "next/link"
import Image from "next/image";
import { MdArrowRight,MdArrowLeft } from "react-icons/md";
import { useState } from "react";
function Company_Form_Banner() {

  const adgmcard=[
    {
      image:"/images/incorp_icon.png",
      title:"Incorporation",
      desc:"Maximize the benefits of our expertise in ADGM incorporation making it a seamless process. We will handle all the administrative tasks and paperwork, ensuring a faster and hassle-free experience for you."
  },
  {
    image:"/images/adgm-hom2.svg",
    title:"Compliance",
    desc:"Our specialized team at ADGM is dedicated to guiding you through compliance requirements, ensuring your company stays in line with the law and avoids legal consequences."
},
{
  image:"/images/adgm-hom3.svg",
  title:"Corporate services",
  desc:"Ensure your company avoids critical corporate concerns by leveraging our assistance. Our expert team is dedicated to providing comprehensive support, guiding you through the regulatory landscape of the ADGM ecosystem with precision and clarity."
},
{
  image:"/images/adgm-hom6.svg",
  title:"Annual Filings",
  desc:"It's crucial to submit annual returns to the registration authority, outlining directorship, shareholders, and share capital details based on the ADGM guidelines. With MS as your service partner, we've got your annual filings covered, so you can rest assured."
},
{
  image:"/images/adgm-hom4.svg",
  title:"Company Secretarial Services",
  desc:"With our precision and experience, MS Company Secretarial Services provide essential support in ADGM’s business landscape. We will guide you through complexities, contributing to corporate excellence, making MS your ideal partner for business at ADGM. "
},
{
  image:"/images/adgm-hom5.svg",
  title:"ADGM Transition",
  desc:"Businesses in Al Reem Island aiming for a smooth transition can count on our services for expert support. MS offers seamless incorporation assistance, guiding you through the process efficiently and with ease in ADGM."
},
  ]

  const [cardIndex, setCardIndex] = useState(adgmcard ? 0 : null);

  const handleChange = (type) => {
    if (type === 1) {
      if (cardIndex >= adgmcard.length - 1) {
        setCardIndex(0);
      } else {
        setCardIndex((i) => i + 1);
      }
    } else if (type === -1) {
      if (cardIndex <= 0) {
        setCardIndex(adgmcard.length - 1);
      } else {
        setCardIndex((i) => i - 1);
      }
    }
  };

  return (
    <div className={styles.adgmbg_hom}>
        <Container>
            <div className={styles.adgmContainer}>
          <div className={styles.msdifc_hom} data-aos="fade-right">
          <div className={styles.mshom_difc_title}><span style={{fontWeight:"500"}}>MS</span> at <span style={{fontWeight:"500"}}>ADGM</span></div>
      <p className={styles.company_form_para}>
      MS can be your Setup-Specialist when you want to setup a new company in the Abu Dhabi Global Market (ADGM), UAE. With tailored focus on providing advisory and incorporation assistance for companies from all over the world, to set and expand one&apos;s roots in ADGM, we provide multifaceted services from incorporation assistance to helping the companies stay compliant when it comes to the ADGM annual filings, AML rules and reportings . Having a great team and solid expertise, we can ensure a fast, streamlined and hassle-free process in bringing your companies to the ADGM.
      </p>
      {/* <div>
      <Link href="/incorporation-advisory-and-assistance">
  <button className={styles.company_form_button_difc}>
    <span>Discover More</span>
  </button>
</Link>      </div> */}
</div>
<div className={styles.adgmcard_homright} data-aos="fade-left">
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
            <Image  src={adgmcard[cardIndex].image} alt="logo" width={50} height={50}/></div>
            <p style={{fontWeight:"500"}}>{adgmcard[cardIndex].title}</p>
            <span className={styles.servicedescribe}>
           {adgmcard[cardIndex].desc}
            </span>
            </div>
            </div>
</div>
      </Container>
    </div>
  );
}

export default Company_Form_Banner;
