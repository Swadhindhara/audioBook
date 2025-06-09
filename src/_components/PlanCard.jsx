
import { Button } from '@/components/ui/button'
import { generateOrder } from '@/store/orderSlice';
import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm';

const PlanCard = ({ props, onBuy  }) => {

        

    const getDurationLabel = (validity) => {
        if (validity === 30) return 'Monthly';
        if (validity === 365) return 'Yearly';
        if (validity === 7) return 'Weekly';
        return `${validity} Days`;
    };
    const getDuration = getDurationLabel(props.validity);

    return (
        <>
            <div className="plan_card min-h-[400px] border-2 border-amber-600 px-4 py-12 flex flex-col items-start gap-10 rounded-2xl hover:scale-105 duration-300 hover:shadow-2xl shadow-lg">
                <div className="planName flex flex-col gap-3">
                    <h3 className='font-[Nunito] font-semibold text-xl md:text-2xl'>{props.title}</h3>
                    <p className={`bg-amber-600 text-white text-center py-1 rounded-full px-3 text-sm ${props.bestValue ? '' : 'invisible'}`}>

                        Best Value</p>

                </div>
                <div className="price">
                    <p className='font-[Nunito] md:text-3xl text-2xl font-bold'>₹ {props.price}/  {getDuration}</p>
                </div>
                <div className="features">
                    <ul className='flex flex-col gap-3 ml-4'>
                        <li className='list-disc'>{props.desc}</li>
                    </ul>
                </div>
                {/* <Button className={`w-full bg-black text-white rounded-full cursor-pointer hover:bg-amber-600`} onClick={() => handlePayment(props)}>Buy Plan</Button> */}
                      <Button className={`w-full bg-black text-white rounded-full cursor-pointer hover:bg-amber-600`} onClick={() => onBuy(props)}>Buy Plan</Button>

            </div>
        </>


    )
}

export default PlanCard