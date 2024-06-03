import React, { useEffect } from "react";
import styles from "./Services.module.css";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../Common/SliderContainer";
function Quote({
  image,
  width,
  height,
  name,
  desig,
  heading,
  details,
  fontSize,
  secondImg,
}) {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);
  return (
    <Container>
      <div className={styles.quote_container}>
        <div className={styles.quote_left} data-aos="fade-right">
          {/* <div className={styles.animation}></div> */}
          <div className={secondImg ? styles.ceo_img2 : styles.ceo_img} >
            {/* <Image
              src={image}
              layout="fill"
              // width={width}
              // height={height}
              alt=""
              className={styles.custom_image}
            /> */}
          </div>
          <div className={styles.ceo_details}>
            <div className={styles.ceo_name}>{name}</div>
            <div className={styles.ceo_desig}>{desig ? desig : ""}</div>
          </div>
        </div>
        <div className={styles.quote_right} data-aos="fade-left">
          {heading ? (
            <div className={styles.haveAnyQue_heading}>
              <h3>{heading}</h3>
              {/* <h3 >Driven by unbreakable passion,<br />chasing a vision that makes <br />better World.</h3> */}
            </div>
          ) : (
            ""
          )}
          {details ? (
            <div
              style={{ fontSize: fontSize, marginTop: heading ? 20 : 0 }}
              className={styles.quote_details}
            >
              {details}
            </div>
          ) : (
            ""
          )}
          <div className={styles.quote_img}>
            <Image src="/images/quote.svg" width={228} height={152} alt="" />
          </div>
        </div>

        <div className={styles.quoteMob} data-aos="fade-up">
          <div className={styles.quote_imgWrap}>
            <div
              className={secondImg ? styles.ceo_img2_mob : styles.ceo_img_mob}
            >
              {secondImg ? (
                <Image src={image} width={248} height={274} alt="" />
              ) : (
                <Image src={image} 
                layout="fill" objectFit="cover"
                // width={273} height={263} 
                alt="" />
              )}
            </div>
            <div className={styles.ceo_details_mob}>
              <div className={styles.ceo_name}>{name}</div>
              <div className={styles.ceo_desig}>{desig ? desig : ""}</div>
            </div>
          </div>
          <div className={styles.quote_contentWrap}>
            {heading ? (
              <div className={styles.haveAnyQue_heading}>
                <h3>{heading}</h3>
                {/* <h3 >Driven by unbreakable passion,<br />chasing a vision that makes <br />better World.</h3> */}
              </div>
            ) : (
              ""
            )}
            {details ? (
              <div style={{ marginTop: 20 }} className={styles.quote_details}>
                {details}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.quote_img}>
            <Image src="/images/quote.svg" width={164} height={164} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Quote;
