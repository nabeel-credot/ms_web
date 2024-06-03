import React ,{ useEffect} from 'react'
import styles from "./Styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Image from 'next/image'
import Container from '../Common/Container';
function Banner({heading,detail,image,width,height}) {

  useEffect(()=>{
    AOS.init({
      duration: 1400,
      once: false,
    })},[]);
    

  return (
    <Container>
    <div className={styles.container}>
            <div className={styles.acountingBanner_left} data-aos="fade-right">
              <div className={styles.black_heading+" "+styles.padding60}>
               {heading}
              </div>

              <div className={styles.details24400+" "+styles.detailWidthCB}>
                {detail}
              </div>
              <div >

              </div>
            </div>
            <div className={styles.acountingBanner_right} data-aos="fade-left">
              <Image src={image} alt="" width={width} height={height} />
            </div>
          </div>
          </Container>
  )
}

export default Banner