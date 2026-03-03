import React from 'react'
import Image from 'next/image'

const List = () => {
  return (
    <section className="flex min-h-[75vh] w-[calc(99vw-1px)] flex-col items-center overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-black pb-12">
      <h2 className="text-center text-white mt-8 text-3xl font-bold">Shop Your Favourite Airbuds</h2>
      <div className="list text-white mt-18 items-center justify-center ">
        <div className="card flex flex-col items-center h-[348px] w-[264px] shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-purple-500/50 hover:-translate-y-2">
            <div className="image w-[96%] h-[64%] mt-1 rounded-lg">
            <Image></Image>
            </div>
            <div className="info w-[94%] mt-2">
                <div className="name font-semibold text-xl h-10">
                    Airbuds Pro Max
                </div>
                <div className="flex gap-4 items-center pl-4 mt-2">
                <div className="price text-lg">
                    <span className='text-purple-600 font-semibold'>Price:</span>$400
                </div>
                <button type="button" class="text-white bg-gradient-to-r from-purple-700 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2">Add to Cart</button>
            </div>
            </div>
        </div>
            </div>
   </section>
  )
}

export default List
