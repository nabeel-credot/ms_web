import React, { useState, useEffect, useRef } from "react";
import style from "./videocard.module.css";
import Container from "../Common/Container";
import ReactPlayer from "react-player/lazy";
import Modal from "react-modal";
import vstyle from "../VideoGallery/videoGallery.module.css";
import { IoIosClose } from "react-icons/io";
import gqlRequest from "../../utilities/graphql";
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
  const [currentVideo, setCurrentVideo] = useState("");
  const [initialPosts, setInitialPosts] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const openModal = (vidoe) => {
    setModalOpen(true);
    setCurrentVideo(vidoe);
  };
  console.log(props.smartupPosts);

  console.log(bgimage);
  const pageInfo = useRef(null);
  useEffect(() => {
    if (props.smartupPosts) {
      const filteredPosts = props?.smartupPosts?.filter(
        (post) =>
          post?.node?.videocategories?.edges?.[0]?.node?.name === props?.service
      );
      console.log(filteredPosts);
      setInitialPosts(filteredPosts);
      if (filteredPosts?.length === 0) {
        setInitialPosts(props?.smartupPosts);
      }
      pageInfo.current = props.smartupPosts?.pageInfo;
      console.log("pageinfo as res", props.smartupPosts?.pageInfo);
      if (props.smartupPosts?.pageInfo?.hasNextPage === true) {
        setIsCompleted(false);
      }
      if (props.smartupPosts?.pageInfo?.hasNextPage === false) {
        setIsCompleted(true);
      }
    }
  }, [props.smartupPosts]);

  return (
    <>
      {/* {initialPosts?.map((post, index) => { 
  return(
    
   
    )  
   
      })} */}
      {initialPosts?.map((post, index) => {
        console.log(post);
        return (
          <>
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
                    url={imagePath}
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
          </>
        );
      })}

      <div
        className={`${style.videocard1} ${style.animationCustom}`}
        style={{
          //  backgroundImage: `url("/images/media.png"), linear-gradient(180deg, rgba(0, 70, 109, 0) 0%, #00466d 100%)`, linear-gradient(rgba(0, 70, 109, 0), rgba(0, 70, 109, 0.8))`
          backgroundImage: `linear-gradient(180deg, rgba(0, 70, 109, 0)-10%, #00466d 100%), url("${bgimage}")`,

          //  backgroundImage: `url("${bgimage}"), linear-gradient(180deg, rgba(0, 70, 109, 0) 0%, #00466d 100%)`,
          ...styles,
        }}
      >
        <div className={style.videocontentwrapper1}>
         
          <button
            className={style.playbtn}
            onClick={() => {
              openModal();
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
            <p>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
