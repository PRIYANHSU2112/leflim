import React, { useEffect, useState } from 'react'
import Sidenav from './ChildComponents/Sidenav'
import Headname from './ChildComponents/Headname'
import TopNav from './ChildComponents/TopNav'
import Dropdown from './ChildComponents/Dropdown'
import axios from '../utils/axios'
import Card from './ChildComponents/Card'
// import LoadingBar from 'react-top-loading-bar'
import Loding from './ChildComponents/Loding'
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar'



const Popular = () => {


  const [Popular, setPopular] = useState([])
  const [cetagorey, setcetagorey] = useState("movie")
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true)



  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${cetagorey}/popular?page=${page}`);
      // setPopular(data.results);
      if (data.results.length > 0) {
        setPopular((prevdata) => [...prevdata, ...data.results]);
        setpage(page + 1);
        console.log(data);

      } else {
        sethasMore(false);
      }


    } catch (error) {
      console.log("error", error);
    }

  }


  const refresHandler = () => {
    if (Popular.length === 0) {
      getPopular();
    } else {
      setpage(1);
      setPopular([]);
      getPopular();
    }
  }

  useEffect(() => {

    refresHandler();

  }, [cetagorey])



  return(
    <div className='flex w-full h-full overflow-hidden'>
      <div className='w-[20%]'> <Sidenav /></div>
      <div className='flex flex-col w-[80%] h-full relative '>
        <div className='w-full h-[10vh] flex justify-between gap-5 items-center px-1 py-5 '>
          <Headname value={"Popular"} />
          <TopNav />
          <div className=' w-max flex justify-between relative items-center'>
            <Dropdown title="Cetagorey" options={["tv", "movie"]} func={(e) => setcetagorey(e.target.value)} />
          </div>
        </div>
       { Popular.length > 0 ?  <div className=''>
          <InfiniteScroll
            dataLength={Popular.length} //This is important field to render the next data
            next={getPopular()}
            hasMore={true}
            loader={<></>}
          >
            <Card data={Popular} title={cetagorey} />
          </InfiniteScroll>
        </div> : <LoadingBar progress={90} />}
      </div>

    </div>
  )
  // <Loding />
}


export default Popular



