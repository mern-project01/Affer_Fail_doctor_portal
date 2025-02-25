import React from 'react';

const Gradient_Button = ({children}) => {
    return (
        <div>
           <button className='btn btn-outline bg-gradient-to-r from-primary to-secendary text-red-400'>{children} </button> 
        </div>
    );
};

export default Gradient_Button;