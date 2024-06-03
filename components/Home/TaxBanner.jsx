import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import styles from "./Services.module.css"
import Image from 'next/image'

function TaxBanner() {
    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false
        })},[]);

    return (
        <div className={styles.tax_container}>
            <div className={styles.left} data-aos="fade-right">
                <div className={styles.leftBg}>
                    <Image src="/images/taxBg.jpg" alt="" layout='fill' style={{ borderRadius: "0px 50px" }} />
                </div>
                <div className={styles.leftImg}>
                    <Image src="/images/taxImg.png" alt=""width={199} height={150} style={{ borderRadius: "0px 50px" }} />
                </div>
                <div className={styles.leftImg2}>
                    <Image src="/images/taxImg.png" alt="" width={125} height={97} style={{ borderRadius: "0px 50px" }} />
                </div>
            </div>

            <div className={styles.right} data-aos="fade-left">
                <div className={styles.tax_heading}>
                    <h3>Your Tax Consultant in Abu Dhabi & Dubai (UAE)</h3>
                </div>
                <div className={styles.tax_content}>
                    <div>Everyone either wants to reduce the amount of tax they pay or maximize their tax refund. Everybody also wishes that someone could take care of all the paperwork. This is where our role as your tax consultant comes into picture!</div>
                    <div>Many businesses in the UAE face several challenges while trying to understand the tax structure and implementing the same in their sector. Here comes our  role if you choose MS as your tax consultant UAE who can help and support your business.</div>
                </div>

            </div>
        </div>
    )
}

export default TaxBanner