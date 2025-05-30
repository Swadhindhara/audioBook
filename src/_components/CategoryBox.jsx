import React from 'react'
import b3 from './../assets/images/b3.jpg'
import { Button } from '@/components/ui/button'

const CategoryBox = ({props}) => {

  return (
    <>
        <div className="box relative flex justify-center rounded-xl overflow-hidden">
            <img src={props} alt="image" className='w-full rounded-xl duration-300 ease hover:scale-110'/>
            <div className="details absolute bg-white w-[90%] p-3 bottom-5 rounded-md shadow-md flex items-center justify-center flex-col gap-1">
                <h3 className='font-[Nunito] font-semibold text-2xl'>Lorem ipsum</h3>
                <Button className={`bg-transparent text-black border hover:bg-transparent hover:text-black font-[Nunito] uppercase border-t-0 border-l-0 border-r-0 border-b-black rounded-none cursor-pointer`}>Buy Now</Button>
            </div>
        </div>
    </>
  )
}

export default CategoryBox