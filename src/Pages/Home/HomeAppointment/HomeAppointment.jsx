import React from 'react';
import bgBlue from '../../../assets/img/bg-blue 1.png'
import doctorSmall from '../../../assets/img/doctor-small 1.png'
import Gradient_Button from '../../../Componets/Gradient_Button/Gradient_Button';
const HomeAppointment = () => {
    return (
      <div
        style={{
          background: `url(${bgBlue})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img src={doctorSmall} className="-mt-36 " />
            <div>
              <h1  className='text-primary text-2xl pb-6'>Appointment</h1>
              <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <Gradient_Button
              >Get STAER</Gradient_Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeAppointment;