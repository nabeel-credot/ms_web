import React, { useEffect, useState,useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./News1a.module.css";
import fstyles from "../Footer.module.css";
import { data } from '../../data/blogs_data'
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



function Smartup_Blogs_section(props) {
    console.log("props.smartupPosts in Smartup_Blogs_section",props.smartupPosts)
    console.log("props.smartupCategories in Smartup_Blogs_section",props.smartupCategories)
    const pageInfo=useRef(null)
    const yearInfo=useRef({startingYear:null,latestYear:null})
    const categoriesList=useRef([])
    const tagsList=useRef([])
    const searchText=useRef('')
    const yearChoosen=useRef()
    const router = useRouter()
    useEffect(() => {
        AOS.init({
            duration: 1400,
            once: false,
        })
    }, []);


    let site = ""
    if (typeof window !== 'undefined') {
        site = window.location.href;
    }


    const [isFilter, setIsFilter] = useState(false)

    const [selFilter, setSelFilter] = useState(0)

    const [filteredList, setFilteredList] = useState();

    // Selected ctgryname filter
    const [selectedCty, setSelectedCty] = useState([]);
    const [selectedCty1, setSelectedCty1] = useState(false);
    // Selected yr filter
    const [selectedYr, setSelectedYr] = useState([]);


    const [query, setQuery] = useState("")


    const [isCompleted, setIsCompleted] = useState(false)

    const [index, setIndex] = useState(6)

    const [initialPosts,setInitialPosts] = useState([])
    const [categoryData,setCategoryData]=useState()
    const [tagData,setTagData]=useState()
    const [yearInfoArray,setYearInfoArray]=useState([])
    console.log("year info:",yearInfo)
  
    useEffect(()=>{
        if(router.isReady===false)
        {
            return
        }
        //parse categories send over url
        if(router.query)
        {   
            try{
                const {categories}=router.query
                console.log("categories send",categories)
                if(categories&& typeof categories==='string')
                {
                    let parsed=JSON.parse(categories)
                    if(typeof parsed==='object')
                    {
                        categoriesList.current=parsed
                    }
    
                }
            }
            catch(err)
            {
                console.log("json parse error:",err)
            }
           
        }
      
    
        const populateInitialPostFromProps=async(props)=>{
            if(props.smartupPosts)
              {
                if(categoriesList?.current?.length===0)
                {
                    setInitialPosts(props.smartupPosts?.edges)

                }
                else if(categoriesList?.current?.length>0)
                {   // filter the data accordingly

                    let tempStorage=[]
                    for( let i=0;i<props?.smartupPosts?.edges?.length;i++)
                    {
                        console.log("i iteration",props?.smartupPosts?.edges[i].node)

                        for(let j=0;j<props?.smartupPosts?.edges[i]?.node?.smartupCategories?.edges?.length;j++)
                        {
                            console.log("j iteration",props?.smartupPosts?.edges[i]?.node?.smartupCategories?.edges[j])
                            if(categoriesList.current.includes(props?.smartupPosts?.edges[i]?.node?.smartupCategories?.edges[j]?.node?.id))
                            {
                                tempStorage.push(props?.smartupPosts?.edges[i]) 
                                break;
                            }
                        }
                    }
                    console.log("tempStorage::",tempStorage)
                    setInitialPosts(tempStorage)                
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
        }
        const populateCategoryData= async()=>{
            
              if(props.smartupCategories)
              {
                
                setCategoryData(props.smartupCategories?.edges)
              }
        }
        const fetchTagsData=async()=>{
           
            const response=await gqlRequest({
                "operationName": "getAllTags",
                "query": ` query getAllTags{
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
              })
              if(response.success===true)
              {
                
                setTagData(response?.data?.tags?.edges)
                console.log("response of tags",response)
              }
        }
        const fetchPostLatestYear=async()=>{
            const response=await gqlRequest({
                "operationName": "getLatestYear",
                "query": `query getLatestYear{
                    posts(first:1){
                      edges{
                        node{
                          title
                          date
                        }
                      }
                    }
                  }`,
              })
              if(response.success===true)
              {
                if(response?.data?.posts?.edges?.length>0)
                {
                    // setYearInfo(prev=>{return {...prev,latestYear:dayjs(response?.data?.posts?.edges[0]?.node.date).format("YYYY")}})
                    const latestYear=dayjs(response?.data?.posts?.edges[0]?.node?.date).format("YYYY")
                    yearInfo.current.latestYear=latestYear
                }
                console.log("response of latestyear",response)
              }
        }
        const fetchPostStartingYear=async()=>{
            const response=await gqlRequest({
                "operationName": "getStartingYear",
                "query": `query getStartingYear{
                    posts(last:1){
                      edges{
                        node{
                          title
                          date
                        }
                      }
                    }
                  }`,
              })
              if(response.success===true)
              {
                if(response?.data?.posts?.edges?.length>0)
                {
                    //populate years
                    let startingYear=dayjs(response?.data?.posts?.edges[0]?.node.date).format("YYYY")
                    yearInfo.current.startingYear=startingYear
                    startingYear=parseInt(startingYear)
                    console.log("startingYear:",startingYear)
                    let latestYear=parseInt(yearInfo?.current?.latestYear)||parseInt(new Date().getFullYear())
                    if(latestYear===NaN||latestYear===undefined)
                    {
                        latestYear=parseInt(new Date().getFullYear())
                    }
                    console.log("latestYear:",latestYear)
                    const tempYearArray=[]
                    //test for nan
                    //startingYear=Nan
                    //latestYear=NaN
                    if(startingYear!==undefined&&startingYear!==NaN&&latestYear!==undefined&&latestYear!==NaN)
                    {
                        for(let i=startingYear;i<=latestYear;i++)
                        {
                            tempYearArray.push(i)
                        }
                        console.log("tempYearArray",tempYearArray)
                        setYearInfoArray(tempYearArray)
                    }
                   
                }
                console.log("response of latestyear",response)
              }
        }
        // fetchPostsInitial()

        populateInitialPostFromProps(props)
        populateCategoryData()
        fetchTagsData()
        fetchPostLatestYear()
        fetchPostStartingYear()
        console.log("useEffect is triggered")
      
    },[router.isReady])
    useEffect(()=>{
        if(yearInfoArray.length===0)
        {
            setSelFilter(1)
        }
    },[yearInfoArray])
    console.log("pageInfo",pageInfo)
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
        setIndex(index + 6)
        
    }
    const handleYearsCheck= async(e,item)=>{
        if(e.target.checked===true)
        {
            yearChoosen.current=item


        }
        if(e.target.checked===false)
        {
            if(yearChoosen.current===item)
            {
                yearChoosen.current=null
            }

        }
        setInitialPosts([])
        pageInfo.current.endCursor=null


    }
    const handleCategoriesCheck=async (e,item)=>{
        if(e.target.checked===true)
        {
            categoriesList.current.push(item?.node?.id)

        }
        if(e.target.checked===false)
        {
            categoriesList.current=categoriesList.current.filter(cat=>cat!=item?.node?.id)

        }
        // setInitialPosts([])
        // pageInfo.current.endCursor=null
        //make initialposts to be filtered
        if(categoriesList?.current?.length===0)
        {
            setInitialPosts(props?.smartupPosts?.edges)
        }
        else if(categoriesList?.current?.length>0)
        {
            //filter and set only those which are selected
            let tempStorage=[]
            for( let i=0;i<props?.smartupPosts?.edges?.length;i++)
            {
                console.log("i iteration",props?.smartupPosts?.edges[i].node)

                for(let j=0;j<props?.smartupPosts?.edges[i]?.node?.smartupCategories?.edges?.length;j++)
                {
                    console.log("j iteration",props?.smartupPosts?.edges[i]?.node?.smartupCategories?.edges[j])
                    if(categoriesList.current.includes(props?.smartupPosts?.edges[i]?.node?.smartupCategories?.edges[j]?.node?.id))
                    {
                        tempStorage.push(props?.smartupPosts?.edges[i]) 
                        break;
                    }
                }
            }
            console.log("tempStorage",tempStorage)
            setInitialPosts(tempStorage)
        }


    }
    const handleTagsCheck=async(e,item)=>{
        if(e.target.checked===true)
        {
            tagsList.current.push(item?.node?.id)

        }
        if(e.target.checked===false)
        {
            tagsList.current=tagsList.current.filter(cat=>cat!=item?.node?.id)

        }
        setInitialPosts([])
        pageInfo.current.endCursor=null

    }

    const filterByCty = (filteredData) => {
        console.log(selectedCty, selectedCty1)
        // Avoid filter for empty string
        if (!selectedCty || selectedCty1) {
            return filteredData;
        }
        const filteredPost = filteredData
        // const filteredPost = filteredData.filter(
        //     // post.tag.split(" ").indexOf(selectedCty) !== -1
        //     (post) => post.tag==selectedCty
        // );
        selectedCty.map((item, index) => {
            if (item && index == ((selectedCty.length) - 1)) {
                filteredPost = filteredPost.filter((i) => i.tag == item)

            }
        })

        return filteredPost;
    };

    const filterByYear = (filteredData) => {

        // Avoid filter for empty string
        if (!selectedYr) {
            return filteredData;
        }
        const filteredPost = filteredData
        selectedYr.map((item, index) => {
            if (item && index == ((selectedYr.length) - 1)) {
                filteredPost = filteredPost.filter((i) => i.year == item)

            }
        })

        return filteredPost;
    };


    const handleOnChange = (e, option) => {
        const checked = e.target.checked

        if (checked) {
            setSelectedCty((prev) => [...prev, option])
        }
        if (!checked) {
            setSelectedCty(selectedCty?.filter(e => e !== option))
        }
    }

    const handleOnChangeY = (e, option) => {
        const checked = e.target.checked

        if (checked) {
            setSelectedYr((prev) => [...prev, option])
        }
        if (!checked) {
            setSelectedYr(selectedYr?.filter(e => e !== option))
        }
    }

    const getSearchPostids=async ()=>{
        const response=await gqlRequest({
            "operationName": "getSmartupQuery",
            "query": ` query getSmartupQuery($searchText:String){
                smartups(where:{search:$searchText}){
                    edges{
                      node{
                        id
                      }
                    }
                  }
              }`,
              variables:{searchText:searchText.current}
          })
          if(response.success===true)
          {
            let smartupIds=response?.data?.smartups?.edges?.map((item)=>{
                return item?.node?.id
            })
            let tempStorage=props?.smartupPosts?.edges?.filter((item)=>{
                return smartupIds?.includes(item?.node?.id)
            })
            setInitialPosts(tempStorage)
          }
    }
    useEffect(() => {
        var filteredData = filterByCty(data);
        filteredData = filterByYear(filteredData);
        setFilteredList(filteredData);
    }, [selectedCty, selectedYr, selectedCty1])

    return (
        <Container>
            <div className={styles.news_blog_container}>
                <div className={styles.news_blog_L} >
                    <div className={styles.title}>
                        MS Smartup Blogs
                    </div>
                    <div className={styles.selectionWrapper}>
                        <div className={styles.filter} onClick={() => { setIsFilter(!isFilter) }}>
                            <div className={styles.filterBy}>Filter By</div>
                            <div >
                                <Image src="/images/downArrow.svg" alt="" width={20} height={20} />
                            </div>

                        </div>
                        {/* <div className={styles.searchWrapper}>
                            <div className={styles.searchBar}>
                                <input type="search" className={styles.input_field} placeholder="Enter Your Search Keyword" onChange={async(event) => {setQuery(event.target.value);searchText.current=event.target.value
                                if(event.target.value==='')
                                {
                                    setInitialPosts(props?.smartupPosts?.edges)
                                    pageInfo.current.endCursor=null
                                }}} />
                            </div>
                            <div onClick={async(e)=>{
                                        console.log("clicked search")
                                        setInitialPosts([])
                                        //call api to get post ids
                                        getSearchPostids()


                                        pageInfo.current.endCursor=null
                                    }} >
                                        <div className={styles.webOnly}>
                                        <Button value="Search" backgroundColor="#D5AF32" color="#192B3A"  style={{ border: "2px solid black", fontSize: 20 }} arrowH={20} arrowW={12}
                                    height="70px" src="/images/LarrowB.svg" />
                                        </div>
                                        <div className={styles.mobOnly}>
                                        <Button value="Search" backgroundColor="#D5AF32" color="#192B3A"  style={{ border: "2px solid black", fontSize: 20 }} arrowH={20} arrowW={12}
                                    height="50px" src="/images/LarrowB.svg" />
                                        </div>
                              

                            </div>
                        </div> */}
                    </div>
                    {isFilter ?
                        <div className={styles.filterWrapper}>
                            <div className={styles.Fhead}>
                                {/* {yearInfoArray.length>0?<div onClick={() => setSelFilter(0)} className={selFilter == 0 ? styles.FheadTitleY : styles.FheadTitle}>Year</div>:null} */}
                                <div onClick={() => setSelFilter(1)} className={selFilter == 1 ? styles.FheadTitleY : styles.FheadTitle}>Category</div>
                                {/* <div onClick={() => setSelFilter(2)} className={selFilter == 2 ? styles.FheadTitleY : styles.FheadTitle}>Tags</div> */}
                            </div>
                            {selFilter == 0 ?
                                <div className={styles.Fcontent}>

                                    {yearInfoArray.length>0&&yearInfoArray?.map((item, index) => {
                                        return (
                                            <div className={styles.Fcontent_box} key={index} onChange={async(e) => {handleOnChangeY(e, item);
                                               await handleYearsCheck(e, item)
                                                
                                                }} >
                                                {/* <input type="checkbox" id={item} name={item} value={item} />
                                        <label htmlFor={item}>{item}</label> */}
                                                <label className={styles.check_container}>{item}
                                                    <input type="checkbox" checked={yearChoosen.current===item?true:false}/>
                                                    <span className={styles.checkmark}></span>
                                                </label>
                                            </div>
                                        )
                                    })}
                                                                        

                                </div>
                                : selFilter == 1 ?
                                    <div className={styles.Fcontent}>
                                        {categoryData?.map((item, index) => {
                                            return (

                                                <div className={styles.Fcontent_box} key={index} onChange={async(e) =>{ handleOnChange(e, item);
                                                   await handleCategoriesCheck(e, item)
                                                }} >
                                                    {/* <input type="checkbox" id={item} name={item} value={item} />
                                                    <label htmlFor={item}>{item}</label> */}
                                                    <label className={styles.check_container}>{item?.node?.name} 
                                                        <input type="checkbox" checked={categoriesList?.current?.includes(item?.node?.id)?true:false}/>
                                                        <span className={styles.checkmark}></span>
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </div> :
                                    <div className={styles.Fcontent}>
                                        
                                        {tagData?.map((item, index) => {
                                            return (

                                                <div className={styles.Fcontent_box} key={index} onChange={async(e) => {handleOnChange(e, item);
                                                    await handleTagsCheck(e,item)}}>
                                                    
                                                    <label className={styles.check_container}>{item?.node?.name}
                                                        <input type="checkbox" checked={tagsList?.current?.includes(item?.node?.id)?true:false}/>
                                                        <span className={styles.checkmark}></span>
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </div>
                            }

                        </div> : ""}
                   
                </div>
                
                <div className={styles.news_blog_R} data-aos="fade-up">
                    {
                        initialPosts?.map((post, index) => {
                            return (
                                <div className={styles.blogCardWrap} key={`blog-card-${index}-${Date.now()}`}>
                                    <Link href={`/smartup/${post?.node?.slug}`} passHref key={index}>
                                        <div className={styles.postWrap+" "+styles.postWrapSpecific}>
                                            <div className={styles.testPostWrap}>
                                            {/* <div className={styles.postThumbnail}>
                                                {console.log("img url :",post?.node?.featuredImage?.node?.sourceUrl)}
                                                <Image src={`${post?.node?.featuredImage?.node?.sourceUrl||'/images/defaultThumbnail.png'}`} style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} alt="" width="414" height="263" />
                                            </div> */}
                                            <div className={styles.postThumbnail}>
                                                {console.log("img url :",post?.node?.featuredImage?.node?.sourceUrl)}
                                                <Image src={`${post?.node?.featuredImage?.node?.sourceUrl||'/images/defaultThumbnail.png'}`} style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} alt="" layout="fill" objectFit="cover"/>
                                            </div>
                                            <div className={styles.post_content}>
                                                <div className={styles.categoryInfo}>
                                                    <span className={styles.categoryInfoTitle}>Category:</span>
                                                    {/* <span className={styles.categoryInfoCategories}> */}
                                                        {post?.node?.smartupCategories?.edges?.map((item,index)=>{

                                                        return <span className={styles.categoryInfoCategory} key={`category-${index}-${Date.now()}`}>{item?.node?.name}</span>
                                                    })}
                                                    {/* </span> */}
                                                    

                                                </div>
                                                <div className={styles.post_date}>{dayjs(post?.node?.date).format('MMMM DD, YYYY')} <span>{/*"post.reading_duration"*/}{`${readTime(post?.node?.content||'1')} mins read` }</span></div>

                                                <div className={styles.post_title} dangerouslySetInnerHTML={{ __html: post?.node?.title?.length>98?post?.node?.title?.substr(0,98)+"...":post?.node?.title }} ></div>
                                                {/* <div className={styles.post_title} >{post?.node?.title?.length>98?post?.node?.title?.substr(0,98)+"...":post?.node?.title }</div> */}

                                                <div className={styles.read_more}>Read More <span  className={styles.read_arrow} >
                                                
                                                <Image src="/images/LarrowY.svg" alt="" width="15" height="15" />
                                    
                                            </span></div>
                                            </div>
                                            </div>
                                            
                                        </div>
                                    </Link>
                                    </div>
                            )

                        })
                    }

                </div>

                {initialPosts.length===0? <div style={{ marginTop: 30, display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <ButtonYellowSimple value="No results found!" backgroundColor="#D5AF32" color="#192B3A" width="328px" style={{ border: "2px solid black", fontSize: 20 }}
                            height="70px"/>

                    </div>:null}
            </div>
        </Container>
    )
}

export default Smartup_Blogs_section