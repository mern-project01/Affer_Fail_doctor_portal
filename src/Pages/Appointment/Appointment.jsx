import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';

const Appointment = () => {
        const [selected, setSelected] = useState(null);

    return (
        <div>
           <AppointmentBanner selected={selected} setSelected={setSelected} ></AppointmentBanner> 
        </div>
    );
};

export default Appointment;