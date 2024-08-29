import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../App.css'

const Card = ({ data,title }) => {
  // console.log(data)
  const media =useLocation().pathname.split("/")[1];
 
  return (
    <div className='w-full h-full flex flex-wrap gap-3 justify-center pb-24 mt-5 items-center overflow-y-auto absolute'>
      {data.map((d, i) => <Link to={`/${media}/detail/${d.id}`} key={i} className='card text-white relative max-w-[15vw] h-[50vh] rounded-md flex justify-center items-center flex-col bg-slate-300 overflow-hidden  shadow-cyan-100 '>
      <img className=' w-full h-full content-center bg-zinc-900  object-cover ' src={`https://image.tmdb.org/t/p/original/${ !(d.poster_path|| d.profile_path)
                ? "wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                : (d.poster_path || d.profile_path)
              }`} alt="" />
      </Link>)}
    </div>
  )
}

export default Card
