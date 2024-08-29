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



const Movie = () => {

    
  const [Movie, setMovie] = useState([])
  const [cetagorey, setcetagorey] = useState("now_playing")
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true)



  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${cetagorey}?page=${page}`);
      // setMovie(data.results);
      if (data.results.length > 0) {
        setMovie((prevdata) => [...prevdata, ...data.results]);
        setpage(page + 1);
        // console.log(data);

      } else {
        sethasMore(false);
      }


    } catch (error) {
      console.log("error", error);
    }

  }


  const refresHandler = () => {
    if (Movie.length === 0) {
      getMovie();
    } else {
      setpage(1);
      setMovie([]);
      getMovie();
    }
  }

  useEffect(() => {

    refresHandler();

  }, [cetagorey])





  return  (
    <div className='flex w-full h-full overflow-hidden'>
      <div className='w-[20%]'> <Sidenav /></div>
      <div className='flex flex-col w-[80%] h-full relative '>
        <div className='w-full h-[10vh] flex justify-between gap-5 items-center px-1 py-5 '>
          <Headname value={"Movie"} />
          <TopNav />
          <div className=' w-max flex justify-between relative items-center'>
            <Dropdown title="Cetagorey" options={["popular","top_rated","upcoming","now_playing"]} func={(e) => setcetagorey(e.target.value)} />
          </div>
        </div>
        {Movie.length > 0 ?<div className=' flex-grow'>
          <InfiniteScroll
            dataLength={Movie.length} //This is important field to render the next data
            next={getMovie()} 
            hasMore={true}
            loader={<></>}
          >
            <Card data={Movie} title={cetagorey} />
          </InfiniteScroll>
        </div>: <LoadingBar progress={90}/>}
      </div>

    </div>
  ) 
  // <Loding />  
}



export default Movie
