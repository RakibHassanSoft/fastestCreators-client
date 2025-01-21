import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('4111111111111111'); // Dummy Visa Card
  const [expiry, setExpiry] = useState('12/2024');
  const [cvv, setCvv] = useState('123');
  const [amount, setAmount] = useState('10.00'); // Example amount

  const handlePayment = async () => {
    try {
      const tokenResponse = await axios.post('http://localhost:3000/api/payment/token', {
        sellerId: '255102696042', // Replace with your actual Merchant Code
        publishableKey: '0118D43B-C768-45D0-942C-A719636B9486', // Replace with your actual Publishable Key
        ccNo: cardNumber,
        expMonth: expiry.split('/')[0],
        expYear: expiry.split('/')[1],
        cvv
      });

      const { token } = tokenResponse.data;

      const paymentResponse = await axios.post('http://localhost:3000/api/payment', {
        token,
        amount
      });

      console.log(paymentResponse.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='mt-44 mb-44'>
      <h1>2Checkout Payment Integration</h1>
      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="MM/YY"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default Payment;
