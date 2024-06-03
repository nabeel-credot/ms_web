import React, { useEffect } from 'react'
import styles from "./Styles.module.css"
import cstyles from "./Accounting2.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Form from './ReqForm';

import Container from '../Common/Container';
import {  useRouter } from 'next/router';


function Accounting_Banner2({current_post}) {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);
const router=useRouter()
console.log("routerQry",router?.query,current_post,current_post?.title)
    return (
        <Container>
        <div className={styles.acountingBanner_container}>
            <div className={styles.FAS_Banner_left} data-aos="fade-right">
                <div className={styles.black36_heading}>
                Job vacancy 
                </div>

               
                <div  style={{marginTop:"20px"}} className={styles.details18Open}>
                A job with MS can truly get you moving with clients all over the world, a globally linked team, and offices in some of the most fascinating locations.
                </div>

                <div  dangerouslySetInnerHTML={{ __html:current_post?.content }} style={{lineHeight:"170%"}}>

                </div>
                {/* <div className={cstyles.imgWrapperWork}>
                <Image src="/images/work.jpeg" alt="work" layout='fill' className={cstyles.borderR} objectFit="cover" />
                </div> */}
               
            </div>
            <div className={cstyles.acountingBanner2Book_right} data-aos="fade-left">
            <Form id={current_post?.title}/>
            </div>
           
        </div>
        </Container>
    )
}

export default Accounting_Banner2