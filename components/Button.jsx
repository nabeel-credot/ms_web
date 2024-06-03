import React from 'react'
import styles from './Button.module.css'
import Image from 'next/image'

import Link from 'next/link'
function Button({ value, backgroundColor, color, width, height, src, href, style, arrowW, arrowH, call }) {
  return (
    <Link href={href ? href : "/"} prefetch={false}>
      <a>
        <button className={styles.button} style={{ backgroundColor: backgroundColor, color: color, width: width, height: height, ...style }} type='submit'>
          {call ? <div className={styles.call}  style={{marginRight:5}}>
            <Image src="/images/PhoneB.png" layout='fill' alt="phone" />
          </div> : ""}

          <>{value}</>
          <div className={styles.arrow} >
            <Image src="/images/LarrowY.svg" width={arrowW ? arrowW : 15} height={arrowH ? arrowH : 25} alt="arrow" />
          </div>
          <div className={styles.arrowMob} >
            <Image src="/images/LarrowY.svg" width={9} height={12} alt="arrow" />
          </div>

        </button>
      </a>
    </Link>
  )
}

export default Button