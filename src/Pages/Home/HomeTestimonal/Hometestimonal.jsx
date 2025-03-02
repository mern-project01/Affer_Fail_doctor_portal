import React from 'react';
import people from '../../../assets/img/people-1 1.png'
import mask from '../../../assets/img/Mask Group 7@2x 1.png'
const Hometestimonal = () => {
    return (
      <div className=" py-28 md:px-28">
        {/* this is for testimonal banner */}
        <div className="pb-24 flex flex-row- justify-between">
          <div>
            <h4 className="pb-6 text-secondary text-xl font-extralight">
              Testimonial
            </h4>
            <h1 className="text-accent-111 text-4xl">What Our Patients Says</h1>
          </div>
          <img src={mask} alt="" />
        </div>
        {/* this is for testimonal card section */}
        <div className=" px-12 md:grid grid-cols-3 gap-16">
          <div className="w-full md:w-1/3">
            <p className="text-accent-111 ">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="card card-side bg-base-100  text-white my-3">
              <figure>
                <img
                  className="outline outline-secondary   rounded-full  lg:w-32 "
                  src={people}
                  alt="Movie"
                />
              </figure>
              <div className="card-body tecent-111">
                <h2 className="card-title">Winson Herry</h2>
                <p>Winson Herry</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-accent-111 ">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="card card-side bg-base-100  text-white my-3">
              <figure>
                <img
                  className="outline outline-secondary w-32 rounded-full "
                  src={people}
                  alt="Movie"
                />
              </figure>
              <div className="card-body text-accent-111">
                <h2 className="card-title">Contact us now</h2>
                <p>+000 123 456789</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-accent-111 ">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Contxt-acent here, content
            </p>
            <div className="card card-side bg-base-100  text-white my-3">
              <figure>
                <img
                  className="outline outline-secondary w-32 rounded-full "
                  src={people}
                  alt="Movie"
                />
              </figure>
              <div className="card-body text-accent-111">
                <h2 className="card-title">Contact us now</h2>
                <p>+000 123 456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hometestimonal;