import React, { useEffect, useState } from 'react'
import Sidenav from './ChildComponents/Sidenav'
import Headname from './ChildComponents/Headname'
import TopNav from './ChildComponents/TopNav'
// import Dropdown from './ChildComponents/Dropdown'
import axios from '../utils/axios'
import Card from './ChildComponents/Card'
import LoadingBar from 'react-top-loading-bar'
// import Loding from './ChildComponents/Loding'
import InfiniteScroll from 'react-infinite-scroll-component';


const people = () => {
    
    
  const [person, setperson] = useState([])
  const [cetagorey, setcetagorey] = useState("popular")
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true)



  const getperson = async () => {
    try {
      const { data } = await axios.get(`/person/${cetagorey}?page=${page}`);
      // setperson(data.results);
      if (data.results.length > 0) {
        setperson((prevdata) => [...prevdata, ...data.results]);
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
    if (person.length === 0) {
      getperson();
    } else {
      setpage(1);
      setperson([]);
      getperson();
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
          <Headname value={"person"} />
          <TopNav />
          {/* <div className=' w-max flex justify-between relative items-center'>
            <Dropdown title="Cetagorey" options={["popular","top_rated","on_the_air","airing_today"]} func={(e) => setcetagorey(e.target.value)} />
          </div> */}
        </div>
       { person.length > 0 ? <div className=''>
          <InfiniteScroll
            dataLength={person.length} //This is important field to render the next data
            next={getperson()}
            hasMore={true}
            loader={<></>}
          >
            <Card data={person} title="person" />
          </InfiniteScroll>
        </div> : <LoadingBar progress={80} /> }
      </div>

    </div>
  )
}

export default people
