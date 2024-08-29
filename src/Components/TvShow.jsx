import React, { useEffect, useState } from 'react'
import Sidenav from './ChildComponents/Sidenav'
import Headname from './ChildComponents/Headname'
import TopNav from './ChildComponents/TopNav'
import Dropdown from './ChildComponents/Dropdown'
import axios from '../utils/axios'
import Card from './ChildComponents/Card'
import LoadingBar from 'react-top-loading-bar'
import Loding from './ChildComponents/Loding'
import InfiniteScroll from 'react-infinite-scroll-component';

const TvShow = () => {

    
  const [Tvshow, setTvshow] = useState([])
  const [cetagorey, setcetagorey] = useState("airing_today")
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true)



  const getTvshow = async () => {
    try {
      const { data } = await axios.get(`/tv/${cetagorey}?page=${page}`);
      // setTvshow(data.results);
      if (data.results.length > 0) {
        setTvshow((prevdata) => [...prevdata, ...data.results]);
        setpage(page + 1);

      } else {
        sethasMore(false);
      }


    } catch (error) {
      console.log("error", error);
    }

  }


  const refresHandler = () => {
    if (Tvshow.length === 0) {
      getTvshow();
    } else {
      setpage(1);
      setTvshow([]);
      getTvshow();
    }
  }

  useEffect(() => {

    refresHandler();

  }, [cetagorey])




  return Tvshow.length > 0 ? (
    <div className='flex w-full h-full overflow-hidden'>
      <div className='w-[20%]'> <Sidenav /></div>
      <div className='flex flex-col w-[80%] h-full relative '>
        <div className='w-full h-[10vh] flex justify-between gap-5 items-center px-1 py-5 '>
          <Headname value={"Tvshow"} />
          <TopNav />
          <div className=' w-max flex justify-between relative items-center'>
            <Dropdown title="Cetagorey" options={["popular","top_rated","on_the_air","airing_today"]} func={(e) => setcetagorey(e.target.value)} />
          </div>
        </div>
        <div className=''>
          <InfiniteScroll
            dataLength={Tvshow.length} //This is important field to render the next data
            next={getTvshow()}
            hasMore={true}
            loader={<></>}
          >
            <Card data={Tvshow} title="Tv" />
          </InfiniteScroll>
        </div>
      </div>

    </div>
  ) :<LoadingBar progress={90} />
  // <Loding />
}



export default TvShow
