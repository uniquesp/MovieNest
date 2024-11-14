import React from 'react'

const Pagination = ({handelPrev, handelNext, pageNo}) => {
  return (
<div className='bg-gray-400 mt-5 flex justify-center items-center h-16 space-x-4'>
    <div onClick={handelPrev} className='px-8'>
        <i className="fa-solid fa-arrow-left text-2xl"></i>
    </div>
    <div className='font-bold'>{pageNo}</div>
    <div onClick={handelNext} className='px-8'>
        <i className="fa-solid fa-arrow-right text-2xl"></i>
    </div>
</div>


  )
}

export default Pagination
