export {removeinfo}  from "../reducers/tvSlice"
import axios from "../../utils/axios";
import {loadimfo}  from "../reducers/tvSlice"

export const asyncloadtv =  (id)=>async (dispatch,getState)=>{
       try {
        const detail=  await axios.get(`/tv/${id}`) 
        const externalid=  await axios.get(`/tv/${id}/external_ids`) 
        const recommendations= axios.get(`/tv/${id}/recommendations`) 
        const similar=  await axios.get(`/tv/${id}/similar`) 
        const videos=  await axios.get(`/tv/${id}/videos`) 
        const watchproviders=  await axios.get(`/tv/${id}/watch/providers`) 
        // const release_date= await axios.get(`/tv/${id}/release_dates`) 
        const review= await axios.get(`/tv/${id}/reviews`) 
        const translation= await axios.get(`/tv/${id}/translations`)

        let ultimatedetails ={
            detail:detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data,
            similar:similar.data.results,
            videos:videos.data,
            watchproviders:watchproviders.data.results.IN,
            // release_date:release_date.data.results,
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