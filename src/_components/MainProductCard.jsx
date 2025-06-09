import React from 'react'
import b3 from '../assets/images/b3.jpg'
import star from '../assets/graphics/star.png'
import { Headphones } from 'lucide-react'
import { assetUrl } from '@/shared/_services/api_service'
import { Link } from 'react-router-dom'

const MainProductCard = ({product}) => {
  

  return (
    <>
        <Link to ={'/product/'+product._id} className="card w-full flex flex-col gap-3 hover:scale-103 duration-300 cursor-pointer">
            <div className="top rounded-2xl shadow-md">
                <img src={assetUrl +product?.image} alt="" className=' rounded-2xl'/>
            </div>
            <div className="bottom flex flex-col gap-2">
                <p className='font-[Nunito] text-md font-semibold'>{product?.title}</p>
                <div className="box flex items-center justify-between">
                  {/* <p className='text-amber-600 font-[Nunito] text-sm md:text-md'>₹ <span className='font-[Nunito]'>{product?.price}.00</span></p> */}
                  <Headphones className='w-4 lg:w-5 text-amber-600'/>
                </div>
            </div>
        </Link>
    </>
  )
}

export default MainProductCard