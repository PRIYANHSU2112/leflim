
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movie from './Components/Movie'
import TvShow from './Components/TvShow'
import People from './Components/people'
import Moviedetail from './Components/ChildComponents/Moviedetail'
import Persondetail from './Components/ChildComponents/Persondetail'
import Tvdetail from './Components/ChildComponents/Tvdetail'
import Trailer from './Components/ChildComponents/Trailer'
import NotFound from './Components/ChildComponents/NotFound'

function App() {


const [progress, setprogress] = useState(0)



  return (

    <div className='w-full h-screen bg-stone-950 flex'>
      <LoadingBar className='top-0 absolute z-100'
            color="#f11946"
            progress={progress}
      />
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/trending' element={<Trending progress={50} />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/movie/detail/:id' element={<Moviedetail/>} />
        <Route path='/movie/detail/:id/trailer/:data' element={<Trailer/>} />
        <Route path='/tv' element={<TvShow />} />
        <Route path='/tv/detail/:id' element={<Tvdetail/>} />
        <Route path='/tv/detail/:id/trailer/:data' element={<Trailer/>} />
        <Route path='/person' element={<People />} />
        <Route path='/person/detail/:id' element={<Persondetail/>} />


        <Route path='*' element={<NotFound/>} />

      </Routes>

    </div>
  )
}

export default App
