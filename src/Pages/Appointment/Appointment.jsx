import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AppointmentService from "./AppointmentService/AppointmentService";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <AppointmentService selected={selected}></AppointmentService>

      <AvailableAppointment></AvailableAppointment>
    </div>
  );
};

export default Appointment;
