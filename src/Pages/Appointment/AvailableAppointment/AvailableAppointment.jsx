import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import OpenModal from "../OpenModal/OpenModal";
import { AuthContext } from "../../../Componets/Context/ContextApi";
import { NavLink } from "react-router-dom";

const AvailableAppointment = ({ selected }) => {
  const [treatment, setTreatement] = useState(null);
  console.log(treatment)
  const [availableOptions, setAvailableOptions] = useState([]);
  const [AvLoding, setAvLoding] = useState(true);
  const { User } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://after-fial-backend-2.onrender.com/appontmentOption")
      .then((res) => res.json())
      .then((data) => {
        setAvailableOptions(data);
        setAvLoding(false);
      });
  }, []);
  return (
    <div className="">
      <div className="py-12">
        {/* <h1 className="text-center text-primary text-xl md:text-2xl">
          Available slots for Teeth Orthodontics.{" "}
        </h1> */}{" "}
        <div className="text-center">
          <h1 className="text-primary text-2xl">
            Available Services on ,
            <span className="text-yellow-500">
              {selected
                ? format(selected, "PPPP")
                : "Befor booking plase select a day"}{" "}
            </span>{" "}
          </h1>
          <h3 className="text-accent text-xl pt-3">Please select a service.</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 px-6 md:grid-cols-3 gap-4">
        {AvLoding && <p className="text-red-500 text-5xl">Loding .....</p>}
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
              {/* start copy */}
              <button
                onClick={() => {
                  setTreatement(option);
                  document.getElementById("my_modal_5").showModal();
                }}
                className="btn btn-success"
              >
                Booking Now
              </button>

              {/* end copy */}
              {/* <button onClick={() => setTreatement(option)}>
                {User?.email && selected ? (
                  <div className="">
                    {selected ? (
                      <OpenModal
                        treatment={treatment}
                        option={option}
                        selected={selected}
                      ></OpenModal>
                    ) : (
                      <button className=" btn btn-success w-[150px] ">
                        Booking Now
                      </button>
                    )}
                  </div>
                ) : (
                  <NavLink to="/login" className=" btn btn-success w-[150px] ">
                    Booking Now
                  </NavLink>
                )}
              </button> */}

              {/* for testing  */}
              {/* {User?.email && selected ? (
                <OpenModal
                  treatment={treatment}
                  option={option}
                  selected={selected}
                ></OpenModal>
              ) : (
                <button className=" btn btn-success w-[150px] ">
                  Booking Now
                </button>
              )} */}
            </div>
          </div>
        ))}
        {User?.email && treatment && (
          <OpenModal
            treatment={treatment}
            // option={treatment}
            selected={selected}
          />
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;
