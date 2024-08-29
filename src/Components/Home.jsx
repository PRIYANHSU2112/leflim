import React, { useEffect, useState } from 'react'
import Sidenav from './ChildComponents/Sidenav'
import TopNav from './ChildComponents/TopNav'
import Header from './ChildComponents/Header'
import axios from '../utils/axios'
import HorizontalCards from './ChildComponents/HorizontalCards'
import Dropdown from './ChildComponents/Dropdown'
import Loding from './ChildComponents/Loding'
import LoadingBar from 'react-top-loading-bar'

const Home = () => {

  const [wallpaper, setWallpaper] = useState([])
  const [Trending, setTrending] = useState(null)
  const [cetagorey, setcetagorey] = useState("all")


  const getWallpaper = async () => {
    try {

      const { data } = await axios.get(`/trending/all/day`);

      const randomWallpapers = [];
      const dataResultsLength = data.results.length;

      for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * dataResultsLength);
        randomWallpapers.push(data.results[randomIndex]);
      }

      setWallpaper(randomWallpapers) // Step 2: Set the array of random items in the state
    } catch (error) {
      console.log("error", error);
    }
  }

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${cetagorey}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("error", error)
    }

  }



  useEffect(() => {
    // if (!wallpaper.length)getWallpapers();
    getTrending();
    !wallpaper.length && getWallpaper();
  }, [cetagorey])


  return (wallpaper && Trending) ? (
    <>
      <div className='w-[20%] h-full border-zinc-300 ' >
        <Sidenav />
      </div>
      <div className='w-[80%] overflow-hidden overflow-y-auto h-full'>
        <TopNav />
        <Header data={wallpaper} />
        <div className='flex w-full h-[10vh]  mt-5 items-center relative justify-between'>
          <h1 className='text-zinc-300  ml-4 font-semibold text-3xl'>Trending</h1>
          <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e) => setcetagorey(e.target.value)} />
        </div>
        <HorizontalCards data={Trending} />
      </div>
    </>
  ) : <Loding />
}

export default Home
