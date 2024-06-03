import React, { useState ,useEffect} from "react";
import Container from "../Common/Container";
import styles from "./Styles.module.css";
import Image from "next/image";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { useWindowSize } from "@uidotdev/usehooks";
function Testimonial() {
  const screen = useWindowSize();
  const card = [
    {
      image: "/images/jamal.svg",
      name: "Prof. Jamal Sanad Al-Suwaidi",
      post: "H.E. Minister",
      place: "United Arab Emirates",
      content:
        '"Every member of the team is very supportive and shows exceptional dedication to this company. Their support and ability to understand our needs and the amount of effort they have put into work directly impacted us. I would highly recommend MS Group to other companies and related sectors."',
    },
    {
      image: "/images/maria.svg",
      name: "Maria Vavoulas",
      post: "Former Group COO",
      place: "HC Group",
      content:
        '"Having established HC Group Middle East Ltd in 2021, we were looking for a proactive partner to guide us and support our growth strategy. MS have not let us down. The team are passionate, knowledgeable and most importantly for us, responsive."',
    },
    {
      image: "/images/khalid.svg",
      name: "Khalid Akhrif",
      post: "Vice President",
      place: "Technical Aercap",
      content:
        '"I certainly appreciate and commend your team for their professionalism, know-how and customer care, always a pleasure dealing with you guys."',
    },
    {
      image: "/images/ala.svg",
      name: "Ala Qumsieh",
      post: "Co-Founder & CEO",
      place: "Founders & Company Limited",
      content:
        '"We are grateful to the team at MS Chartered Accountants for their outstanding service and expertise. As a startup ourselves, we were looking for a reliable and experienced accounting firm to help us navigate the complex environment. From the very beginning, we were impressed with the team. They took the time to understand our unique business needs and develop a customized support plan that met our specific requirements. The best thing about the relationship is that we always felt they were part of our team, not a service provider."',
    },
    {
      image: "/images/Brodies-01.svg",
      name: "Bryan Wilson ",
      post: "Partner",
      place: "Brodies Middle East LLP",
      content:
        '"MS Accountants provided us with timely and helpful support as we set up our AML compliance function for our ADGM operation.  We look forward to deepening and strengthening our relationship with them."',
    },
    {
      image: "/images/kaplan.svg",
      name: "Amar Mehra",
      post: " Head of Tax",
      place: "KaplanME",
      content:
        '"I would like to congratulate Mr. Shafeek and his team for their professionalism and dedication in getting a piece of work delivered on time within such short notice and without any prior warning. The team had to give up their weekends to get this done. I am truly appreciative and extremely grateful. I will be delighted to work with MS in the future."',
    },
   
  ];

  const [cardIndex, setCardIndex] = useState(0);
  const numCardsToShow = screen.width < 768 ? 1 : 3;

  const handleChange = (type) => {
    let newIndex = cardIndex + type;
    const totalCards = card.length;
    const numCardsToDisplay = 3;

    if (newIndex < 0) {
      newIndex = totalCards - numCardsToDisplay;
    } else if (newIndex >= totalCards - numCardsToDisplay + 1) {
      newIndex = 0;
    }
    setCardIndex(newIndex);
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      handleChange(1);
    }, 5000);

    return () => clearInterval(autoplayInterval);
  }, [cardIndex]);

  return (
    <div className={styles.home_testimonialContainer} data-aos="fade-up">
      <Container>
        <div className={styles.test_outerdiv_hom}>
          <div className={styles.TestimonialTitle_hom} style={{color:"black"}}>Our Precious Clients</div>
          <div className={styles.test_circleLeft_hom} onClick={() => handleChange(-1)}>
              <MdArrowLeft style={{ fontSize: "30px" }} />
            </div>
          <div className={styles.carousel}>
          {card.slice(cardIndex, cardIndex + numCardsToShow).map((item, index) => (
                
              <Card
                key={index}
                image={item.image}
                name={item.name}
                post={item.post}
                place={item.place}
                content={item.content}
                isActive={index === 1} 
                position={index - 1} 
              />
            ))}
             <div className={styles.test_circleRight_hom} onClick={() => handleChange(1)}>
              <MdArrowRight style={{ fontSize: "30px" }} />
            </div>
          </div>
         
        </div>
      </Container>
    </div>
  );
}

function Card({ image, name, post, place, content, isActive, position }) {
  const translateX = position * 150; 
  const zoomFactor = isActive ? 1.15 : 1;
  const zoomFactor2 = isActive ? 1.1 : 1;
  const transformStyle = `translateX(${translateX}px) scaleY(${zoomFactor}) scaleX(${zoomFactor2})`;
  return (
    <div className={`${styles.hom_test_card} ${isActive ? styles.active_hom : ""}`} style={{transform: transformStyle }}>
      <div className={styles.test_imgcircle_hom}>
      {isActive ? (
          <Image src={image} width={80} height={80} alt={name} />
        ) : (
          <Image src={image} width={73} height={73}  alt={name} />
        )}
      </div>
      <div className={styles.hom_testCard_img}>
      {isActive ? (
          <Image src="/images/client_quote.png" width={50} height={40}  alt={name}  />
        ) : (
          <Image src="/images/client_bluequote.svg" width={50} height={50}  alt={name} />
        )}</div>
      <p className={styles.test_name}>{name}</p>
      <p className={styles.test_post}>{post}</p>
      <p className={styles.test_place}>{place}</p>
      <p className={styles.test_content}>{content}</p>
    </div>
  );
}

export default Testimonial;