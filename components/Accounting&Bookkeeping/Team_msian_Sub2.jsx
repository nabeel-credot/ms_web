import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Styles.module.css"
import Image from 'next/image'
import Link from 'next/link';
import Container from '../Common/Container';
function Team_msian_Sub2() {

    useEffect(() => {
        AOS.init({
          duration: 1400,
          once: false,
        })
      }, []);
    

    return (
        <Container style={{ padding: 0 }}>
            <div className={styles.Team_msian_Sub2} >


                <div className={styles.Team_msian_Sub2Box + " " + styles.webOnly} data-aos="fade-right" >
                    <div className={styles.Team_msian_Sub2Box_img1 + " " + styles.Team_msian_Sub2Box_1 }>
                        <div className={styles.webOnly}>
                            <Image src="/images/SHAFEEK.png" width={285} height={332}  objectFit='cover' alt="" />
                        </div>
                 
                        <div className={styles.polygon + " " + styles.webOnly}>
                            <Image src="/images/Polygon1.png" width={59} height={48} alt="" />
                        </div>
                     
                    </div>
                    <div className={styles.Team_msian_Sub2Box_BlueC + " " + styles.Team_msian_Sub2Box_2 + " " + styles.margin1} >
                        <div className={styles.enterpriceBanner_Title}>MOHAMMED SHAFEEK ACA,CIFE</div>
                        <div className={styles.details24400W}>Founder & CEO</div>
                        <div className={styles.linkedinWrap2 + " " + styles.webOnly}>
                            <Link href="https://www.linkedin.com/in/mohammed-shafeek-aca-cife-1b5603bb"  prefetch={false}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src="/images/linkedin.svg" alt="" width={40} height={40} />
                                </a>
                            </Link>
                        </div>
                       
                    </div>
                </div>


                <div className={styles.Team_msian_Sub2Box + " " + styles.mobOnly}  data-aos="fade-right">
                    <div className={styles.Team_msian_Sub2Box_img + " " + styles.Team_msian_Sub2Box_1}>
                    <Image src="/images/SHAFEEK.png" width={182} height={191} alt="" objectFit='cover' />
                        <div className={styles.polygon}>
                            <Image src="/images/Polygon1.png" width={29} height={23} alt="" />
                        </div>
                    </div>
                    <div className={styles.Team_msian_Sub2Box_BlueC + " " + styles.Team_msian_Sub2Box_2 + " " + styles.margin1} >
                    <div className={styles.enterpriceBanner_Title}>MOHAMMED SHAFEEK ACA,CIFE</div>
                        <div className={styles.details24400W}>Founder & CEO</div>
                        <div className={styles.linkedinWrap2}>
                        <Link href="https://www.linkedin.com/in/mohammed-shafeek-aca-cife-1b5603bb"  prefetch={false}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src="/images/linkedin.svg" alt="" width={24} height={24} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.Team_msian_Sub2Box + " " + styles.mobOnly} style={{ margin: "20px 0" }}  data-aos="fade-left">

                    <div className={styles.Team_msian_Sub2Box_BlueC + " " + styles.Team_msian_Sub2Box_1} >
                        <div className={styles.enterpriceBanner_Title}>Naser rashid<br /> Ali Obaid Alhaleefi <br />Alzaabi</div>
                        <div className={styles.details24400W}>Partner</div>
                    </div>
                    <div className={styles.Team_msian_Sub2Box_img + " " + styles.Team_msian_Sub2Box_2 + " " + styles.margin4} >
                        <Image src="/images/partner.png" width={195} height={192} alt="" />
                        <div className={styles.polygon3}>
                            <Image src="/images/Polygon2.png" width={29} height={23} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.Team_msian_Sub2Box + " " + styles.webOnly}  data-aos="fade-left">
                    <div className={styles.Team_msian_Sub2Box_img2 + " " + styles.Team_msian_Sub2Box_1 + " " + styles.margin2}>
                       
                        <Image src="/images/partner.png" width={319} height={307}  objectFit='cover' alt="" />
                        <div className={styles.polygon}>
                            <Image src="/images/Polygon1.png" width={59} height={48} alt="" />
                        </div>
                    </div>
                    <div className={styles.Team_msian_Sub2Box_BlueC + " " + styles.Team_msian_Sub2Box_2 + " " + styles.margin3}>
                        <div className={styles.enterpriceBanner_Title}>Naser rashid<br /> Ali Obaid Alhaleefi <br />Alzaabi</div>
                        <div className={styles.details24400W}>Partner</div>
                        {/* <div className={styles.linkedinWrap2}>
                        <Image src="/images/linkedin.svg" alt="" width={40} height={40} />
                    </div> */}
                    </div>
                </div>

                <div className={styles.Team_msian_Sub2Box + " " + styles.webOnly} data-aos="fade-right">

                    <div className={styles.Team_msian_Sub2Box_BlueC + " " + styles.Team_msian_Sub2Box_1} >
                        <div className={styles.enterpriceBanner_Title}>Munawar Salih</div>
                        <div className={styles.details24400W}>Chief Growth Officer</div>
                        <div className={styles.linkedinWrap2}>
                            <Link href="https://www.linkedin.com/in/munawarsalih/"  prefetch={false}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src="/images/linkedin.svg" alt="" width={40} height={40} />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.Team_msian_Sub2Box_img + " " + styles.Team_msian_Sub2Box_2 + " " + styles.margin4} >
                        <Image src="/images/seniorM.png" width={262} height={282} alt=""  objectFit='cover'/>
                        <div className={styles.polygon2}>
                            <Image src="/images/Polygon2.png" width={59} height={48} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.Team_msian_Sub2Box + " " + styles.mobOnly} style={{ margin: "0px 0 20px" }} data-aos="fade-right">
                    <div className={styles.Team_msian_Sub2Box_img + " " + styles.Team_msian_Sub2Box_1}>
                        <Image src="/images/seniorM.png" width="180" height="200" alt="" />
                        <div className={styles.polygon}>
                            <Image src="/images/Polygon1.png" width={29} height={23} alt="" />
                        </div>
                    </div>
                    <div className={styles.Team_msian_Sub2Box_BlueC + " " + styles.Team_msian_Sub2Box_2 + " " + styles.margin1} >
                        <div className={styles.enterpriceBanner_Title}>Munawar Salih</div>
                        <div className={styles.details24400W}>Chief Growth Officer</div>
                        <div className={styles.linkedinWrap2}>
                            <Link href="https://www.linkedin.com/in/munawarsalih/"  prefetch={false}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src="/images/linkedin.svg" alt="" width={24} height={24} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.Team_msian_Sub2Box} data-aos="fade-left">
                    <div className={styles.Team_msian_Sub2Box_BlueC + " " + styles.Team_msian_Sub2Box_1 + " " + styles.margin5}>
                        <div className={styles.enterpriceBanner_Title}>Akhil Vijayan</div>
                        <div className={styles.details24400W}>Senior Manager</div>
                        <div className={styles.linkedinWrap2 + " " + styles.webOnly}>
                            <Link href="https://www.linkedin.com/in/akhilvijayan/"  prefetch={false}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src="/images/linkedin.svg" alt="" width={40} height={40} />
                                </a>
                            </Link>

                        </div>
                        <div className={styles.linkedinWrap2 + " " + styles.mobOnly}>
                            <Link href="https://www.linkedin.com/in/akhilvijayan/"  prefetch={false}>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src="/images/linkedin.svg" alt="" width={24} height={24} />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.Team_msian_Sub2Box_img + " " + styles.Team_msian_Sub2Box_2 + " " + styles.margin6} >
                        <div className={styles.webOnly}>
                            <Image src="/images/akhilN.png" width={293} height={307} alt="" objectFit='cover'/>
                        </div>
                        <div className={styles.mobOnly}>
                            <Image src="/images/akhilN.png" width={180} height={200} alt="" />
                        </div>
                        <div className={styles.polygon3 + " " + styles.webOnly}>
                            <Image src="/images/Polygon2.png" width={59} height={48} alt="" />
                        </div>
                        <div className={styles.polygon3 + " " + styles.mobOnly}>
                            <Image src="/images/Polygon2.png" width={29} height={22} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    )
}

export default Team_msian_Sub2