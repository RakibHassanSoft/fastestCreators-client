import React, { useEffect, useState } from 'react';
import MainPrice from './MainPrice';
import VideoAndSlideAndPricing from './VideoAndSlideAndPricing';
import LogoDesignForm from '../LogoDesignForm/LogoDesignForm';
import FrequentlyAsked from '../LogoDesignForm/FrequentlyAsked';
import Feedback from './Feedback';
import PaymentTab from '../../components/paymentTab/PaymentTab';
import GigTitle from './GigTitle';
import { useParams } from 'react-router-dom';
import { getPublicData } from '../../BcckendConnection/getData';

const Pricing = () => {
    const { slug } = useParams(); // You can use this id to fetch your data by ID or slug
    const [gig, setGig] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
      const fetchGigData = async () => {
        try {
          // Construct the URL with the ID/slug
          const endpoint = `/gigs/single-gig/slug/${slug}`; // Assuming the slug is passed as the 'id'
          const data = await getPublicData(endpoint);
     
          // Set the fetched data into the state
          setGig(data?.data);
          // console.log(data?.data)
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  

      fetchGigData();
    }, [slug]); // Fetch the data again if the ID changes
  
    // console.log(gig)

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
    // console.log(gig?.feature)

    return (
        <div className='w-full md:w-[95%] lg:w-[90%] m-auto mt-44'>
            {/* gigtile sone  */}
           {/* <GigTitle title={gig?.title} owner ={gig?.owner}/> */}
             {/* this secton is also done  */}
            <VideoAndSlideAndPricing media={gig?.media} whyChooseUs={gig?.whyChooseUs} images={gig?.images} pricing={gig?.pricing}  feature ={gig?.feature} frequently={gig?.frequently} offerings={gig?.offerings} highlights={gig?.highlights}/>
            <h1 className='text-center font-sans text-5xl mb-4 text-green-500 border-2 lg:w-1/3 m-auto border-green-500 rounded-2xl p-4'>Pricing</h1>
            <MainPrice  feature ={gig?.feature}/>
            
            
            <Feedback/>
            <PaymentTab  feature ={gig?.feature}/>
            
        </div>
    );
};

export default Pricing;