import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const AppointmentService = ({selected}) => {
  return (
    <div className="py-12">
      <div className="text-center">
              <h1 className="text-primary text-2xl">Available Services on ,<span className="text-yellow-500">{
              selected ?  format(selected,"PPPP"):'piked a day '} </span>  </h1>
        <h3 className="text-accent text-xl pt-3">Please select a service.</h3>
      </div>
      <div className="grid grid-cols-1 px-8 md:grid-cols-3 gap-6 ">
        <Link
          to=""
          className="btn bg-base-100 shadow-lg h-20 text-lg text-primary hover:text-blue-700"
        >
          Teeth Orthodontics
        </Link>
        <Link
          to=""
          className="btn bg-base-100 shadow-lg h-20 text-lg text-primary hover:text-blue-700"
        >
          Cosmetic Dentistry
        </Link>
        <Link
          to=""
          className="btn bg-base-100 shadow-lg h-20 text-lg text-primary hover:text-blue-700"
        >
          Teeth Cleaning
        </Link>
        <Link
          to=""
          className="btn bg-base-100 shadow-lg h-20 text-lg text-primary hover:text-blue-700"
        >
          Cavity Protection
        </Link>
        <Link
          to=""
          className="btn bg-base-100 shadow-lg h-20 text-lg text-primary hover:text-blue-700"
        >
          Pediatric Dental
        </Link>
        <Link
          to=""
          className="btn bg-base-100 shadow-lg h-20 text-lg text-primary hover:text-blue-700"
        >
          Oral SurgeryOral Surgery
        </Link>
      </div>
    </div>
  );
};
{
  /* <span>{format(selectedDate, "PP")}</+ */
}

export default AppointmentService;
