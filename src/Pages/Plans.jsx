import { PlanCard } from "@/_components";
import CheckoutForm from "@/_components/CheckoutForm";
import { generateOrder } from "@/store/orderSlice";
import { getsubscription } from "@/store/subscriptionSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Plans = () => {
  const dispatch = useDispatch();
  const subscriptionVar = useSelector((state) => state.subscription)
  const orderVar = useSelector((state) => state.order)  
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getsubscription())
  }, [dispatch])


  const handleBuy = (plan) => {
    setSelectedPlan(plan);
    dispatch(generateOrder(plan.price, plan._id));
     setShowModal(true);
  };

 const handleClose = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <div className="main px-[4%]">
        <div className="container mx-auto">
          <div className="plans py-10 flex items-center justify-center flex-col gap-5">
            <h2 className="font-[Nunito] md:text-4xl text-3xl font-bold">
              Plans & Pricing
            </h2>
            <p className="text-center font-light">
              Choose the plan that fits your needs and scale as you grow
            </p>
            <div className="boxes w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:px-20 md:px-10 px-5 mt-4">
              {subscriptionVar.subscriptionData.map((item, index) => (
                <PlanCard key={index} props={item} onBuy={handleBuy} />
              ))}
            </div>
            {orderVar.orderData.clientSecret && selectedPlan && showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md relative shadow-xl">
            <button
              className="absolute top-3 right-3 text-lg font-bold text-gray-600 hover:text-black"
              onClick={handleClose}
            >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-4">Checkout</h3>
            <CheckoutForm clientSecret={orderVar.orderData.clientSecret} />
          </div>
        </div>
      )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
