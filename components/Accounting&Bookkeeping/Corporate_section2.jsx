import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import Image from 'next/image'

import Container from '../Common/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Corporate_section2() {
    
  useEffect(() => {
    AOS.init({
        duration: 1400,
        once: false,
    })
}, []);

    return (
        <Container>
        <div className={styles.corporate2_container} data-aos="fade-up"> 
            <div className={styles.black36_heading + " " + styles.spclWidth2} style={{marginBottom:20}}>
                Further information on UAE CT regime will be issued towards the middle of the year.
            </div>
            <div className={styles.details18Open+" "+styles.spclPadding2}>
                The CT will be applied to everyone (individuals and legal persons) carrying out business activities in the UAE, under a commercial license, including entities operating in the banking sector. Except for the following:
            </div>
            <div className={styles.corporate2_sub}>
                <ul>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={15} height={25}/></div>
                        <span className={styles.key + " " + styles.details20Open400 + " " + styles.keyWidth}>Entities engaging in the extraction of natural resources.</span>
                    </li>
                    <li>
                        <div className={styles.wArrow}> <Image src="/images/LarrowB.svg" alt="" width={15} height={25} className={styles.wArrow} /></div>
                        <div className={styles.yArrow}> <Image src="/images/LarrowY.svg" alt="" width={15} height={25}/></div>
                        <span className={styles.key + " " + styles.details20Open400 + " " + styles.keyWidth}>Free zone entities, which will continue to benefit from tax incentives offered to them at the time, as long as all regulatory requirements are complied with. However, the FTA will be releasing more information about the inquiry of registration and filing a CT return.</span>
                    </li>
                </ul>
            </div>
        </div>
        </Container>
    )
}

export default Corporate_section2