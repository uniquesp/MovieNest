import React from 'react';
import avengerImage from '../assets/Avnger2.jpg';

const Banner = () => {
  return (
    <div className='h-[20vh] md:h-[80vh]  bg-contain bg-no-repeat bg-black bg-center flex items-end' style={{backgroundImage : `url(${avengerImage})`}}>
      <div className='text-white text-2xl text-center w-full bg-blue-900/60 p-4'>
        Avengers Edgame
      </div>
    </div>
  )
}

export default Banner
