import React, { useState, useEffect, useRef } from "react";
import style from "./videocard.module.css";
import Container from "../Common/Container";
import ReactPlayer from "react-player/lazy";
import Modal from "react-modal";
import vstyle from "../VideoGallery/videoGallery.module.css";
import { IoIosClose } from "react-icons/io";
import gqlRequest from "../../utilities/graphql";
import stylee from "../Home/Slider.module.css";
import Image from "next/image";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const customModalStyles = {
  overlay: {
    backgroundColor: "rgb(0 0 0  / 10%)",
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: "50%",
    /* position the top  edge of the element at the middle of the parent */
    left: "50%",
    /* position the left edge of the element at the middle of the parent */

    transform: "translate(-50%, -50%)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    // Change the color here
  },
  content: {
    backgroundColor: "transparent",
    width: "100%",

    border: "none",
    overflow: "none",
    padding: 0,
    inset: 0,
    insetBottom: "30px",
  },
};

function VideoCard(props) {
  const {
    imagePath,
    title,
    author,
    position,
    styles,
    customclass,
    fontSize,
    bgimage,
  } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const [currentVideo, setCurrentVideo] = useState("");
  const [initialPosts, setInitialPosts] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const openModal = (title) => {
    setModalTitle(title); 
    setModalOpen(true);
    setCurrentVideo(title);
  };

  useEffect(() => {
    const getFeaturedPost = async () => {
      const response = await gqlRequest({
        operationName: "getVideos",
        query: ` query getVideos{
          videos {
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
              }
            }
          }
        
          }`,
      });
      console.log("response of featured posts", response);
      if (response?.success === true) {
        setSliderContent(response?.data?.videos?.edges);
        setInitialPosts(response?.data?.posts?.edges);
      }
    };
    getFeaturedPost();
  }, []);

  const slider = React.useRef(null);
  const [sliderContent, setSliderContent] = useState(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // centerPadding: "250px",
    // centerMode: true,
    slidesToScroll: 1,
    // autoplay: false,
    // arrows: false,
    loop: true,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
         autoplay:true,
         speed: 500,
         
arror:false
        }
      },
    ]
  };
  console.log(props.smartupPosts);

  console.log(bgimage);
  const pageInfo = useRef(null);
  console.log(sliderContent);

  return (
    <>
      {/* {sliderContent?.map((post, index) => {
        console.log(post);
        return ( */}
          <div>
            {modalOpen && (
              <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                contentLabel="Video Modal"
                style={customModalStyles}
              >
                <div
                  onClick={() => setModalOpen(false)}
                  className={vstyle.closeButton}
                >
                  <IoIosClose style={{ fontSize: "40px", color: "black" }} />
                  {/* <img src="/images/close.png" alt="" width={20} height={20} /> */}
                </div>
                <div className={vstyle.containerPopop}>
                  {/* Modal content */}
                  <ReactPlayer
                    url={modalTitle}
                    playing={false}
                    controls={true}
                    width="100%"
                    height="100%"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      margin: "auto",
                    }} /* Adjust video styles */
                  />
                </div>
              </Modal>
            )}
          </div>
        {/* );
      })} */}

      <div className={style.containervideo}>
     
        <Slider ref={slider} {...settings} className={style?.slidercontainer} >
          {sliderContent && sliderContent.length > 0
            ? sliderContent.map((item, index) => {
                const bgimage1 = item?.node?.featuredImage?.node?.sourceUrl;
                const stripHtmlTags = (html) => {
                  return html.replace(/(<([^>]+)>)/gi, "");
                };
                console.log("hh", item);
                return (
                  <div key={`key-${index}-${Date.now()}`}>
                    <div
                      className={`${style.videocard1}`}
                      style={{
                        
                        backgroundImage: `linear-gradient(180deg, rgba(0, 70, 109, 0)-10%, #00466d 100%), url("${bgimage1}")`,
                        flex: "1",
                        
                        ...styles,
                      }}
                    >
                      <div className={style.videocontentwrapper1}>
                        <button
                          className={style.playbtn}
                          onClick={() => {
                            openModal(item?.node?.title);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="58"
                            height="58"
                            viewBox="0 0 64 63"
                            fill="#00466D"
                            className={style.playsvg}
                          >
                            <path d="M21.1852 49.1362V12.9307L50.3148 31.0334L21.1852 49.1362Z" />
                          </svg>
                        </button>

                        <div className={style.contentmedia}>
                          <p>{stripHtmlTags(item?.node?.content)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </Slider>
      </div>
      
     
    </>
  );
}

export default VideoCard;

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className={style.prevdiv} onClick={onClick} style={{ ...props.style }}>
      <div className={style.prevbtn}>
        <IoMdArrowDropleft />
      </div>
    </div>
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={style.nextdiv} onClick={onClick} style={{ ...props.style }}>
      <div className={style.prevbtn}>
        <IoMdArrowDropright />
      </div>
    </div>
  );
}
