import React from "react";

const AvailableOption = ({ option, setTretment }) => {
  return (
    <div>
      <div className="card ">
        <div className="card-body  " key={option._id}>
          <h1 className="card-title text-[#16D2BF]  justify-center ">
            {option.name}
          </h1>
          <p className="text-center">
            {option.slots.length > 0
              ? option.slots[0]
              : "Please try another time"}
          </p>
          <p className="text-center">
            {option.slots.length} {option.slots.length > 1 ? "Spaces" : "Space"}{" "}
            Available{" "}
          </p>
          {/* The button to open modal */}
          <label
            htmlFor="booking_modal"
            onClick={() => setTretment(option)}
            className="btn btn-outline py-6 rounded-lg bg-gradient-to-r from-[#16D2BF] to-[#11D0DD] text-white text-lg"
          >
            Booking Now
          </label>
        </div>
      </div>
      {/* Put this part before </body> tag */}
    </div>
  );
};

export default AvailableOption;
