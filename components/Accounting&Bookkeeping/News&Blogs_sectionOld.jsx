import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./NewsO.module.css";
import fstyles from "../Footer.module.css";
import { data } from '../../data/blogs_data'
import { category_data } from '../../data/blogs_data'
import Image from 'next/image'
import Link from 'next/link';
import Container from '../Common/Container';
function News_and_Blogs_section() {

    useEffect(()=>{
        AOS.init({
          duration: 1400,
          once: false,
        })},[]);


    let site = ""
    if (typeof window !== 'undefined') {
        site = window.location.href;
    }

    const [filteredList, setFilteredList] = useState(data);

    // Selected ctgryname filter
    const [selectedCty, setSelectedCty] = useState("");

    const [query, setQuery] = useState("")



    const filterByCty = (filteredData) => {
        // Avoid filter for empty string
        if (!selectedCty || selectedCty == "all") {
            return filteredData;
        }

        const filteredPost = filteredData.filter(
            (post) => post.tag.split(" ").indexOf(selectedCty) !== -1
        );

        return filteredPost;
    };



    useEffect(() => {
        var filteredData = filterByCty(data);
        setFilteredList(filteredData);
    }, [selectedCty])

    return (
        <Container>
            <div className={styles.news_blog_container}>
                <div className={styles.news_blog_L} data-aos="fade-right">
                    <div className={styles.searchBar}>
                        {/* <div className={styles.searchIcon}>
                        <Image src="/images/search.png" alt="" width="22" height="22" />
                    </div> */}
                        <input type="search" className={styles.input_field} placeholder="Search here..." onChange={event => setQuery(event.target.value)} />
                    </div>
                    <div className={styles.blogs_ctyWrap}>
                        <div className={styles.blogs_cty} onClick={() => setSelectedCty("all")}>All Categories</div>
                        <div className={styles.blogs_cty} onClick={() => setSelectedCty("all")}>All Articles</div>

                        {category_data?.map((item, index) => {
                            return (
                                <div className={styles.blogs_cty} key={index} onClick={() => setSelectedCty(item)}>
                                    {item}
                                </div>
                            )
                        })}

                    </div>


                    <div className={styles.blogs_ctyWrap2}>
                        <div className={styles.blogs_cty2} onClick={() => setSelectedCty("all")}>Categories</div>
                        <div className={styles.blogs_cty2} onClick={() => setSelectedCty("all")}>Articles</div>

                        {category_data?.map((item, index) => {
                            return (
                                <div className={styles.blogs_cty2} key={index} onClick={() => setSelectedCty(item)}>
                                    {item}
                                </div>
                            )
                        })}

                    </div>
                    <div className={styles.shareIcons}>
                        <div className={styles.share}>
                            Share
                        </div>
                        <div className={fstyles.social}>
                        <div className={fstyles.icon}>
                            <Link href="https://www.facebook.com/MSAccountingAndTaxConsultancy">
                                <a>
                                    <Image src="/images/fb.svg" alt="" width={40} height={40} />
                                </a>

                            </Link>
                        </div>
                        <div className={fstyles.icon}>
                            <Link href="https://twitter.com/MSGroupUAE">
                                <a>
                                    <Image src="/images/layer1.svg" alt="" width={30} height={24.7} />
                                </a>
                            </Link>
                        </div>
                        <div className={fstyles.icon}>
                            <Link href="https://www.linkedin.com/company/msgroupuae">
                                <a>
                                    <Image src="/images/linkedin.png" alt="" width={30} height={28} />
                                </a>
                            </Link>

                        </div>
                        <div className={fstyles.icon}>
                            <Link href="https://www.instagram.com/m_s_chartered_accountant/">
                                <a>
                                    <Image src="/images/insta.svg" alt="" width={30} height={30} />
                                </a>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={styles.news_blog_R}  data-aos="fade-left">
                    {
                        filteredList.filter(post => {
                            if (query === '') {
                                return post;
                            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                                return post;
                            }
                        }).map((post, index) => {
                            return (
                                <Link href={`/news-and-blogs/${post.id}`} passHref key={index}>
                                    <div className={styles.postWrap}>
                                        <div >
                                            <Image src={post.image} style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10PX" }} alt="" width="414" height="263" />
                                        </div>
                                        <div className={styles.post_content}>
                                            <div className={styles.post_date}>{post.date} <span>{post.reading_duration}</span></div>

                                            <div className={styles.post_title}>{post.title}</div>
                                            <div className={styles.read_more}>Read More <span style={{ marginLeft: 10, marginTop: 10 }}>
                                                <Image src="/images/LarrowB.svg" alt="" width="15" height="15" />
                                            </span></div>
                                        </div>
                                    </div>
                                </Link>

                            )

                        })
                    }

                </div>
                <div className={styles.shareIcons2}>
                    <div className={styles.share}>
                        Share
                    </div>
                    <div className={fstyles.social}>
                        <div className={fstyles.icon}>
                            <Link href="https://www.facebook.com/MSAccountingAndTaxConsultancy">
                                <a>
                                    <Image src="/images/fb.svg" alt="" width={40} height={40} />
                                </a>

                            </Link>
                        </div>
                        <div className={fstyles.icon}>
                            <Link href="https://twitter.com/MSGroupUAE">
                                <a>
                                    <Image src="/images/layer1.svg" alt="" width={30} height={24.7} />
                                </a>
                            </Link>
                        </div>
                        <div className={fstyles.icon}>
                            <Link href="https://www.linkedin.com/company/msgroupuae">
                                <a>
                                    <Image src="/images/linkedin.png" alt="" width={30} height={28} />
                                </a>
                            </Link>

                        </div>
                        <div className={fstyles.icon}>
                            <Link href="https://www.instagram.com/m_s_chartered_accountant/">
                                <a>
                                    <Image src="/images/insta.svg" alt="" width={30} height={30} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default News_and_Blogs_section