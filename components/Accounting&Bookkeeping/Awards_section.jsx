import React from 'react'
import styles from "./Awards.module.css"

// import Section from './Awards_sub'
import Section2 from './Awards_sub2'
import Container from '../Common/Container';
function Awards_section() {
    return (
        <Container>
        <div className={styles.award_container_main}>
         {/* <Section/> */}
         <Section2/>
        </div>
        </Container>
    )
}

export default Awards_section