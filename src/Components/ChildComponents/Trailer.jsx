import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Link, useNavigate, useParams } from 'react-router-dom';
import NotFound from './NotFound';


const Trailer = () => {
    const nevigate = useNavigate();
    const {data}=useParams();     
    console.log(data)
   
  return !(data=="404")?(
    <div className='text-white w-screen h-screen flex justify-center items-center'>
    <Link onClick={() => nevigate(-1)} ><i className="ri-close-large-line absolute text-xl top-5 right-10 "></i></Link>
    <ReactPlayer height={450} width={1080}
     url={`https://www.youtube.com/watch?v=${data}`} />

    </div>
  ):<NotFound/>
}

export default Trailer
