import { Button } from '@/components/ui/button'
import React from 'react'

const PlanCard = () => {
  return (
    <div className="plan_card min-h-[400px] border-2 border-amber-600 px-4 py-12 flex flex-col items-start gap-10 rounded-2xl hover:scale-105 duration-300 hover:shadow-2xl shadow-lg">
        <div className="planName flex flex-col gap-3">
            <h3 className='font-[Nunito] font-semibold text-xl md:text-2xl'>Monthly</h3>
            <p className='bg-amber-600 text-white text-center py-1 rounded-full px-3 text-sm'>Best Value</p>
        </div>
        <div className="price">
            <p className='font-[Nunito] md:text-3xl text-2xl font-bold'>₹ 1100/ Yearly</p>
        </div>
        <div className="features">
            <ul className='flex flex-col gap-3 ml-4'>
                <li className='list-disc'>Save 50%</li>
                <li className='list-disc'>Get 7 days Free</li>
            </ul>
        </div>
        <Button className={`w-full bg-black text-white rounded-full cursor-pointer hover:bg-amber-600`}>Buy Plan</Button>
    </div>
  )
}

export default PlanCard