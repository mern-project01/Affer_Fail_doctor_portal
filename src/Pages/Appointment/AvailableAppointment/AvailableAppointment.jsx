import { format } from "date-fns";
import React, {  useContext, useEffect, useState } from "react";
import AvailableOption from "./AvailableOption";
import BookingModal from "../BookingModal/BookingModal";
import { AuthContext } from "../../../Componets/Context/ContextApi";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selectedDate }) => {
  const { User } = useContext(AuthContext);
  const [tretment, setTretment] = useState(null);
  // const [AvLoding, setAvLoding] = useState(true);
  // const [availableOptions, setAvailableOptions] = useState([]);
  // useEffect(() => {
  //   // fetch("/appointmentOptions.json")
  //   fetch("https://after-fial-backend-2.onrender.com/appontmentOption")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAvailableOptions(data);
  //       setAvLoding(false);
  //     });
  // }, []);
  //http://localhost:4000/appontmentOption
  //form render:https://after-fial-backend-2.onrender.com/appontmentOption
  const date = format(selectedDate, "PPPP");
  const { data: availableOptions, isLoading,refetch } = useQuery({
    queryKey: ["appontmentOption", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:4000/appontmentOption?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="">
      <div className="py-2">
        {/* <h1 className="text-center text-primary text-xl md:text-2xl">
          Available slots for Teeth Orthodontics.{" "}
        </h1> */}{" "}
        <div className="text-center">
          <h1 className="text-primary text-2xl">
            Available Services on ,
            <span className="text-yellow-500">
              {selectedDate ? date : "Befor booking plase select a day"}{" "}
            </span>{" "}
          </h1>
          <h3 className="text-accent text-xl pt-3">Please select a service.</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 px-6 md:grid-cols-3 gap-4">
        {isLoading && <p className="text-red-500 text-5xl">Loding .....</p>}
        {availableOptions?.map((option, index) => (
          <AvailableOption
            option={option}
            index={index}
            setTretment={setTretment}
          ></AvailableOption>
        ))}
      </div>
      {selectedDate && tretment && User && (
        <BookingModal
          User={User}
          selectedDate={selectedDate}
          tretment={tretment}
          setTretment={setTretment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
