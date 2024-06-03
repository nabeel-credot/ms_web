import React from 'react'
import styles from './ButtonYellow.module.css'
import Image from 'next/image'
import Link from 'next/link'
function ButtonYellow({value,backgroundColor,color,width,height,src,href,style,arrowW,arrowH,call,big}) {

  return (
  <Link href={href?href:"/"}   prefetch={false}> 
  <a>
  <button className={styles.button} style={{backgroundColor:backgroundColor,color:color,width:width,height:height,...style}} type='submit'>
 {call? <div className={styles.call} >
   <Image src="/images/PhoneB.png" width={big?24:19} height={big?24:19} alt="phone" />
 </div>:""}
 {call? <div className={styles.callMob} >
   <Image src="/images/PhoneB.png"  width={15} height={15}  alt="phone" />
 </div>:""}
   {/* {href?<Link href={href}  prefetch={false}>{value}</Link>: */}
   <>{value}</>
    {/* } */}
 <div className={styles.arrow} >
   <Image src="/images/LarrowB.svg" width={arrowW?arrowW:13} height={arrowH?arrowH:22} alt="arrow" />
 </div>
 <div className={styles.arrowMob} >
   <Image src="/images/LarrowB.svg" width={9} height={12} alt="arrow" />
 </div>

</button>
    </a></Link>  

  )
}

export default ButtonYellow