import React from 'react'
import Container from '../Common/Container'
import styles from "./Styles.module.css";

export default function Benefits({headline,benifits}) {

  return (
    <div className={styles.benefitouter}>
        <Container>
<div className={styles?.benifittitle} data-aos="fade-up">{headline}</div>
<div className={styles.benifitcontainer} data-aos="fade-up">

   {benifits.map((item,index)=>{
    return( <div className={styles.singlebenifit} key={index}>
        <div className={styles.benifitnum}>{item?.num}</div>
        <div className={styles.benifitshead} >{item?.title}</div>
        <p className={styles.benifitcontent}>{item?.content}</p>
    </div>)
   })}
</div>
        </Container>
    </div>
  )
}
