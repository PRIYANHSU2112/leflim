import axios from "axios";


const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjA1YjhjMTU0YjkzOTgzNWY5MjAzMDQ1N2I2ZDA5NyIsIm5iZiI6MTcyMjQxOTk1Ny4zNTU2NTgsInN1YiI6IjY2YTEyNDM3ZTMyZTg5NmQ2NjUyOWRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LNEMN1nz1tMhEgJ2jaa3WFYfBGNYLqZomcDEd4H9ew8'
      }
    
})

export default instance;