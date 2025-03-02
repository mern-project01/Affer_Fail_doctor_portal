import React, { useEffect, useState } from 'react';

const AvailableAppointment = () => {
  const [availableOptions, setAvailableOptions] = useState([]);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAvailableOptions(data));
  }, []);
  return (
    <div className="py-16">
      <div className="py-12">
        <h1 className="text-center text-primary text-xl md:text-2xl">
          Available slots for Teeth Orthodontics.{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 px-6 md:grid-cols-3 gap-4">
        {availableOptions.map((option) => (
          <div className="card ">
            <div className="card-body  " key={option._id}>
              <h1 className="card-title text-primary py-2 justify-center ">
                {option.name}
              </h1>
              <p className="text-center">
                {option.slots.length > 0
                  ? option.slots[0]
                  : "Please try another time"}
              </p>
              <p className="text-center">
                {option.slots.length}{" "}
                {option.slots.length > 1 ? "Spaces" : "Space"} Availaable{" "}
              </p>
              <button className="btn btn-success w-[150px] m-auto mt-5 ">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;