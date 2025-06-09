import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import green from "../assets/graphics/green.png";
import { useDispatch } from "react-redux";
import { confirmOrder } from "@/store/orderSlice";

const PaymentSuccess = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = new URLSearchParams(location.search);

  const transactionId = query.get("transactionId");
  const amount = query.get("amount");
  const currency = query.get("currency");
  const clientSecret = query.get("clientSecret");

  const [dateString, setDateString] = useState("");

useEffect(() => {
    const now = new Date();
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    setDateString(now.toLocaleString("en-IN", options));
  }, []);

useEffect(() => {
    const sendTransactionData = async () => {
      try {
        dispatch(confirmOrder(transactionId, amount, currency, clientSecret))
        
      } catch (err) {
        console.error("API call failed:", err);
      }
    };

    sendTransactionData();
    const timer = setTimeout(() => {
      // navigate("/");
    }, 15000);

    return () => clearTimeout(timer);
  }, [transactionId, amount, currency, navigate]);

if (!transactionId || !amount || !currency) {
    return (
      <div className="main px-[4%]">
        <div className="container mx-auto py-18 text-center">
          <p className="text-red-600 text-xl font-semibold">
            Invalid transaction details.
          </p>
        </div>
      </div>
    );
  }


  return (
    <>
      <div className="main px-[4%]">
        <div className="container mx-auto py-18">
          <div className="success flex items-center justify-center flex-col gap-10">
            <div className="box flex items-center justify-center flex-col gap-2">
              <div className="icon flex items-center justify-center bg-green-100 rounded-full w-28 h-28">
                <img src={green} alt="icon" className="w-20 h-20"/>
              </div>
              <p className="font-[Nunito] font-semibold text-2xl md:text-3xl">Payment Successful</p>
              <small className="font-[Rubik] text-zinc-500">Successfully paid ₹ {(amount / 100).toFixed(2)}</small>
            </div>
            <div className="transaction_card border-zinc-500 border rounded-2xl w-full md:w-2/3 lg:w-2/5 
              flex flex-col items-start gap-4 p-4 md:p-6
            ">
              <p className="font-[Nunito] font-semibold text-xl">Transaction Details</p>
              <div className="box flex justify-between w-full items-center">
                <p className="text-zinc-500 text-sm md:text-md">Transaction ID</p>
                <span className="md:text-md text-sm">{transactionId}</span>
              </div>
              <div className="box flex justify-between w-full items-center">
                <p className="text-zinc-500 text-sm md:text-md">Date</p>
                <span className="md:text-md text-sm">{dateString}</span>
              </div>
              <div className="box flex justify-between w-full items-center">
                <p className="text-zinc-500 text-sm md:text-md">Type of transaction</p>
                <span className="md:text-md text-sm">Credit card</span>
              </div>
              <div className="box flex justify-between w-full items-center">
                <p className="text-zinc-500 text-sm md:text-md">Price</p>
                <span className="md:text-md text-sm">₹ {(amount / 100).toFixed(2)}</span>
              </div>
              <div className="box flex justify-between w-full items-center">
                <p className="text-zinc-500 text-sm md:text-md">Status</p>
                <span className="md:text-md text-sm text-green-700 bg-green-100 py-0.5 px-3 rounded-2xl">Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
