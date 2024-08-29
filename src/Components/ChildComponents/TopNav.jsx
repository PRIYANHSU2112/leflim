import { Result } from 'postcss';
import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const TopNav = () => {
    
  const navigate= useNavigate(-1);

    const [query, setquery] = useState("")

    const [Search, setSearch] = useState([])

    const searchMovie= async ()=>{
      try {
        const {data}= await axios.get(`/search/multi?query=${query}`)
        setSearch(data.results);
      } catch (error) {
        console.log("error",error);
      }
    }

    useEffect(()=>{
       searchMovie()
    },[query])

  return (
    <div className='w-full relative top-1 h-[8vh] flex items-center z-10 justify-start '>
         <div className='gap-3 flex  items-center justify-center'>
            <i className=" text-2xl text-zinc-300 ri-search-2-line"></i>
            <input onChange={(e)=>setquery(e.target.value)} value={query} className='p-3 px-5 h-10 w-80 text-zinc-200 outline-none bg-slate-800 rounded-sm	 ' type="text" placeholder='Search movie...' />
            {query.length>0?<i onClick={()=>setquery("")} className="  text-2xl text-red-600 ri-close-large-line"></i>:""}
            
         </div>      
         <div className=' absolute top-12 left-8  flex flex-col gap-1  max-w-[60vw] max-h-[40vh]  overflow-auto '>
        {Search.map((i, s) =>  <Link to={`/${i.media_type}/detail/${i.id}`} key={s} className='w-[26vw]  flex gap-2 items-center  relative  px-6 py-4 text-zinc-300 text-sm bg-slate-800'> 
        <img className='w-12 h-12 object-cover rounded-sm' src={`https://image.tmdb.org/t/p/original/${ (!i.backdrop_path && !i.profile_path)?"wwemzKWzjKYJFfCeiB57q3r4Bcm.svg":( i.backdrop_path || i.profile_path) }`} alt="" /> <span>{i.original_title || i.name || i.original_name || i.title}</span></Link> )  }
          
         </div>
    </div>
  )
}

export default TopNav;


//  <Link key={index} className='w-full inline-block flex gap-1  relative px-6 py-4 text-zinc-300 text-sm bg-slate-800'> <img src="" alt="" /> <span>hello</span></Link>