import React  ,{useEffect}from 'react'
import styles from "./Styles.module.css"

import Section1 from './Fdd_sub1';
import Section2 from './Fdd_sub2';
import Section3 from './Fdd_sub3';
import Section4 from './FDD_sub4';
import Section5 from './FDD_sub5';
function FDD_section() {
 

  return (
    <div className={styles.fdd_container}>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
    </div>
  )
}

export default FDD_section