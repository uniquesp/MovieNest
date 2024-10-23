import React from 'react'

const MovieCard = ({poster_path,name}) => {
  return (
    <div className='h-[50vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 durarion-300 hover:cursor-pointer' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path})`}}> 
      <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard
