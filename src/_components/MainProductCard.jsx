import React from 'react'
import b3 from '../assets/images/b3.jpg'

const MainProductCard = () => {
  return (
    <>
        <div className="card w-full flex flex-col gap-3 hover:scale-103 duration-300">
            <div className="top rounded-2xl shadow-md">
                <img src={b3} alt="" className=' rounded-2xl'/>
            </div>
            <div className="bottom">
                <p className='font-[Rubik] '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p>₹<span>780.00</span></p>
            </div>
        </div>
    </>
  )
}

export default MainProductCard