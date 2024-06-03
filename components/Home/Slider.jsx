import React,{useEffect,useState} from 'react'
import styles from "./Slider.module.css"
import Image from 'next/image'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Container from '../Common/SliderContainer';
import gqlRequest from '../../utilities/graphql';
import Link from 'next/link';
function MsSlider() {

  const slider = React.useRef(null);
  const [sliderContent,setSliderContent]=useState(null)
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerPadding: '250px',
    centerMode: true,
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
     <Container>
      <div className={styles.container}>


        {sliderContent&&sliderContent.length>0?<button className={styles.slide_arrow2} onClick={() => slider?.current?.slickPrev()}>
          <Image src="/images/sArrow.svg" alt="arrowLeft" width={50} height={44} />
        </button>:null}
        {sliderContent&&sliderContent.length>0?<button className={styles.slide_arrow} onClick={() => slider?.current?.slickNext()}>
          <Image src="/images/sArrow1.svg" alt="arrowRight" width={50} height={44} />
        </button>:null}

        <Slider ref={slider}  {...settings} >
          {sliderContent&&sliderContent.length>0?sliderContent.map((item,index)=>{
            console.log("item?.node?.featuredImage?.node?.sourceUrl",item?.node?.featuredImage?.node?.sourceUrl)
            return (
              <div key={`key-${index}-${Date.now()}`} >
                <Link href={`/news-and-blogs/${item?.node?.slug}`} passHref key={index}>
                <div className={styles.item1} style={item?.node?.featuredImage?.node?.sourceUrl?{backgroundImage:`url('${item.node.featuredImage.node.sourceUrl}')`}:null}>
                  {item?.node?.title?<div className={styles.overlay}>
                    <div className={styles.detail}>{item?.node?.title}</div>
                  </div>:null}
                </div>
                </Link>
                
              </div>
             
            )
          }):null}
          {/* <div className={styles.item1}>
            <div className={styles.overlay}>
            <div className={styles.detail}>CA Mohammed Shafeek joins the Abu Dhabi SME Hub ‘Access to Experts’ Mentorship Panel </div>

            </div>
          </div>
          <div className={styles.item2}>
            <div className={styles.overlay}>
              <div className={styles.detail}>CA Mohammed Shafeek joins the Abu Dhabi SME Hub ‘Access to Experts’ Mentorship Panel </div>
            </div>

          </div>
          <div className={styles.item3}>
            <div className={styles.overlay}>
            <div className={styles.detail}>CA Mohammed Shafeek joins the Abu Dhabi SME Hub ‘Access to Experts’ Mentorship Panel </div>

            </div>
          </div> */}
        </Slider>

      </div>
     </Container> 
  )
}

export default MsSlider