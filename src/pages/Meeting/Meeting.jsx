import React from 'react';
import MeetingInput from './MeetingInput';
import ServiceProvider from '../../components/ServiceProvider/ServiceProvider';

const Meeting = () => {
    return (
        <div className='max-w-7xl mx-auto p-6  '>
            <MeetingInput />
            <ServiceProvider />
        </div>
    );
};

export default Meeting;