export {removeinfo}  from "../reducers/personSlice"
import axios from "../../utils/axios";
import {loadimfo}  from "../reducers/personSlice"

export const asyncloadinfo =  (id)=>async (dispatch,getState)=>{
       try {
        const detail=  await axios.get(`/person/${id}`) 
        const externalid=  await axios.get(`/person/${id}/external_ids`) 
        const combinedCredits=  await axios.get(`/person/${id}/combined_credits`) 
        const movieCredits=  await axios.get(`/person/${id}/movie_credits`) 
        const tvCredits=  await axios.get(`/person/${id}/tv_credits`) 


        let ultimatedetails ={
            detail:detail.data,
            externalid:externalid.data,
            combinedCredits:combinedCredits.data,
            movieCredits:movieCredits.data,
            tvCredits:tvCredits.data,
        }
        dispatch(loadimfo(ultimatedetails))
       console.log(ultimatedetails)

       } catch (error) {
        console.log(error,"error")
       }
}

// release_dates    