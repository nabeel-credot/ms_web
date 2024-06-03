import React from 'react'
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image"

function Payroll_processing() {
    const dubaicontent = [
        {
          icon: "/images/payroll_process1.svg",
          content:"Cost savings",
        },
        {
        icon: "/images/payroll_process2.svg",
        content:"Enhanced data security",
          },
          {
            icon: "/images/payroll_process3.svg",
            content:"Elimination of technology concerns",
              },
    {
        icon: "/images/payroll_process4.svg",
        content:"Prevention of fraudulent activities",
    },
    {
        icon: "/images/payroll_process5.svg",
        content:"Access to expert services",
          },
          {
        icon: "/images/payroll_process6.svg",
        content:"Regular updates",
          },
    {
     icon: "/images/payroll_process7.svg",
        content:"Focused attention on core business matters",
          },
    {
     icon: "/images/payroll_process8.svg",
        content:"Effective compliance management",
          },
    {
     icon: "/images/payroll_process9.svg",
        content:"Maintaining confidentiality",
          },
      ];
  return (
    <div className={styles.typeOuter}>
    <Container>
    <div className={styles.payroll_proc_wrapper}>
        <div className={styles.ms_assisttitlewrapper}  data-aos="fade-up">
    <div className={styles.assistTitle_corp}>
    Outsource Your Payroll <br/>Processing in Dubai, UAE
    </div>
    <p>Outsourcing payroll processing brings significant benefits to businesses, whether large MNCs or SMEs. Key advantages include</p>
    </div>
    </div>
    <div className={styles.payroll_processingwrapper} data-aos="fade-up">
    {dubaicontent.map((item,index) =>{
        return(
    <div className={styles.payroll_processContainer} key={index}>
    <Image src={item.icon} width={30} height={30}/>
    <p>{item.content}</p>

</div>)
})
}
</div>
    
    </Container>
    </div>
  )
}

export default Payroll_processing
