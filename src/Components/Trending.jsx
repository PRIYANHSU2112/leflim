import React, { useEffect, useState } from 'react'
import Sidenav from './ChildComponents/Sidenav'
import Headname from './ChildComponents/Headname'
import TopNav from './ChildComponents/TopNav'
import Dropdown from './ChildComponents/Dropdown'   
import axios from '../utils/axios'
import Card from './ChildComponents/Card'
import Loding from './ChildComponents/Loding'
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar'


const Trending = () => {

    const [Trending, setTrending] = useState([])
    const [cetagorey, setcetagorey] = useState("all")
    const [duration, setDuration] = useState("day")
    const [page, setpage] = useState(1) ;
    const [hasMore, sethasMore] = useState(true)


  const getTrending=async ()=>{
    try {

      const { data } = await axios.get(`/trending/${cetagorey}/${duration}?page=${page}`);
      // setTrending(data.results);
  
      if(data.results.length > 0){
        setTrending((prevdata)=>[...prevdata, ...data.results]);
        setpage(page+1);
        console.log(data);

      }else{
       sethasMore(false);
      }
    
      
    } catch (error) {
      console.log("error",error);
    }
   
  }
//  console.log(Trending)


  const refresHandler= ()=>{
    if(Trending.length === 0){
      getTrending();
    }else{
      setpage(1);
      setTrending([]);
      getTrending();
    }
  }

  useEffect(()=>{
  
     refresHandler();
   
  },[cetagorey,duration])
  

  return (
    <div className='flex w-full h-full overflow-hidden'>
     <div className='w-[20%]'> <Sidenav/></div>
     <div className='flex flex-col w-[80%] h-full relative '>
        <div className='w-full h-[10vh] flex justify-between gap-5 items-center px-1 py-5 '>
        <Headname value={"Tranding"} /> 
        <TopNav />
        <div className=' w-max flex justify-between relative items-center'>
        <Dropdown title="Cetagorey" options={["tv","movie","all"]} func={(e)=>setcetagorey(e.target.value)} />
        <Dropdown title="Duration" options={["day","week"]} func={(e)=>setDuration(e.target.value)}/>
        </div>
        </div>
       {Trending.length>0? <div className=''>
          <InfiniteScroll
          dataLength={Trending.length} //This is important field to render the next data
          next={getTrending()}
          hasMore={true}
          loader={<></>}
          >
            <Card data={Trending} title={cetagorey} />
            </InfiniteScroll>
        </div>: <LoadingBar progress={90}/>}
      </div>
   
    </div>
  )
  // <Loding/>
}

export default Trending
