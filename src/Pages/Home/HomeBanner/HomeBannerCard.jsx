import React from "react";
import clok from "../../../assets/icon/clock.png";

import location from "../../../assets/icon/Path 7199.png";
import phone from "../../../assets/icon/Path 7196.png";

const HomeBannerCard = () => {
  return (
    <div className=" lg:grid grid-cols-3 gap-4">
      <div className=" mb-3 flex items-center px-4 rounded-2xl   shadow-sm flex-1/2   bg-gradient-to-r from-[#16D2BF] to-[#11D0DD] text-white text-lg">
        <figure>
          <img className="w-[86] h-[86] " src={clok} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>{" "}
      <div className="mb-3 flex items-center px-4 rounded-2xl   shadow-sm flex-1/2  bg-gradient-to-r from-[#16D2BF] to-[#11D0DD] text-white text-lg">
        <figure>
          <img className="w-[86] h-[86] " src={location} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Visit our location</h2>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>{" "}
      <div className="mb-3 flex items-center px-4 rounded-2xl   shadow-sm flex-1/2  bg-gradient-to-r from-[#16D2BF] to-[#11D0DD] text-white text-lg">
        <figure>
          <img className="w-[86] h-[86] " src={phone} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Contact us now</h2>
          <p>+000 123 456789</p>
        </div>
      </div>{" "}
    </div>
    
  );
};

export default HomeBannerCard;
