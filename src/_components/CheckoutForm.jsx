import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    });


    if (result.error) {
      console.error(result.error.message);
      alert("Payment failed: " + result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        const transactionId = result.paymentIntent.id;
        const amount = result.paymentIntent.amount;
        const currency = result.paymentIntent.currency;
        const clientSecret = result.paymentIntent.client_secret;
        const query = new URLSearchParams({
          transactionId,
          amount,
          currency,
          clientSecret,
        }).toString();
        navigate(`/payment-successful?${query}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement />
      <Button type="submit" disabled={!stripe}>Pay Now</Button>
    </form>
  );
};

export default CheckoutForm;


