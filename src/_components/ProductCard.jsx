import React from 'react' 
import b4 from './../assets/images/b4.jpg'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { assetUrl } from '@/shared/_services/api_service'

    const ProductCard = ({item}) => {        
    return (
    <>
        <Link to={'/product/'+item._id} className="card flex items-center justify-center flex-col gap-3 cursor-pointer">
            <div className="top w-full shadow-lg rounded-xl relative">
                <img src={assetUrl +item.image} alt="image" className='w-full rounded-xl h-42 md:h-72 lg:h-80 object-cover'/>
                <div className="cart flex items-center justify-center absolute top-4 right-4 cursor-pointer rounded-full md:w-12 w-8 h-8 md:h-12 bg-amber-600 text-white duration-200 hover:bg-black hover:text-white"><ShoppingCart  className='md:w-5 w-4'/></div>
            </div>
            <div className="bottom">
                <div className="details flex items-center justify-center flex-col gap-1">
                    <p className='font-[Nunito] font-bold text-lg md:text-xl'>{item.title}</p>
                    <div className="price flex items-center gap-4">
                        <span className='text-amber-600'>₹{item.price}</span>
                        {/* <strike>₹ 80.00</strike> */}
                    </div>
                </div>
            </div>
        </Link>
    </>
  )
}

export default ProductCard