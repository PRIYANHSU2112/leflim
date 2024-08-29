import React from 'react'
import { Link } from 'react-router-dom'


const Sidenav = () => {
  return (
    <div className='w-full h-full px-7 py-3  border-r-[1px]'>
      <Link to={`/`} className='text-xl font-bold text-white tracking-wide	' > <i className=" text-[#E50914] font-bold text-2xl ri-tv-fill"></i> leflim</Link>
      <h1 className='mt-5 font-bold text-white'>New feeds</h1>
      <nav className='relative w-[100%] h-[85%] flex gap-2 flex-col px-1 pt-8'>
        <Link to="/trending"  className=' relative px-5 py-3   text-sm text-zinc-300 hover:border-l-2 border-[#E50914] ease-in duration-800 hover:bg-zinc-900 '><i className="ri-fire-fill"></i> Trending</Link>
        <Link to='/popular' className=' relative px-5 py-3   text-sm text-zinc-300 hover:border-l-2 border-[#E50914] ease-in duration-800 hover:bg-zinc-900'><i className="ri-bard-fill"></i> Popular</Link>
        <Link to="/movie " className=' relative px-5 py-3   text-sm text-zinc-300 hover:border-l-2 border-[#E50914] ease-in duration-800 hover:bg-zinc-900'><i className="ri-movie-2-fill"></i> Movies</Link>
        <Link to="/tv" className=' relative px-5 py-3   text-sm text-zinc-300 hover:border-l-2 border-[#E50914] ease-in duration-800 hover:bg-zinc-900'><i className="ri-tv-2-fill"></i> Tv Shows</Link>
        <Link to="/person" className=' relative px-5 py-3   text-sm text-zinc-300 hover:border-l-2 border-[#E50914] ease-in duration-800 hover:bg-zinc-900'><i className="ri-team-fill"></i> People</Link>

        <hr className='mt-2 mb-2' />

        <Link className=' relative px-5 py-3   text-sm text-zinc-300 hover:border-l-2 border-[#E50914] ease-in duration-800 hover:bg-zinc-900'><i className="ri-information-fill"></i> About</Link>
        <Link className=' relative px-5 py-3   text-sm text-zinc-300 hover:border-l-2 border-[#E50914] ease-in duration-800 hover:bg-zinc-900'><i className="ri-question-fill"></i> Help</Link>
      </nav>
    </div>
  )
}

export default Sidenav
