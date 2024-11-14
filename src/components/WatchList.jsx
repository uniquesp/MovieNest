import React from 'react'

const WatchList = () => {
  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4'>
        All Geners
      </div>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold mx-4'>
        Action
      </div>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold mx-4'>
        Crime
      </div>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold mx-4'>
        Comedy
      </div>
    </div>

      <div className=' flex justify-center my-4'>
        <input type='text' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' placeholder='Search Movies'></input>
     </div>

     <div className=' overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center' >
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
              <tr className='border-b-2'>
                <td className='flex items-center px-6 py-4'>
                  <img className='h-[7rem] w-[10rem]' src={`https://imgs.search.brave.com/EQNsDgk5sfNTKZ2gYcJWWHE7bLfr8VE2WIQJ_E79UHA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZW1hZ2luZS1lbnRl/cnRhaW5tZW50LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8xMC9Nb2FuYTIt/NjAweDg4OS5qcGc`}></img>
                  <div className='mx-10'> Mona2</div>
                </td>
                <td>8.5</td>
                <td>9</td>
                <td>Action</td>
                <td className='text-red-800'>Delete</td>
              </tr>
          </tbody>
        </table>

     </div>
    </>
  )
}

export default WatchList
