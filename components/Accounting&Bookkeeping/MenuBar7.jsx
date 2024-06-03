import React from 'react'
import styles from "./Menu.module.css"
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/router";
import Container from '../Common/Container';
function MenuBar() {



    const router = useRouter();

    return (
        <Container>
            <div className={styles.menuBar_container}>

                   <Link href="/cfo-services" prefetch={false}>
                    <div className={router.pathname == "/cfo-services" ? styles.active : styles.menu}>
                        {router.pathname == "/cfo-services" ? <span></span> : ""}
                        CFO Services
                        {router.pathname == "/cfo-services" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>

                <Link href="/feasibility-study-and-business-plan" prefetch={false}>
                    <div className={router.pathname == "/feasibility-study-and-business-plan" ? styles.active : styles.menu}>
                  
                    {router.pathname == "/feasibility-study-and-business-plan" ? <span></span> : ""}
                    Feasibility Study &<br/> Business Plan
                        {router.pathname == "/feasibility-study-and-business-plan" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>

                <Link href="/financial-forecasting" prefetch={false}>
                    <div className={router.pathname == "/financial-forecasting" ? styles.active : styles.menu}>
                 
                    {router.pathname == "/financial-forecasting" ? <span></span> : ""}
                    Financial Forecasting
                        {router.pathname == "/financial-forecasting" ? "" : <span></span>}
                    </div>
                </Link>
                <div className={styles.webOnly}>
                    <Image src="/images/menuLine.png" alt="" width="2" height="50" />
                </div>
                <Link href="/financial-modelling" prefetch={false}>
                    <div className={router.pathname == "/financial-modelling" ? styles.active : styles.menu}>
                    {router.pathname == "/financial-modelling" ? <span></span> : ""}
                    Financial Modelling
                        {router.pathname == "/financial-modelling" ? "" : <span></span>}
                    </div>
                   
                </Link>

             
            </div>
        </Container>
    )
}

export default MenuBar