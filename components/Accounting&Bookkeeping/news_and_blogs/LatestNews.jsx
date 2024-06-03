import React ,{useEffect,useState} from 'react'
import Container from '../../Common/Container'
import Image from "next/image"
import styles from "../../../components/Accounting&Bookkeeping/Styles.module.css"
import { IoIosArrowForward } from "react-icons/io";
import gqlRequest from "../../../utilities/graphql";
import dayjs from "dayjs"
import Link from 'next/link';
export default function LatestNews() {
    const newsblog=[
        {
        image:"/images/news1.jpg",
        date:"January 24, 2023  ",
        news:"UAE’s rising M&A market sparks investor interest: Explore the key steps of M&A to ensure success."
    },
    {
        image:"/images/news2.svg",
        date:"January 24, 2023  ",
        news:"UAE’s rising M&A market sparks investor interest: Explore the key steps of M&A to ensure success."
    },
    {
        image:"/images/new3.svg",
        date:"January 24, 2023  ",
        news:"UAE’s rising M&A market sparks investor interest: Explore the key steps of M&A to ensure success."
    },
    {
        image:"/images/news4.svg",
        date:"January 24, 2023  ",
        news:"UAE’s rising M&A market sparks investor interest: Explore the key steps of M&A to ensure success."
    }
]
const [SlicedData,setSlicedData]=useState([])
useEffect(() => 
{
  getTwoRecentPost()
 
}, []);
const getTwoRecentPost=async()=>{
    const response =await gqlRequest({
      "operationName": "GetPosts",
      "query": `query GetPosts($first:Int,$excludePostId:ID,$categorys:[ID]) {
          posts (first:$first,where:{notIn:[$excludePostId],categoryIn:$categorys}){
            edges {
              node {
                id
                title
                date
                slug
                content
                featuredImage{
                  node{
                    sourceUrl
                  }
                }
              }
            }
          }
        }`,
    //   "variables": {first:2,excludePostId:current_post?.id,categorys:postCategories?.current||null}
    })
    console.log("recent response in page",response)
    if(response.success===true)
    {
      // setFilteredList(response.data.posts)
      console.log("edges in posts",response.data.posts.edges)
      setSlicedData(response.data.posts.edges)
    //   recentPostsCount.current=response.data.posts.edges.length
    }
  }
 
  console.log(SlicedData);
  return (
    <Container>

        <div className={styles.latestnewstitle}>Latest News</div>
        <div className={styles.news_blogwrapper}>
           {SlicedData.slice(0,4).map((news,index)=>{
            return(
                <Link href={`/news-and-blogsnew/${news?.node?.slug}`} passHref key={index}>
                <div className={styles.news_blogSingle} key={index}>
                <div className={styles.news_blogImg}><Image src={news?.node?.featuredImage?.node?.sourceUrl} layout='fill' objectFit="cover"/></div>
               <div className={styles.newscontainer}>
<div className={styles.latestdate}><span className={styles.insightnewsdate}>{dayjs(news?.node?.date).format('MMMM DD, YYYY')}</span><span style={{fontWeight:"500",color:"black"}}>|&nbsp; MS Blogs</span> </div>
                <div className={styles.newline}>{news?.node?.title}</div>
                <div className={styles.newlinemobile}>{news?.node?.title && news?.node?.title.slice(0, 30)}</div>
                <div className={styles.latestdate}><span>Read More </span><IoIosArrowForward /></div>
               </div>
            </div>
            </Link>

            )
           }) }
        </div>
    </Container>
  )
}
