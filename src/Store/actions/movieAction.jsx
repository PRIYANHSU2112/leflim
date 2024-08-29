export {removeinfo}  from "../reducers/movieSlice"
import axios from "../../utils/axios";
import {loadimfo}  from "../reducers/movieSlice"

export const asyncloadinfo =  (id)=>async (dispatch,getState)=>{
       try {
        const detail=  await axios.get(`/movie/${id}`) 
        const externalid=  await axios.get(`/movie/${id}/external_ids`) 
        const recommendations= axios.get(`/movie/${id}/recommendations`) 
        const similar=  await axios.get(`/movie/${id}/similar`) 
        const videos=  await axios.get(`/movie/${id}/videos`) 
        const watchproviders=  await axios.get(`/movie/${id}/watch/providers`) 
        const release_date= await axios.get(`/movie/${id}/release_dates`) 
        const review= await axios.get(`/movie/${id}/reviews`) 
        const translation= await axios.get(`/movie/${id}/translations`)

        let ultimatedetails ={
            detail:detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data,
            similar:similar.data.results,
            videos:videos.data,
            watchproviders:watchproviders.data.results.IN,
            release_date:release_date.data.results,
            review:review.data.results,
            translation:translation.data

        }
        dispatch(loadimfo(ultimatedetails))
       console.log(ultimatedetails)

       } catch (error) {
        console.log(error,"error")
       }
}

// release_dates