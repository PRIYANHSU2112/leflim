import React from 'react'
import loader from '../../../public/loding.svg'

const Loding = () => {
  return (
    <div className='w-full h-full bg-black flex justify-center items-center'>
      <img src={loader} alt="" />
    </div>
  )
}

export default Loding
