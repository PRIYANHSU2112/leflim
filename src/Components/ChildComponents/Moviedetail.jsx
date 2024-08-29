import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadinfo, removeinfo } from '../../Store/actions/movieAction';
import Loding from '../ChildComponents/Loding';
import HorizontalCards from './HorizontalCards';
import LoadingBar from 'react-top-loading-bar';

const Moviedetail = () => {
  const path_name=useLocation();
  const { id } = useParams()
  const dispatch = useDispatch();

  const nevigate = useNavigate();
  const { info } =  useSelector((state) => state.movie)

  console.log(info)

  useEffect(() => {
    dispatch(asyncloadinfo(id))

    return () => {
      // cleanup
      dispatch(removeinfo())
    }
  }, [id])
  
  return info ? (
    <div className='text-zinc-300 w-full h-max px-16 scroll-smooth ' style={{
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
      backgroundPosition:"center",
      backgroundSize: "cover",
      objectFit: "cover"
    }}>
      {/* part 1  */}
      <nav className='  w-full h-[12vh] text-sl flex items-center gap-6'>
        <Link onClick={() => nevigate(-1)} ><i className="ri-arrow-left-line"></i></Link>
        <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
        <a target='_blank' href={info.detail.homepage}><i className="ri-external-link-line"></i></a>
        <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>leflim</a>
      </nav>

      {/* part 2 */}
      <div className='w-full flex'>
        <img className=' h-[50vh] content-cente object-cover ' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />
        <div className='ml-[5%]'>

          <h1 className='text-5xl font-black  text-white '>
            {info.detail.original_title || info.detail.name || info.detail.original_name || info.detail.title}
            <small className='text-2xl font-semibold text-zinc-300'>({info.detail.release_date.split("-")[0]})</small>
          </h1>

          <div className=' flex gap-5 items-center mt-4 text-md  font-light'>
            <span className='rounded-full flex items-center justify-center font-semibold  bg-red-800 w-[6vh] h-[6vh]'>{(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className='w-[40px] font-semibold leading-4'>User Score</h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>

          </div>
          <h1 className='mt-4 italic text-white'>{info.detail.tagline}</h1>
          <h1 className='mt-2 text-2xl  text-white font-semibold'>Overview</h1>
          <p className='text-sm font-light leading-4 w-[90%] mt-2 '>{info.detail.overview}</p>
          <div>
          <h1 className=' mt-2 text-xl  text-white'>Languages</h1>
          <h1 className='text-sm font-light ' title={info.translation.translations.map((t)=>t.name).join(",")}>{info.translation.translations.slice(0, 7).map(t => t.name).join(", ")}...<span className='text-sm text-blue-300'>more</span> </h1>
          </div>
        </div>
      </div>
      {/* part 3 */}
      <div className='w-[80%] flex  flex-col mt-10 gap-y-4  font-light'>
        {
          info.watchproviders && info.watchproviders.flatrate && (
            <div className='flex items-center gap-5'>
              <h1 className='text-sm'>Abilable on plateform</h1>
              {info.watchproviders.flatrate.map((w, i) => (
                <img title={w.provider_name} key={i} className='w-[5vh] h-[5vh] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt='' />
              ))}
            </div>
          )
        }
        {
          info.watchproviders && info.watchproviders.buy && (
            <div className='flex items-center gap-5'>
              <h1 className='text-sm'>Abilable on buy</h1>
              {info.watchproviders.buy.map((w, i) => (
                <img title={w.provider_name} key={i} className='w-[5vh] h-[5vh] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt='' />
              ))}
            </div>
          )
        }
        {
          info.watchproviders && info.watchproviders.rent && (
            <div className='flex items-center gap-5'>
              <h1 className='text-sm'>Abilable on rent</h1>
              {info.watchproviders.rent.map((w, i) => (
                <img title={w.provider_name} key={i} className='w-[5vh] h-[5vh] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt='' />
              ))}
            </div>
          )
        }

      </div>
      {/* part 4 */}

       <Link to={`${path_name.pathname}/trailer/${info.videos.results.length >0 ?info.videos.results[0].key:"404"}`} className='right-32 absolute  bg-red-800 px-6 py-3 text-sm  hover:scale-125 transition-transform rounded-sm text-white bottom-20' > <i className="ri-play-fill"></i> Play Trailer</Link>

       
      {/* part 5 */}
      {info.similar.length>0?<div className='mt-4'>
      <h1 className=' text-2xl font-medium text-white '>{info.recommendations>0?"Recommendations":"Similars" }  {useLocation().pathname.split("/")[1]} </h1>           
      <HorizontalCards  data={info.recommendations > 0 ? info.recommendations:info.similar } />
    </div>:<></>}
    </div>
  ) : <Loding />
}

export default Moviedetail
