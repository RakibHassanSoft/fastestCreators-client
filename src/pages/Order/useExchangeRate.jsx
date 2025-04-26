import { useState, useEffect } from 'react';
import axios from 'axios';

const useExchangeRate = () => {
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await axios.get('https://v6.exchangerate-api.com/v6/994654e32a018b0c2b0d9eef/latest/USD');
        setRate(response.data.conversion_rates.BDT);
      } catch (err) {
        setError(err);
      }
    };

    fetchRate();
  }, []);

  return { rate, error };
};

export default useExchangeRate;
