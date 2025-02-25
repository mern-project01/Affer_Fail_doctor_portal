import React from 'react';
import fluoride from '../../../assets/img/fluoride 2.png'
import cavity from '../../../assets/icon/cavity 1.png'
import whitening from '../../../assets/icon/whitening 1.png'

const ServiceCard = () => {
    return (
      <div className=' md:grid grid-cols-3'>
        <div className="card bg-base-100 w-96 ">
          <figure className="px-10 pt-10">
            <img src={fluoride} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Fluoride Treatment</h2>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 ">
          <figure className="px-10 pt-10">
            <img src={cavity} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Fluoride Treatment</h2>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 ">
          <figure className="px-10 pt-10">
            <img src={whitening} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Fluoride Treatment</h2>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;