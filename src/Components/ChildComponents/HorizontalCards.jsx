import React from "react";
import "../../App.css";
import { Link, useLocation } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  console.log(data);
  const media =useLocation().pathname.split("/")[1];
  return (
    <div className="h1 w-full h-[60vh] px-10  relative flex justify-center items-center overflow-y-hidden  overflow-x-auto gap-3 ml-4">
      {data.length>0? data.map((i, ind) => (
        <Link to={`/${i.media_type?i.media_type:media}/detail/${i.id}`}
          key={ind}
          className="s1 min-w-[15vw] flex  relative px-3 left-0 rounded-md h-[45vh] "
          style={{
            background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${!i.backdrop_path && !i.poster_path
                ? "wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                : i.backdrop_path || i.profile_path
              })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        >
          <img
            className="w-full h-full object-contain  relative top-[-2vh] "
            src={`https://image.tmdb.org/t/p/original/${!i.backdrop_path && !i.poster_path
                ? "wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                : i.backdrop_path || i.profile_path
              }`}
            alt="" 
          />
          <div className="s2 w-full h-full hidden absolute top-24  ">
            <h1 className=" w-[90%] h-12  object-contain relative  flex top-[-80px] text-center items-center justify-center leading-5 text-white text-[1em] font-black  ">
              {i.original_title || i.name || i.original_name || i.title}
            </h1>
            <p className=" text-[9px] leading-[1.1] text-justify relative top-[30px]   text-white w-[70%]">
              {i.overview.slice(0, 100)}...{" "}
              <samp className="text-slate-400">more</samp>{" "}
            </p>
            <p className="text-[9px] mt-8 relative text-white flex gap-1">
              <i className="ri-megaphone-fill text-yellow-500 "></i>
              {i.release_date}
              <i className="ri-dvd-fill text-yellow-500  "></i>
              {i.media_type}
            </p>
          </div>
        </Link>
      )):<h1>Nothing to shwo</h1>}
    </div>
  );
};

export default HorizontalCards;
