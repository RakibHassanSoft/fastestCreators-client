import React from 'react';
import ServiceTab from '../../components/service/ServiceTab';
import FAQTabs from '../../components/FaqTabs/FAQTabs';
import Feedback from '../Pricing/Feedback';

const MainService = () => {
    return (
        <div>
            <ServiceTab/>
            <FAQTabs/>
            <Feedback/>
        </div>
    );
};

export default MainService;