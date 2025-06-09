import React from "react";
import failed from '../assets/graphics/failed.png'

const PaymentFailed = () => {
  return (
    <>
      <>
        <div className="main px-[4%]">
          <div className="container mx-auto py-18">
            <div className="success flex items-center justify-center flex-col gap-10">
              <div className="box flex items-center justify-center flex-col gap-2">
                <div className="icon flex items-center justify-center bg-red-100 rounded-full w-28 h-28">
                  <img src={failed} alt="icon" className="w-20 h-20" />
                </div>
                <p className="font-[Nunito] font-semibold text-2xl md:text-3xl">
                  Payment Unsuccessful
                </p>
                <small className="font-[Rubik] text-zinc-500 text-center">
                  Something went wrong we couldn't process your payment 
                </small>
              </div>
              <div
                className="transaction_card border-zinc-500 border rounded-2xl w-full md:w-2/3 lg:w-2/5 
                      flex flex-col items-start gap-4 p-4 md:p-6
                    "
              >
                <p className="font-[Nunito] font-semibold text-xl">
                  Transaction Details
                </p>
                <div className="box flex justify-between w-full items-center">
                  <p className="text-zinc-500 text-sm md:text-md">
                    Transaction ID
                  </p>
                  <span className="md:text-md text-sm">#888TGUJ99</span>
                </div>
                <div className="box flex justify-between w-full items-center">
                  <p className="text-zinc-500 text-sm md:text-md">Date</p>
                  <span className="md:text-md text-sm">
                    24 June 2025 | 12:25 PM
                  </span>
                </div>
                <div className="box flex justify-between w-full items-center">
                  <p className="text-zinc-500 text-sm md:text-md">
                    Type of transaction
                  </p>
                  <span className="md:text-md text-sm">Credit card</span>
                </div>
                <div className="box flex justify-between w-full items-center">
                  <p className="text-zinc-500 text-sm md:text-md">Price</p>
                  <span className="md:text-md text-sm">₹ 150</span>
                </div>
                <div className="box flex justify-between w-full items-center">
                  <p className="text-zinc-500 text-sm md:text-md">Status</p>
                  <span className="md:text-md text-sm text-red-700 bg-red-100 py-0.5 px-3 rounded-2xl">
                    Failed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default PaymentFailed;
