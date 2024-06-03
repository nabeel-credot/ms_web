import React ,{ useEffect} from 'react'
import styles from "./Work.module.css"
import cstyles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Image from 'next/image'


import Container from '../Common/Container';
function Banner({current_post}) {

  useEffect(()=>{
    AOS.init({
      duration: 1400,
      once: false,
    })},[]);
    

  return (
    <Container>
  <div className={styles.jobBannerContainer}>
            <div className={cstyles.acountingBanner_left} data-aos="fade-right" >
            <div className={styles.job}  style={{marginBottom:20}}>Job Title</div>
        <div className={styles.work_title} style={{marginBottom:20}}>{current_post[0]?.title}</div>
        <div className={styles.work_detail+" "+styles.widthC} style={{marginBottom:20}}>
          {current_post[0]?.details}
          </div>
        <div className={styles.note+" "+styles.widthC}>Please note that applicants must be on dependent visa (father/spouse). Applications are accepted only via mail. Strictly no phone calls.</div>
             
            </div>
            <div className={cstyles.acountingBanner_right+" "+cstyles.webOnly}  data-aos="fade-left">       
                 <Image src="/images/jobBg.png" alt="" width={428} height={514} />
            </div>
            <div className={cstyles.acountingBanner_right+" "+cstyles.mobOnly}  data-aos="fade-left">       
                 <Image src="/images/jobBg.png" alt="" width={143} height={172} />
            </div>
          </div>
          </Container>
  )
}

export default Banner