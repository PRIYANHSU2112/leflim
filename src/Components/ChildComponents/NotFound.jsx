import React from 'react'
import image from "../../../public/404.png"

const NotFound = () => {
  return (
    <div className='w-full h-full flex justify-center items-center text-white bg-red-800'> 
    <img className='w-[60vh] h-[60vh] object-contai shadow-2xl rounded-md ' src={image} alt="" />   
    </div>
  )
}

export default NotFound
