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
  console.log("props.smartupPosts in Smartup_Blogs_section", props.smartupPosts)
  console.log("props.smartupCategories in Smartup_Blogs_section", props.smartupCategories)

  const [initialPosts, setInitialPosts] = useState([])
  // Fetch data from external API

  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("")
  const openModal = (vidoe) => {
    setModalOpen(true);
    setCurrentVideo(vidoe)
  };


  useEffect(() => {
    if (props.smartupPosts) {
      //     const filteredPosts = props.smartupPosts.filter(post =>  post?.node?.videocategories?.edges?.[0]?.node?.name === props?.service);
      // setInitialPosts(filteredPosts)

      if (props?.smartupCategories?.edges?.length > 0) {   // filter the data accordingly

        let tempStorage = []
        for (let i = 0; i < props?.smartupPosts?.edges?.length; i++) {
          console.log("i iteration", props?.smartupPosts?.edges[i].node)

          for (let j = 0; j < props?.smartupPosts?.edges[i]?.node?.videocategories?.edges?.length; j++) {
            console.log("j iteration", props?.smartupPosts?.edges[i]?.node?.videocategories?.edges[j]?.node?.id)
            // if(props?.smartupCategories?.edges?.includes(props?.smartupPosts?.edges[i]?.node?.videocategories?.edges[j]?.node?.id))
            // {
            //     tempStorage.push(props?.smartupPosts?.edges[i]) 
            //     break;
            // }


            const hasTaxation = props?.smartupCategories?.edges.some(edge => edge?.node?.id === props?.smartupPosts?.edges[i]?.node?.videocategories?.edges[j]?.node?.id);

            if (hasTaxation) {
              tempStorage.push(props?.smartupPosts?.edges[i])
              break;
            }
          }
        }
        console.log("tempStorage::", tempStorage)
        setInitialPosts(tempStorage)
      }
    }
  }, [props.smartupPosts])


  console.log("props in",
    initialPosts,
    props?.smartupCategories?.edges?.length,
    props?.smartupPosts?.edges?.length, props?.smartupPosts?.edges[2],
    props?.smartupCategories?.edges?.includes(props?.smartupPosts?.edges[2]?.node?.videocategories?.edges[0]?.node?.id),
    "gfj",
    props?.smartupCategories?.edges?.includes("node"))



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
                            <Image src="/images/close.png" alt="" width={20} height={20} />
                          </div>
                          <div className={styles.containerPopop}>



                            {/* Modal content */}
                            <ReactPlayer
                              url={currentVideo}
                              playing={false}
                              controls={true}
                              width="100%"
                              height="100%"
                              style={{ maxWidth: "80%", maxHeight: "100%", margin: "auto" }} /* Adjust video styles */
                            />
                          </div>
                        </Modal>

                      }

                      <div className={styles.post_content}>
                        <div className={styles.post_title} dangerouslySetInnerHTML={{ __html: post?.node?.content?.length > 98 ? post?.node?.content?.substr(0, 98) + "..." : post?.node?.content }} ></div>
                      </div>
                    </div>

                  </div>

                </div>
              )

            })
          }

        </div>

      </div>
    </Container>
  )
}

export default News_and_Blogs_section