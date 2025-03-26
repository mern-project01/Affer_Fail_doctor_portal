import { format } from "date-fns";
import React, { useContext, useEffect } from "react";
import './modal.css'
import { AuthContext } from "../../../Componets/Context/ContextApi";

const OpenModal = ({ option, selected, treatment }) => {
  // console.log(treatment)
 
  // const { slots } = option;
  const { User } = useContext(AuthContext);
  // console.log(option.lenth)
  // console.log(name)
  const handel_submite = (event) => {
    event.preventDefault();
    // for close the modal
    const modal = document.getElementById("my_modal_5");
    modal.close();
   
    //get the user
    const form = event.target;
    const tritmentName = treatment.name;
    // const tritmentName = form.tritmentName.value;
    const date = form.date.value;
    const slot = form.slot.value;
    // const pesent_Name = form.username.value;
    const pasent_Name = User?.displayName;
    const email = form.email.value;
    const number = form.number.value;
    const booking_info = {
      tritmentName: tritmentName,
      date: date,
      time: slot,
      pesentName: pasent_Name,
      email: email,
      phoneNumber: number,
    };
    // console.log(booking_info.tritmentName)
    // console.log(booking_info)
    fetch("http://localhost:4000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(booking_info),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.acknowledged) {
          alert("ok")
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className=" btn btn-success w-[150px] "
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Booking Now
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form className="text-right flex justify-between " method="dialog">
            {/* <h1 className="text-2xl text-black text-left inline " name="tritmentName">
              {treatment}{" "}
            </h1> */}
            <button className="btn inline bg-black text-sm  text-white rounded-2xl  custom-class">
              X
            </button>
          </form>
          <form onSubmit={handel_submite} action="">
            <div>
              {/* <label
                className="text-2xl text-black text-left inline "
                name="tritmentName"
              >
                {treatment}{" "}
              </label> */}
              <input type="text" id="ttn"  name="tritmentName" defaultValue={treatment?.name} />
              {/* //for selected date */}

              <input
                type="text"
                name="date"
                value={format(selected, "PPPP")}
                className="w-full h-12 bg-[#E6E6E6] text-xl text-left px-7 py-3 text-black my-2 rounded-lg"
              />
              {/* //for selected time */}
              <select
                name="slot"
                className="w-full h-12 bg-[#E6E6E6] text-lg text-left px-7 py-3 text-black my-2 rounded-lg "
              >
                {treatment?.slots.map((slot, i) => (
                  <option value={treatment?.slot} key={i} className="z-10">
                    {slot}{" "}
                  </option>
                ))}
              </select>
            </div>
            {/* //user name */}
            <input
              type="text"
              name="username"
              value={User?.displayName}
              className="w-full h-12 bg-[#E6E6E6] text-xl text-left px-7 py-3 text-black my-2 rounded-lg"
            />
            {/* // for user email */}
            <input
              type="text"
              name="email"
              value={User?.email}
              className="w-full h-12 bg-[#E6E6E6] text-xl text-left px-7 py-3 text-black my-2 rounded-lg"
            />
            {/* //for user phone number */}
            <div className="form-control">
              <input
                type="number"
                placeholder="Phone Number"
                name="number"
                className="input input-bordered w-full my-1 rounded-lg"
                required
              />
            </div>
            <input
              className="btn btn-success w-1/2"
              value="Submit"
              type="submit"
            />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default OpenModal;
