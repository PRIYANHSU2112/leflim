import React from 'react'
import { useNavigate } from 'react-router-dom'

const Headname = (props) => {
  const nevigate= useNavigate();
  return (
    <div >
        <div className='w-[30vh]  h-min px-3 py-1 gap-2 flex justify-center items-center text-2xl    '><i onClick={()=>nevigate(-1)}  className="ri-arrow-left-line text-red-700 "></i> <h1 className=' text-white '>{props.value}</h1></div>

    </div>
  )
}

export default Headname
