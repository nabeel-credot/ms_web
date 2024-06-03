import React, { useEffect, useState, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./videoGallery.module.css";

import { data } from '../../data/video_data'
// import { category_data } from '../../data/blogs_data'
import { years } from '../../data/blogs_data'
import Image from 'next/image'
import Link from 'next/link';

import Button from "../ButtonYellowForm"
import ButtonYellowSimple from '../ButtonYellowSimple';
import Container from '../Common/Container';
import gqlRequest from '../../utilities/graphql'
import dayjs from "dayjs"
import readTime from "../../utilities/readTime"
import { useRouter } from 'next/router';

import ReactPlayer from 'react-player/lazy';
import Modal from 'react-modal';


const customModalStyles = {
  overlay: {
    backgroundColor: 'rgb(0 0 0  / 10%)',
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: '50%',
    /* position the top  edge of the element at the middle of the parent */
    left: '50%',
    /* position the left edge of the element at the middle of the parent */

    transform: 'translate(-50%, -50%)',


    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
    // Change the color here
  },
  content: {
    backgroundColor: 'transparent',
    width: "100%",
  
    border: 'none',
    overflow: 'none',
    padding: 0,
    inset: 0,
    insetBottom: '30px'
  }

};

function News_and_Blogs_section(props) {
  console.log("props.smartupPosts in Smartup_Blogs_section",props.smartupPosts)
  console.log("props.smartupCategories in Smartup_Blogs_section",props.smartupCategories)
    
  
  const [initialPosts,setInitialPosts] = useState([])
   // Fetch data from external API

  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("")
  const openModal = (vidoe) => {
    setModalOpen(true);
    setCurrentVideo(vidoe)
  };

  const [isCompleted, setIsCompleted] = useState(false)
  const pageInfo=useRef(null)

  useEffect(()=>{
    if(props.smartupPosts){
        const filteredPosts = props?.smartupPosts?.filter(post =>  post?.node?.videocategories?.edges?.[0]?.node?.name === props?.service);
        setInitialPosts(filteredPosts)
        if(filteredPosts?.length===0){
          setInitialPosts(props?.smartupPosts)
        }
        pageInfo.current=props.smartupPosts?.pageInfo
        console.log("pageinfo as res",props.smartupPosts?.pageInfo)
        if(props.smartupPosts?.pageInfo?.hasNextPage===true)
        {
            setIsCompleted(false)
        }
        if(props.smartupPosts?.pageInfo?.hasNextPage===false)
        {
            setIsCompleted(true)
        }
      }
    
  },[props.smartupPosts])


  const fetchPosts=async(variables)=>{
    const response=await gqlRequest({
      "operationName": "getVideos",
      "query": `query getVideos($first:Int,$after:String){
        videos(first:$first,after:$after) {
          edges {
            node {
              title
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
              videocategories {
                edges {
                  node {
                    name
                    slug
                  }
                }
              }
              pageInfo {
                  endCursor
                  hasNextPage
                  hasPreviousPage
                  startCursor
                }
            }
          }
        }
      
        }`,
        "variables": variables||{ 
          first: 6, 
          after: pageInfo?.current?.endCursor
       }
  })
    //   console.log("response in page",response)

      if(response.success===true)
      {

        setInitialPosts(prev=>{
          
            return [...prev,...response.data.posts.edges]

        })
        pageInfo.current=response?.data?.posts?.pageInfo

        // console.log("pageinfo as res",response?.data?.posts?.pageInfo)
        if(response?.data?.posts?.pageInfo?.hasNextPage===true)
            {
                setIsCompleted(false)
            }
            if(response?.data?.posts?.pageInfo?.hasNextPage===false)
            {
                setIsCompleted(true)
            }
      }
   
}
   
  const loadMore = async() => {
    if(pageInfo?.hasNextPage===true)
    {
        setIsCompleted(false)
        
    }
    if(pageInfo?.hasNextPage===false)
    {
        setIsCompleted(true)
        return 
    }
   await fetchPosts({first:6,after:pageInfo?.current?.endCursor})

    
}

console.log("props in",initialPosts)

  return (
    <Container>
      <div className={styles.news_blog_container}>
        <div className={styles.news_blog_L} >
          <div className={styles.title}>
            Video Gallery
          </div>
        </div>

        <div className={styles.news_blog_R} data-aos="fade-up">
          {
            initialPosts?.map((post, index) => {
              console.log(post);
              return (
                <div className={styles.blogCardWrap} key={`blog-card-${index}-${Date.now()}`}>

                  <div className={styles.postWrap + " " + styles.postWrapSpecific}>
                    <div className={styles.testPostWrap}>
                      <div className={styles.thumbnailContainer}>

                        <Image src={`${post?.node?.featuredImage?.node?.sourceUrl || '/images/defaultThumbnail.png'}`}

                          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                          alt="" layout='fill' objectFit="cover" />

                        <img onClick={() => { openModal(post?.node?.title) }} className={styles.overlayIcon} src={"/images/videoPlay.png"}
                          alt="Overlay Icon" width={20} height={20} />
                      </div>
                      {modalOpen &&
                        <Modal
                          isOpen={modalOpen}
                          onRequestClose={() => setModalOpen(false)}
                          contentLabel="Video Modal"
                          style={customModalStyles}
                        >
                           <div onClick={() => setModalOpen(false)} className={styles.closeButton}>
                              <Image src="/images/close.svg" alt="" width={15} height={15} />
                            </div>
                          <div className={styles.containerPopop}>
                           


                            {/* Modal content */}
                            <ReactPlayer
                              url={currentVideo}
                              playing={false}
                              controls={true}
                              width="100%"
                              height="100%"
                              style={{ maxWidth: "80%", maxHeight: "100%",margin:"auto" }} /* Adjust video styles */
                            />
                          </div>
                        </Modal>

                      }

                      <div className={styles.post_content}>
                        <div className={styles.post_title} dangerouslySetInnerHTML={{ __html: post?.node?.content.length>98?post?.node?.content?.substr(0,98)+"...":post?.node?.content  }} ></div>
                      </div>
                    </div>

                  </div>

                </div>
              )

            })
          }

        </div>

        {/* {initialPosts.length>0?isCompleted ?
                    <div style={{ marginTop: 30, display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <Button value="No more blogs" backgroundColor="#D5AF32" color="#192B3A" width="328px" style={{ border: "2px solid black"}} arrowH={20} arrowW={12}
                            height="70px" src="/images/LarrowB.svg" />

                    </div>
                    :
                    <div style={{ marginTop: 30, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => loadMore()}>
                        <Button value="Load More" backgroundColor="#D5AF32" color="#192B3A" width="308px" style={{ border: "2px solid black"}} arrowH={20} arrowW={12}
                            height="70px" src="/images/LarrowB.svg" />

                    </div>:null} */}

      </div>
    </Container>
  )
}

export default News_and_Blogs_section