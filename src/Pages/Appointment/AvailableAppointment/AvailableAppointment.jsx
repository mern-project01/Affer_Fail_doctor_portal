import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({ selected}) => {
  const [availableOptions, setAvailableOptions] = useState([]);
  useEffect(() => {
   fetch("https://after-fial-backend-2.onrender.com/appontmentOption")
      .then((res) => res.json())
      .then((data) => setAvailableOptions(data));
  }, []);
  // useEffect(() => {
  //   const fetch = async () => {
  //     const res = await fetch(
  //       "https://after-fial-backend-2.onrender.com/appontmentOption"
  //     );
  //     const data = res.json()
  //     console.log(data)
  //     setAvailableOptions(data)
  //   }
  // })
  return (
    <div className="py-16">
      <div className="py-12">
        {/* <h1 className="text-center text-primary text-xl md:text-2xl">
          Available slots for Teeth Orthodontics.{" "}
        </h1> */}{" "}
        <div className="text-center">
          <h1 className="text-primary text-2xl">
            Available Services on ,
            <span className="text-yellow-500">
              {selected ? format(selected, "PPPP") : "piked a day "}{" "}
            </span>{" "}
          </h1>
          <h3 className="text-accent text-xl pt-3">Please select a service.</h3>
        </div>
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
              <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  open modal
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;