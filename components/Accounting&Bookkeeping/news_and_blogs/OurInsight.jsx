import React, { useState, useRef, useEffect } from "react";
import Container from "../../Common/Container";
import styles from "../../../components/Accounting&Bookkeeping/Styles.module.css";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import dayjs from "dayjs";
import readTime from "../../../utilities/readTime";
import { useRouter } from "next/router";
import AOS from "aos";
import { data } from "../../../data/blogs_data";
import gqlRequest from "../../../utilities/graphql";
import Link from "next/link";
import LatestNews from "./LatestNews";
import { RiSearch2Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Cstyle from "../News1a.module.css";
export default function OurInsight() {
  const newsblog = [
    {
      image: "/images/news1.jpg",
      date: "January 24, 2023  ",
      news: "UAE’s rising M&A market sparks investor interest: Explore the key steps of M&A to ensure success.",
    },
    {
      image: "/images/news2.svg",
      date: "January 24, 2023  ",
      news: "UAE’s rising M&A market sparks investor interest: Explore the key steps of M&A to ensure success.",
    },
    {
      image: "/images/new3.svg",
      date: "January 24, 2023  ",
      news: "UAE’s rising M&A market sparks investor interest: Explore the key steps of M&A to ensure success.",
    },
    {
      image: "/images/news4.svg",
      date: "January 24, 2023  ",
      news: "UAE’s rising M&A market sparks investor interest: Explore the key steps of M&A to ensure success.",
    },
  ];
  const pageInfo = useRef(null);
  const yearInfo = useRef({ startingYear: null, latestYear: null });
  const categoriesList = useRef([]);
  const tagsList = useRef([]);
  const searchText = useRef("");
  const yearChoosen = useRef();
  const router = useRouter();
  const fetchPosts = async (variables) => {
    const response = await gqlRequest({
      operationName: "GetPosts",
      query: `query GetPosts($first:Int,$after:String,$categories:[ID],$tags:[ID],$searchtext:String,$year:Int) {
            posts (first:$first,after:$after,where:{categoryIn:$categories,tagIn:$tags,search:$searchtext,dateQuery:{year:$year}}){
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
                  categories{
                    edges
                    {
                      node{
                        name,
                        id
                      }
                    }
                  }
                }
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
              }
            }
          }`,
      variables: variables || {
        first: 6,
        after: pageInfo?.current?.endCursor,
      },
    });
    //   console.log("response in page",response)

    if (response.success === true) {
      setInitialPosts((prev) => {
        return [...prev, ...response.data.posts.edges];
      });
      pageInfo.current = response?.data?.posts?.pageInfo;

      // console.log("pageinfo as res",response?.data?.posts?.pageInfo)
      if (response?.data?.posts?.pageInfo?.hasNextPage === true) {
        setIsCompleted(false);
      }
      if (response?.data?.posts?.pageInfo?.hasNextPage === false) {
        setIsCompleted(true);
      }
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
    });
  }, []);

  let site = "";
  if (typeof window !== "undefined") {
    site = window.location.href;
  }

  const [isFilter, setIsFilter] = useState(false);

  const [selFilter, setSelFilter] = useState();

  const [filteredList, setFilteredList] = useState();

  // Selected ctgryname filter
  const [selectedCty, setSelectedCty] = useState([]);
  const [selectedCty1, setSelectedCty1] = useState(false);
  // Selected yr filter
  const [selectedYr, setSelectedYr] = useState([]);

  const [query, setQuery] = useState("");

  const [isCompleted, setIsCompleted] = useState(false);

  const [index, setIndex] = useState(6);

  const [initialPosts, setInitialPosts] = useState([]);
  const [categoryData, setCategoryData] = useState();
  const [tagData, setTagData] = useState();
  const [yearInfoArray, setYearInfoArray] = useState([]);
  const [drop, setDrop] = useState({
    main: false,
    year: false,
    category: false,
    tags: false,
  });
  // console.log("year info:",yearInfo)
  const [selectedYear, setSelectedYear] = useState(null);

  const handleCheckboxChange = (event) => {
    setSelectedYear(event.target.value);
  };
  useEffect(() => {
    if (router.isReady === false) {
      return;
    }
    //parse categories send over url
    if (router.query) {
      try {
        const { categories } = router.query;
        // console.log("categories send",categories)
        if (categories && typeof categories === "string") {
          let parsed = JSON.parse(categories);
          if (typeof parsed === "object") {
            categoriesList.current = parsed;
          }
        }
      } catch (err) {
        console.log("json parse error:", err);
      }
    }

    const fetchPostsInitial = async () => {
      const response = await gqlRequest({
        operationName: "GetPosts",
        query: `query GetPosts($first:Int,$after:String,$categories:[ID]) {
                posts (first:$first,after:$after,where:{categoryIn:$categories}){
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
                      categories{
                        edges
                        {
                          node{
                            name,
                            id
                          }
                        }
                      }
                    }
                  }
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                  }
                }
              }`,
        variables: {
          first: 6,
          after: null,
          last: null,
          before: null,
          categories: categoriesList.current || null,
        },
      });

      if (response.success === true) {
        setInitialPosts(response?.data?.posts?.edges);
        pageInfo.current = response?.data?.posts?.pageInfo;
        console.log("pageinfo as res", response?.data?.posts?.pageInfo);
        if (response?.data?.posts?.pageInfo?.hasNextPage === true) {
          setIsCompleted(false);
        }
        if (response?.data?.posts?.pageInfo?.hasNextPage === false) {
          setIsCompleted(true);
        }
      }
    };
    const fetchCategoryData = async () => {
      const response = await gqlRequest({
        operationName: "getAllCategories",
        query: `query getAllCategories{
                categories{
                  edges{
                    node{
                      id
                      slug
                      name
                    }
                  }
                }
              }`,
      });
      if (response.success === true) {
        setCategoryData(response?.data?.categories?.edges);
        console.log("response of categories", response);
      }
    };

    const fetchTagsData = async () => {
      const response = await gqlRequest({
        operationName: "getAllTags",
        query: ` query getAllTags{
                tags{
                  edges{
                    node{
                      id
                      slug
                      name
                    }
                  }
                }
              }`,
      });
      if (response.success === true) {
        setTagData(response?.data?.tags?.edges);
        console.log("response of tags", response);
      }
    };
    const fetchPostLatestYear = async () => {
      const response = await gqlRequest({
        operationName: "getLatestYear",
        query: `query getLatestYear{
                posts(first:1){
                  edges{
                    node{
                      title
                      date
                    }
                  }
                }
              }`,
      });
      if (response.success === true) {
        if (response?.data?.posts?.edges?.length > 0) {
          // setYearInfo(prev=>{return {...prev,latestYear:dayjs(response?.data?.posts?.edges[0]?.node.date).format("YYYY")}})
          const latestYear = dayjs(
            response?.data?.posts?.edges[0]?.node?.date
          ).format("YYYY");
          yearInfo.current.latestYear = latestYear;
        }
        console.log("response of latestyear", response);
      }
    };
    const fetchPostStartingYear = async () => {
      const response = await gqlRequest({
        operationName: "getStartingYear",
        query: `query getStartingYear{
                posts(last:1){
                  edges{
                    node{
                      title
                      date
                    }
                  }
                }
              }`,
      });
      if (response.success === true) {
        if (response?.data?.posts?.edges?.length > 0) {
          //populate years
          let startingYear = dayjs(
            response?.data?.posts?.edges[0]?.node.date
          ).format("YYYY");
          yearInfo.current.startingYear = startingYear;
          startingYear = parseInt(startingYear);
          console.log("startingYear:", startingYear);
          let latestYear =
            parseInt(yearInfo?.current?.latestYear) ||
            parseInt(new Date().getFullYear());
          if (latestYear === NaN || latestYear === undefined) {
            latestYear = parseInt(new Date().getFullYear());
          }
          console.log("latestYear:", latestYear);
          const tempYearArray = [];
          //test for nan
          //startingYear=Nan
          //latestYear=NaN
          if (
            startingYear !== undefined &&
            startingYear !== NaN &&
            latestYear !== undefined &&
            latestYear !== NaN
          ) {
            for (let i = startingYear; i <= latestYear; i++) {
              tempYearArray.push(i);
            }
            console.log("tempYearArray", tempYearArray);
            setYearInfoArray(tempYearArray);
          }
        }
        console.log("response of latestyear", response);
      }
    };
    fetchPostsInitial();
    fetchCategoryData();
    fetchTagsData();
    fetchPostLatestYear();
    fetchPostStartingYear();
    console.log("useEffect is triggered");
  }, [router.isReady]);

  // useEffect(() => {
  //   if (yearInfoArray.length === 0) {
  //     setSelFilter(1);
  //   }
  // }, [yearInfoArray]);

  console.log("pageInfo", pageInfo);
  const loadMore = async () => {
    if (pageInfo?.hasNextPage === true) {
      setIsCompleted(false);
    }
    if (pageInfo?.hasNextPage === false) {
      setIsCompleted(true);
      return;
    }
    await fetchPosts({
      first: 6,
      after: pageInfo?.current?.endCursor,
      categories: categoriesList.current,
      tags: tagsList.current,
      searchtext: searchText.current,
      year: yearChoosen.current || null,
    });
    setIndex(index + 6);
  };
  const handleYearsCheck = async (e, item) => {
    if (e.target.checked === true) {
      yearChoosen.current = item;
    }
    if (e.target.checked === false) {
      if (yearChoosen.current === item) {
        yearChoosen.current = null;
      }
    }
    setInitialPosts([]);
    pageInfo.current.endCursor = null;
    await fetchPosts({
      first: 6,
      after: pageInfo?.current?.endCursor,
      categories: categoriesList.current,
      tags: tagsList.current,
      searchtext: searchText.current,
      year: yearChoosen.current || null,
    });
  };
  const handleCategoriesCheck = async (e, item) => {
    if (e.target.checked === true) {
      categoriesList.current.push(item?.node?.id);
    }
    if (e.target.checked === false) {
      categoriesList.current = categoriesList.current.filter(
        (cat) => cat != item?.node?.id
      );
    }
    setInitialPosts([]);
    pageInfo.current.endCursor = null;
    await fetchPosts({
      first: 6,
      after: pageInfo?.current?.endCursor,
      categories: categoriesList.current,
      tags: tagsList.current,
      searchtext: searchText.current,
      year: yearChoosen.current || null,
    });
  };

  const handleCategoryfilter=async(e,item)=>{
    console.log(item?.node?.id);
    categoriesList.current.push(item?.node?.id);
    setInitialPosts([]);
    pageInfo.current.endCursor = null;
    await fetchPosts({
      first: 6,
      after: pageInfo?.current?.endCursor,
      categories: categoriesList.current,
      tags: tagsList.current,
      searchtext: searchText.current,
      year: yearChoosen.current || null,
    });
  }
  const handleTagsCheck = async (e, item) => {
    if (e.target.checked === true) {
      tagsList.current.push(item?.node?.id);
    }
    if (e.target.checked === false) {
      tagsList.current = tagsList.current.filter(
        (cat) => cat != item?.node?.id
      );
    }
    setInitialPosts([]);
    pageInfo.current.endCursor = null;
    await fetchPosts({
      first: 6,
      after: pageInfo?.current?.endCursor,
      categories: categoriesList.current,
      tags: tagsList.current,
      searchtext: searchText.current,
      year: yearChoosen.current || null,
    });
  };

  const filterByCty = (filteredData) => {
    console.log(selectedCty, selectedCty1);
    // Avoid filter for empty string
    if (!selectedCty || selectedCty1) {
      return filteredData;
    }
    const filteredPost = filteredData;
    // const filteredPost = filteredData.filter(
    //     // post.tag.split(" ").indexOf(selectedCty) !== -1
    //     (post) => post.tag==selectedCty
    // );
    selectedCty.map((item, index) => {
      if (item && index == selectedCty.length - 1) {
        filteredPost = filteredPost.filter((i) => i.tag == item);
      }
    });

    return filteredPost;
  };

  const filterByYear = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedYr) {
      return filteredData;
    }
    const filteredPost = filteredData;
    selectedYr.map((item, index) => {
      if (item && index == selectedYr.length - 1) {
        filteredPost = filteredPost.filter((i) => i.year == item);
      }
    });

    return filteredPost;
  };

  const handleOnChange = (e, option) => {
  console.log(e.target.checked,option);
    const checked = e.target.checked;

    if (checked) {
      setSelectedCty((prev) => [...prev, option]);
    }
    if (!checked) {
      setSelectedCty(selectedCty?.filter((e) => e !== option));
    }
  };

  const handleOnChangeY = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      setSelectedYr((prev) => [...prev, option]);
    }
    if (!checked) {
      setSelectedYr(selectedYr?.filter((e) => e !== option));
    }
  };

  useEffect(() => {
    var filteredData = filterByCty(data);
    filteredData = filterByYear(filteredData);
    setFilteredList(filteredData);
  }, [selectedCty, selectedYr, selectedCty1]);
  console.log(initialPosts);
  const controller = new AbortController();
  return (
    <>
      <Container>
        <div className={styles.insightsearch}>
          {" "}
          <div className={styles.mobfilter}>
          <div className={styles.insight_title}>Our Insights</div>  
          <div
              onClick={() => {
                setIsFilter(!isFilter);
              }}
              style={{ cursor: "pointer",alignItems:"center",display:"flex"}}
            >
              Filter By <MdKeyboardArrowDown />
            </div>
            </div>
            
            <div className={`${styles.insight_title} ${styles.webfilter}`}>Our Insights</div> 
          <div
            className={styles.insearchwrap}
            style={{ display: "flex", gap: "36px" }}
          > 
            <div className={styles.searchdiv}>
              <RiSearch2Line />
              <input
                type="search"
                placeholder="Search here"
                className={styles.searchbox}
                onChange={async (event) => {
                  setQuery(event.target.value);
                  searchText.current = event.target.value;
                  if (event.target.value === "") {
                    setInitialPosts([]);
                    pageInfo.current.endCursor = null;
                    await fetchPosts({
                      first: 6,
                      after: pageInfo?.current?.endCursor,
                      categories: categoriesList.current,
                      tags: tagsList.current,
                      searchtext: searchText.current,
                      year: yearChoosen.current || null,
                    });
                  }
                }}
                //   onClick={async(e)=>{
                //     console.log("clicked search")
                //     console.log(e.target.value);
                //     setInitialPosts([])
                //     pageInfo.current.endCursor=null
                //     await fetchPosts({first:6,after:null,categories:categoriesList.current,tags:tagsList.current,searchtext:e.target.value,year:yearChoosen.current||null})
                // }}
              />

              <button
                className={styles.searchbtn}
                onClick={async (e) => {
                  console.log("clicked search");
                  setInitialPosts([]);
                  pageInfo.current.endCursor = null;
                  await fetchPosts({
                    first: 6,
                    after: null,
                    categories: categoriesList.current,
                    tags: tagsList.current,
                    searchtext: searchText.current,
                    year: yearChoosen.current || null,
                  });
                }}
              >
                Search
              </button>
            </div>
            <div className={styles.webfilter}
              onClick={() => {
                setIsFilter(!isFilter);
              }}
             
            >
              Filter By <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          {isFilter ? (
            <div className={styles.maindropdowncontainer}>
              <div className={styles.dropdown}>
                {yearInfoArray.length > 0 ? (
                  <div onClick={() => setSelFilter(0)}>
                    <div
                      style={{
                        borderBottom: "1px solid #D1D1D166",
                        padding: "10px 20px",
                      }}
                    >
                      <span className={styles.newsdropitem}>
                        Year
                        <IoIosArrowDown />
                      </span>
                    </div>
                  </div>
                ) : null}
                {selFilter == 0 && (
                  <span style={{paddingTop:"10px"}}>
                    {yearInfoArray.length > 0 &&
                      yearInfoArray?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={styles.yearstyle}
                            onChange={async (e) => {
                              handleOnChangeY(e, item);
                              await handleYearsCheck(e, item);
                            }}
                          >
                            <label className={styles.check_container}>
                            {item}
                            <input
                              type="checkbox"
                              checked={
                                yearChoosen.current === item ? true : false
                              }
                            />
                            <span className={styles.checkmark}></span>
                          </label> 
                           
                          </div>
                        );
                      })}
                  </span>
                )}
                <div onClick={() => setSelFilter(1)}>
                  <div
                    style={{
                      borderBottom: "1px solid #D1D1D166",
                      padding: "10px 20px",
                    }}
                  >
                    <span className={styles.newsdropitem}>
                      {" "}
                      Category
                      <IoIosArrowDown />
                    </span>
                  </div>
                </div>
                {selFilter == 1 && (
                  <span style={{paddingTop:"10px"}}>
                    {categoryData?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={styles.yearstyle}
                          onChange={async (e) => {
                            handleOnChange(e, item);
                            await handleCategoriesCheck(e, item);
                          }}
                        >
                          <label className={styles.check_container}>
                            {item?.node?.name}
                            <input
                              type="checkbox"
                              checked={
                                categoriesList?.current?.includes(item?.node?.id)?true:false
                              }
                            />
                            <span className={styles.checkmark}></span>
                          </label>
                          {/* <input
                        type="checkbox"
                        checked={categoriesList?.current?.includes(item?.node?.id)?true:false}
                      />
 <span className={styles.checkmark}></span>
                      <label>
                        {item?.node?.name}
                      </label> */}
                        </div>
                      );
                    })}
                  </span>
                )}
                <div onClick={() => setSelFilter(2)}>
                  <div
                    style={{
                      borderBottom: "1px solid #D1D1D166",
                      padding: "10px 20px",
                    }}
                  >
                    <span className={styles.newsdropitem}>
                      Tags
                      <IoIosArrowDown />
                    </span>
                  </div>
                </div>
                {selFilter == 2 && (
                  <span style={{paddingTop:"10px"}}>
                    {tagData?.map((item, index) => {
                      return (
                        <div
                          className={styles.yearstyle}
                          key={index}
                          onChange={async (e) => {
                            handleOnChange(e, item);
                            await handleTagsCheck(e, item);
                          }}
                        >
                           <label className={styles.check_container}>
                            {item?.node?.name}
                            <input
                              type="checkbox"
                              checked={
                                tagsList?.current?.includes(item?.node?.id)
                                ? true
                                : false
                              }
                            />
                            <span className={styles.checkmark}></span>
                          </label>
                          {/* <input
                            type="checkbox"
                            checked={
                              tagsList?.current?.includes(item?.node?.id)
                                ? true
                                : false
                            }
                          />
                          <span className={styles.checkmark}></span>
                          <label>{item?.node?.name}</label> */}
                        </div>
                      );
                    })}
                  </span>
                )}
              </div>
            </div>
          ) : (
            ""
          )}

          <div className={styles.blogContainer}>
            <div className={styles.blogSingleinsightWrapper}>
              {initialPosts?.map((news, index) => {
                return (
                  <Link
                    href={`/news-and-blogsnew/${news?.node?.slug}`}
                    passHref
                    key={index}
                  >
                    <div
                      className={styles.news_blogSingleinsight}
                      key={`blog-card-${index}-${Date.now()}`}
                    >
                      <div className={styles.news_blogImginsight}>
                        <Image
                          src={`${
                            news?.node?.featuredImage?.node?.sourceUrl ||
                            "/images/defaultThumbnail.png"
                          }`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className={styles.newscontainerinsight}>
                        <div>
                          <span className={styles.insightnewsdate}>
                            {dayjs(news?.node?.date).format("MMMM DD, YYYY")}{" "}
                          </span>{" "}
                          <span style={{ fontWeight: "500", color: "black" }}>
                            &nbsp;&nbsp;|&nbsp;&nbsp; MS Blogs
                          </span>
                        </div>
                        <div className={styles.insightnewline}>
                          {news?.node?.title?.length > 98
                            ? news?.node?.title?.substr(0, 98) + "..."
                            : news?.node?.title}{" "}
                        </div>
                        <div className={styles.insightreadmore}>
                          <span style={{ color: "#212120", fontWeight: "400" }}>
                            Read More
                          </span>{" "}
                          <IoIosArrowForward
                            style={{
                              color: "#212120",
                              fontWeight: "600",
                              fontSize: "20px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className={styles.Categorycontainer}>
              <p style={{fontSize:"18px",fontWeight:"500"}}>Categories</p>

              {categoryData?.map((item, index) => {
                console.log(item);
                return (
                  <div className={styles.categoryPoint} key={index}  onClick={async (e) => {
                    console.log(e);
                    e.target.checked = true;
                    handleOnChange(e, item);
                    await handleCategoryfilter(e, item);
                  }}>
                    <MdKeyboardArrowRight />
                    {item?.node?.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.loadmorebtndiv}>
          <button className={styles.loadmoreinsight} onClick={() => loadMore()}>
            Load More
          </button>
        </div>
      </Container>
    </>
  );
}

// const [drop,setdrop]=useState({main:false,year:false})
// const filteropen=()=>{
//   setdrop(e=>({...e,main:!e.main}))
// }
