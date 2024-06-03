import React from 'react'
import cstyles from "./Styles.module.css"
import styles from "./Menu.module.css"
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/router";
import Container from '../Common/Container';
function MenuBar() {



    const router = useRouter();

    return (
        <Container>
            <div className={styles.menuBar_container2}>

             
                <Link href="/digital-transformation" prefetch={false}>
                    <div className={router.pathname == "/digital-transformation" ? styles.active : styles.menu}>
                        {router.pathname == "/digital-transformation" ? <span></span> : ""}
                        Digital Transformation
                        {router.pathname == "/digital-transformation" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>


                <Link href="/erp-advisory" prefetch={false}>
                    <div className={router.pathname == "/erp-advisory" ? styles.active : styles.menu}>

                        {router.pathname == "/erp-advisory" ? <span></span> : ""}
                        ERP Advisory
                        {router.pathname == "/erp-advisory" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>

                <Link href="/data-analysis" prefetch={false}>
                    <div className={router.pathname == "/data-analysis" ? styles.active : styles.menu}>
                        {router.pathname == "/data-analysis" ? <span></span> : ""}
                        Data Analysis
                        {router.pathname == "/data-analysis" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>

                <Link href="/blockchain" prefetch={false}>
                    <div className={router.pathname == "/blockchain" ? styles.active : styles.menu}>
                        {router.pathname == "/blockchain" ? <span></span> : ""}
                        Blockchain
                        {router.pathname == "/blockchain" ? "" : <span></span>}
                    </div>
                </Link>
            
                <Link href="/robotic-process-automation" prefetch={false}>
                    <div className={router.pathname == "/robotic-process-automation" ? styles.active : styles.menu}>
                        
                        {router.pathname == "/robotic-process-automation" ? <span></span> : ""}
                        Robotic Process Automation
                        {router.pathname == "/robotic-process-automation" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>

                <Link href="/artificial-intelligence" prefetch={false}>
                    <div className={router.pathname == "/artificial-intelligence" ? styles.active : styles.menu}>
                        {router.pathname == "/artificial-intelligence" ? <span></span> : ""}
                        Artificial Intelligence
                        {router.pathname == "/artificial-intelligence" ? "" : <span></span>}
                    </div>
                </Link>


            </div>
        </Container>
    )
}

export default MenuBar