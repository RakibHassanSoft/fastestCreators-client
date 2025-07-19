import Hero from "./Hero";
// import ServiceTab from '../../components/service/ServiceTab';
import PaymentTab from "../../components/paymentTab/PaymentTab";
import ContactUs from "../../components/contractUs/contractUs";
import BlogSlider from "../Blog/BlogSlider";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import FreQuentlyAskendAndDiagram from "../../components/FreQuentlyAskendAndDiagram/FreQuentlyAskendAndDiagram";

import PortfolioTab from "../../components/Portfolio/Portfolio";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import useService from "../../hook/useService";
import ServiceTab from "../../components/service/ServiceTab";
import ServiceCategories from "../../components/ServiceCategories/ServiceCategories";
import ServiceProvider from "../../components/ServiceProvider/ServiceProvider";

const Home = () => {
  const { data, isLoading, isError, error, refetch } = useService();
  // Handle error state
  if (isError || error) {
    return (
      <div className="text-red-500 text-center py-8">
        Network problem. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <Hero></Hero>
      <ServiceCategories />
      <ContactUs />
      <AnimatedText />
      <PortfolioTab />
      <FreQuentlyAskendAndDiagram />
      {/* <BlogSlider/> */}
      <AboutCompany />
      <ServiceProvider />
      <PaymentTab />
      <GoogleMap />
    </div>
  );
};

export default Home;
