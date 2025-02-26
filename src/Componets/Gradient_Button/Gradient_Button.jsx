import React from 'react';

const Gradient_Button = ({children}) => {
    return (
      <div>
        <button className="btn btn-outline py-6 rounded-lg bg-gradient-to-r from-[#16D2BF] to-[#11D0DD] text-white text-lg">
          {children}{" "}
        </button>
      </div>
    );
};

export default Gradient_Button;