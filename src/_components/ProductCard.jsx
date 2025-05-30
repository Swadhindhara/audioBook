import React from 'react' 
import b4 from './../assets/images/b4.jpg'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <>
        <div className="card w-1/4 flex items-center justify-center flex-col gap-3 cursor-pointer">
            <div className="top w-full shadow-lg rounded-xl relative">
                <img src={b4} alt="image" className='w-full rounded-xl h-80 object-cover'/>
                <Link to={'/product'} className="cart flex items-center justify-center absolute top-4 right-4 cursor-pointer rounded-full w-12 h-12 bg-amber-600 text-white duration-200 hover:bg-black hover:text-white"><ShoppingCart  className='w-5'/></Link>
            </div>
            <div className="bottom">
                <div className="details flex items-center justify-center flex-col gap-1">
                    <p className='font-[Nunito] font-bold text-xl'>Lorem ipsum dolor.</p>
                    <div className="price flex items-center gap-4">
                        <span className='text-amber-600'>₹ 70.00</span>
                        <strike>₹ 80.00</strike>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard