import React from 'react'
import Container from '../Common/Container'
import styles from "./Styles.module.css"
import Image from "next/image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const adv=[{
    image:"/images/home_adv.png",
    commonimg:"/images/pointer_service.png",
    content1:"Valuation",
    content2:"Transaction Advisory",
    content3:"Buy side Advisory",
    content4:"Sell side Advisory",
    content5:"Mergers & Acquisition",
    content:"Advisory",
    icon:"/images/White_arrow.svg",
    desc:"Success hinges on receiving timely counsel from the right experts. With our best advisory services and diverse expertise across industries in the UAE and the wider GCC region, we empower you to meet and exceed your business objectives."
},
{
    image:"/images/home_complaince.png",
    content:"Compliance",
    content1:"Outsourced Finance Officer",
    content2:"Outsourced Compliance Officer",
    content3:"Outsourced MLRO",
    content4:"Compliance Filings",
    icon:"/images/White_arrow.svg",
    desc:"In today's rapidly evolving regulatory landscape, staying compliant is paramount for business success. Our team of experts ensures that your business stays ahead of the curve, providing comprehensive support with annual filings, due diligence, and more, so you can focus on driving growth with confidence."
},
{
    image:"/images/home_tax.png",
    content:"Tax & Accounting",
    content1:"Corporate Taxes",
    content2:"Payroll Service",
    content3:"VAT Services",
    content4:"Accounting & Bookkeeping Services",
    content5:"Transfer Pricing",
    content6:"ESR",
    icon:"/images/White_arrow.svg",
    desc:"Having a trusted partner to navigate the evolving tax landscape and provide professional accounting services is essential. We'll simplify the complexities of taxes, minimise liabilities, and support entrepreneurs like you, understanding the challenges you face. The premise is simple, you run your business, and we’ll handle safeguard your books and tax filings."
},{
    image:"/images/home_adgm.png",
    content:"Abu Dhabi Global Market (ADGM)",
    content1:"Corporate",
    content2:"Compliance",
    content3:"Accounting",
    content4:"Tax",
    icon:"/images/White_arrow.svg",
    desc:"ADGM, the premier international financial centre in the MENA region, empowers businesses to flourish. From inception to expansion, we excel in guiding your journey, making it smooth and effortless.Count on us to actualise your aspirations, as we help you mark your presence at ADGM"
},{
    image:"/images/home_difc.png",
    content:"Dubai International Financial Centre (DIFC)",
    content1:"Corporate",
    content2:"Compliance",
    content3:"Accounting",
    content4:"Tax",
    icon:"/images/White_arrow.svg",
    desc:"As one of the world's top 10 onshore financial centres, the DIFC boasts unparalleled growth. As you envision establishing your presence within this prestigious ecosystem, we are here to facilitate your seamless journey."
},{
    image:"/images/home_exe.png",
    content:"Executive Search ",
    content1:"Corporate",
    content2:"Accounting",
    content3:"Tax",
    icon:"/images/White_arrow.svg",
    desc:"A true leader knows, goes, and shows the way. In today’s corporate landscape, a genuine leadership is often lacking. With our industry expertise, we help you make impactful talent choices today, ensuring a better tomorrow."
}
]

export default function DIFC_Advantage() {
  return (


    <Container> 
<div className={styles.servicenewTitle} data-aos="fade-up">  <div className={styles.servicelogodifc}> <Image src={"/images/logo3.svg"} alt="logo" layout="fill"/> </div><span style={{paddingTop:"40px",fontWeight:"500"}}>Services</span></div>
        <div className={styles.advContainer}>
           { adv.map((item,index)=>{
            return(

                 <div className={styles.home_servicediv} key={index} data-aos="fade-up">

                    <Image src={item?.image} alt={item?.content} layout="fill" />
                    <div className={styles.home_serviceContainer}>
                    <p className={styles.home_servicetitle}>{item?.content}</p>
                    <p className={styles.home_servicedesc}>{item?.desc}</p>
                    {Array.from({ length: 6 }, (_, i) => {
                                    const contentKey = `content${i + 1}`;
                                    const content = item[contentKey];
                                    if (content) {
                                        return (
                                            <p key={i} className={styles.home_servicepara}><Image src={item?.icon} width={10} height={10} alt=''></Image>{content}</p>
                                            );
                                        }
                                        return null;
                                    })}
                    </div>
                       
                </div>
                
                )
           }
           )
          }
        </div>
    
    </Container>
  )
}
