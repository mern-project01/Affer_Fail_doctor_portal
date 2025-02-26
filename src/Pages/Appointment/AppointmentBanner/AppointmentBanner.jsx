import React, { useState } from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import chair from "../../../assets/img/chair 1.png";
import landing from "../../../assets/img/landing-bg.png";

const AppointmentBanner = () => {
    const [selected, setSelected] = useState(null);

    return (
      <div
        style={{
          background: `url(${landing})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        
      >
        <div className="hero-content flex-col lg:flex-row-reverse px-8 py-32">
          <img src={chair} className='w-1/2' />
          <div className='w-1/2 '>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={
                selected
                  ? `Selected: ${selected.toLocaleDateString()}`
                  : "Pick a day."
              }
            />
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;