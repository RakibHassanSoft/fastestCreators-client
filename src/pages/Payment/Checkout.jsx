import React from 'react';
import axios from 'axios';

const Checkout = () => {
  const handleCreatePayment = () => {
    axios.post('http://localhost:3000/create-payment', {
      amount: 1000,
      currency: 'USD',
    })
    .then(res => {
      console.log(res);
      const redirectUrl  = res.data.paymentUrl;
      if(redirectUrl){
        window.location.replace(redirectUrl)
      }
    })
    .catch(err => {
      console.error(err);
    });
  };

  return (
    <div className='mt-44'>
      <button onClick={handleCreatePayment}>handlePayment</button>
    </div>
  );
};

export default Checkout;
