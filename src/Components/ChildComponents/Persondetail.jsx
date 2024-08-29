import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadinfo, removeinfo } from '../../Store/actions/personAction';
import Loding from '../ChildComponents/Loding';
import HorizontalCards from './HorizontalCards';
// import LoadingBar from 'react-top-loading-bar';
import Dropdown from './Dropdown';


const Persondetail = () => {


  const path_name = useLocation();
  const { id } = useParams()
  const dispatch = useDispatch();
  const [cetagory, setcetagory] = useState("movie")

  const nevigate = useNavigate();
  const { info } = useSelector((state) => state.person)

  console.log(info)

  useEffect(() => {
    dispatch(asyncloadinfo(id))

    return () => {
      // cleanup
      dispatch(removeinfo())
    }
  }, [id])


  return info ? (
    <div className='w-full h-max bg-black text-zinc-400 px-20'>
      <nav className='  w-full h-[12vh] text-sl flex items-center gap-6'>
        <Link onClick={() => nevigate(-1)} ><i className="ri-arrow-left-line text-2xl text-red-800 "></i></Link>
      </nav>
      <div className='w-full flex'>
        <div className='w-[20%]  flex flex-col'>
          <div className=''>
            <img className=' h-[50vh] content-cente object-cover ' src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} alt="" />
            <hr className='w-[75%] mt-3 relative left-1 border-zinc-400  ' />
            <div className='flex w-[80%] h-7 mt-2 px-4 justify-between text-white items-center'>
            <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-link"></i></a>
              <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i class="ri-facebook-fill"></i></a>
              <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i class="ri-instagram-fill"></i></a>
              <a target='_blank' href={`https://x.com/${info.externalid.twitter_id}`}><i class="ri-twitter-x-fill"></i></a>
            </div>
            <div className='mt-5'>
              <h1 className='text-2xl   font-medium '>Person Info</h1>

              <h1 className='text-lg  mt-3'>Know for</h1>
              <h2 className=' text-sm'>{info.detail.known_for_department}</h2>
              <h1 className='text-lg  mt-3'>Gender</h1>
              <h2 className=' text-sm'>{info.detail.gender === 2 ? "mail" : "famil"}</h2>
              <h1 className='text-lg  mt-3'>Birthday</h1>
              <h2 className=' text-sm'>{info.detail.birthday}</h2>
              {info.detail.deathday == null ? <></> :
                <div>
                  <h1 className='text-lg  mt-3'>Deathday</h1>
                  <h2 className=' text-sm'>{info.detail.deathday}</h2>
                </div>
              }
              <h1 className='text-lg  mt-3'>Place Of Birth</h1>
              <h2 className=' text-sm'>{info.detail.place_of_birth}</h2>
              {/* slice(0, 7) */}
              <h1 className='text-lg  mt-3'>Also Know As</h1>
              <h2 className=' text-sm' title={info.detail.also_known_as}>{info.detail.also_known_as.slice(0, 3).join(", ")}...more</h2>
            </div>
          </div>
        </div>
        <div className='w-[80%] ml-5'>
          <div>
            <h1 className='font-black text-5xl  text-white '>{info.detail.name}</h1>
            <h1 className=' font-semibold  text-lg mt-5'>Biography</h1>
            <p className='mt-2 text-sm ' title={info.detail.biography}>{info.detail.biography.slice(0, 500)}...<span className='text-blue-700'>more</span></p>
          </div>
          <div className='mt-4'>
            <h1 className='text-lg  font-semibold'>Known for</h1>
            <HorizontalCards data={info.movieCredits.cast} />
            <div className='w-full flex justify-between px-5 items-center'>
              <h1 className='text-lg  font-semibold'>Acting</h1>
              <Dropdown title={cetagory} options={["tv", "movie"]} func={(e) => setcetagory(e.target.value)} />
            </div>
            <div className='w-full h-[60vh] mt-5  overflow-x-hidden  overflow-y-auto shadow-lg  shadow-[rgba(255,255,255,.3)] mb-10 p-5 border-zinc-300'>
              {info[cetagory+"Credits"].cast.map((c,i)=>( <li key={i} className=' hover:text-white rounded p-3 text-sm hover:bg-zinc-900 duration-300 cursor-pointer'>
               <Link to={`/${cetagory}/detail/${c.id}`}>
               <span>  {c.original_title || c.name || c.original_name || c.title}</span>
               <span className='block'>{c.character}</span>
               </Link>
              </li>))}

            </div>

          </div>
        </div>
      </div>

    </div>
  ) : <Loding/>
}

export default Persondetail


// 84358 37006 2 2002