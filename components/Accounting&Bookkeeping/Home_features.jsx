import React, { useEffect,useState } from 'react';
import styles from "./Styles.module.css";
import Container from '../Common/Container';
import Slider from 'react-slick';
import Image from "next/image"
import { MdArrowLeft,MdArrowRight } from 'react-icons/md';
import gqlRequest from '../../utilities/graphql';



function ExeBenefits() {
    const slider = React.useRef(null);
const [sliderContent,setSliderContent]=useState([])

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    // centerPadding: '50px',
    // centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '50px',

        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '50px',

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '50px',

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px"

        }
      }
    ]
  }
     
    useEffect(()=>{
        const getFeaturedPost=async()=>{
          const response= await gqlRequest({
            "operationName": "getFeaturedPosts",
            "query": ` query getFeaturedPosts{
              posts(first:10,where:{categoryName:"featured"}){
                edges{
                  node{
                    title
                    slug
                    featuredImage{
                      node{
                        sourceUrl
                        altText
                      }
                    }
                  }
                }
              }
            }`,
          })
          console.log("response of featured posts",response)
          if(response?.success===true)
          {
            setSliderContent(response?.data?.posts?.edges)
          }
        }
        getFeaturedPost()
      },[])

    return (
        <div className={styles.feature_div}>
            <Container>
            <div className={styles.feature_cards}>
            <div className={styles.test_circle_left_feature} onClick={() => slider?.current?.slickPrev()}>
                        <MdArrowLeft style={{ fontSize: '40px' }} />
                    </div>
                    <div className={styles.test_circle_right_feature} onClick={() => slider?.current?.slickNext()}>
                        <MdArrowRight style={{ fontSize: '40px' }} />
                    </div>
                    <Slider ref={slider} {...settings}>
                    {sliderContent.map((item, index) => (
                            <div className={styles.featureimg} key={index}>
                            <Image src={item?.node?.featuredImage?.node?.sourceUrl} alt={item.image} layout='fill'/>
                                <div className={styles.feature_overlay}>
                                        <p>{item?.node?.title}</p> 
                               
                                <div className={styles.feat_arrow}>
<svg width="32" height="30" viewBox="0 0 32 30" fill="black" xmlns="http://www.w3.org/2000/svg">
<path d="M18.702 22.1198L17.3327 20.8259L22.6824 15.65H5.96472V13.8014H22.6824L17.3009 8.59475L18.6701 7.30078L26.3443 14.7257L18.702 22.1198Z" fill="black"/>
</svg>
                                </div>
                                </div>
                            </div>
                       
                    ))}
                </Slider>
                </div>
            </Container>
        </div>
    );
}

export default ExeBenefits;
