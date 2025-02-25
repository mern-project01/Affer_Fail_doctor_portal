import React from 'react';
import treatment from '../../../assets/img/treatment 1.png'
import Gradient_Button from '../../../Componets/Gradient_Button/Gradient_Button';

const ServiceBanner = () => {
    return (
      <div>
        <div className="hero my-28">
          <div className="hero-content flex-col lg:flex-row gap-16">
            <img src={treatment} className="md:w-1/3 p-2" />
            <div className="md:w-1/2 p-4">
              <h1 className="text-3xl md:text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <Gradient_Button
              > GET STARTED</Gradient_Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceBanner;