import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceBanner from './ServiceBanner';

const Homeservice = () => {
    return (
      <div className='py-28'>
        <div className='text-center pb-24'>
                <h2 className='text-secondary font-semibold mb-4 '>OUR SERVICES</h2>
                <h1 className='text-accent text-4xl ' >Services We Provide</h1>
        </div>
        <ServiceCard></ServiceCard>
        <ServiceBanner></ServiceBanner>
      </div>
    );
};

export default Homeservice;