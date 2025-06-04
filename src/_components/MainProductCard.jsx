import React from 'react'
import b3 from '../assets/images/b3.jpg'
import star from '../assets/graphics/star.png'
import { Headphones } from 'lucide-react'

const MainProductCard = () => {
  return (
    <>
        <div className="card w-full flex flex-col gap-3 hover:scale-103 duration-300 cursor-pointer">
            <div className="top rounded-2xl shadow-md">
                <img src={b3} alt="" className=' rounded-2xl'/>
            </div>
            <div className="bottom flex flex-col gap-2">
                <p className='font-[Nunito] text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className="box flex items-center justify-between">
                  <p className='text-amber-600 font-[Nunito] text-sm md:text-md'>₹ <span className='font-[Nunito]'>780.00</span></p>
                  {/* <div className="star flex items-center gap-1 text-sm border border-zinc-300 px-1 py-0.5 rounded-md">4.5<img src={star} alt="" className='w-3 h-3 block'/></div> */}
                  <Headphones className='w-4 lg:w-5 text-amber-600'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainProductCard