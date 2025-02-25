import React from 'react';

const Gradient_Button = ({children}) => {
    return (
      <div>
        <button className="btn btn-outline py-6 rounded-lg bg-gradient-to-l from-[#65EAFB] to-[#90FFE2] text-white text-lg">
          {children}{" "}
        </button>
      </div>
    );
};

export default Gradient_Button;