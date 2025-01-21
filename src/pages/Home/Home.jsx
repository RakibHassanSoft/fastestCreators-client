
import Hero from './Hero';
// import ServiceTab from '../../components/service/ServiceTab';
import PaymentTab from '../../components/paymentTab/PaymentTab';
import ContactUs from '../../components/contractUs/contractUs';
import BlogSlider from '../Blog/BlogSlider';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import AboutCompany from '../../components/AboutCompany/AboutCompany';
import FreQuentlyAskendAndDiagram from '../../components/FreQuentlyAskendAndDiagram/FreQuentlyAskendAndDiagram';

import PortfolioTab from '../../components/Portfolio/Portfolio';
import AnimatedText from '../../components/AnimatedText/AnimatedText';

const Home = () => {
    return (
        <div  className='mt-24'>
            <Hero></Hero>
            <ContactUs/>
             <AnimatedText/>
            <PortfolioTab/>
            <FreQuentlyAskendAndDiagram/>
            <BlogSlider/>
            <AboutCompany/>
            <PaymentTab/>
            <GoogleMap/>
            
        </div>
    );
};

export default Home;