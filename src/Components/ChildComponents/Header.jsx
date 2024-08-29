
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../App.css'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Header = ({data}) => {

  console.log(data)
  return (
    <div className='w-full mt-2 h-[55vh]'> 
        <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper w-[90%] "
       
      >
        {data.map((i,ind)=><SwiperSlide style={{
            background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${ (!i.backdrop_path && !i.profile_path)?"wwemzKWzjKYJFfCeiB57q3r4Bcm.svg":( i.backdrop_path || i.profile_path) })`,
            backgroundPosition:"top 10%",
            backgroundSize:"cover",
            objectFit:"cover"

        }} key={ind} >
          <div className='w-[50vw] relative left-[-15vh] top-10 h-max flex flex-col items-start font-[Gilroy] justify-center'>
            <h1 className=' w-fullflex font-semibold text-white text-4xl'>{i.original_title || i.name || i.original_name || i.title}</h1>
            <p className=' text-[13px] leading-4 text-justify mt-2  text-white w-[70%]'>{i.overview.slice(0,200)}... <Link className='text-blue-400'>more</Link> </p>
            <p className='text-sm mt-2 text-white flex gap-1'><i className="ri-megaphone-fill text-yellow-500 "></i>{i.release_date}<i className="ri-dvd-fill text-yellow-500  "></i>{i.media_type.toUpperCase()}</p>
            <Link to={`${i.media_type}/detail/${i.id}`} className='mt-2 text-white text-sm rounded-sm p-3  bg-[#e50914a7]'>Watch Trailer</Link>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </div>
  )
}

export default Header
