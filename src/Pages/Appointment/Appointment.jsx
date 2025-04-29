import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBaner.jsx/AppointmentBaner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(null)
    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
            <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;