import React ,{ useEffect} from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Work.module.css"
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
            <div className={styles.work_title} style={{marginBottom:20}}>Internship</div>
        {/* <div className={styles.work_title} style={{marginBottom:20}}>{current_post[0]?.title}</div>
        */}
        <div className={styles.note2+" "+styles.widthC2}>Please note that applicants must be on dependent visa (father/spouse). Applications are accepted only via mail. Strictly no phone calls.</div>
        <div className={styles.work_detail2+" "+styles.widthC2} style={{marginBottom:20,marginTop:20}}>
          {current_post[0]?.details2}
          </div>
            </div>
              <div className={cstyles.acountingBanner_right+" "+cstyles.webOnly}  data-aos="fade-left">       
              <Image src="/images/internBg.png" alt="" width={680} height={508} />
            </div>
            <div className={cstyles.acountingBanner_right+" "+cstyles.mobOnly}  data-aos="fade-left">       
            <Image src="/images/internBg.png" alt="" width={238} height={176} />
            </div>
          </div>
          </Container>
  )
}

export default Banner