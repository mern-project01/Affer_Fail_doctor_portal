import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ setTretment, tretment, selectedDate, User,refetch }) => {
  const { name, slots } = tretment;
  const handleSubmit = (event) => {
    // e.preventDefault()
    event.preventDefault();
    const form = event.target;
    const tretment_name = name;
    const User_name = form.User_name.value;
    const User_email = form.User_email.value;
    const date = form.date.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const booking_info = {
      tretment_name,
      User_name,
      User_email,
      date,
      slot,
      phone
    }
    console.log(booking_info)
    fetch("https://after-fial-backend-2.onrender.com/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking_info),
    })
      .then((res) => res.json())
      .then((data) => {
        // data.acknowledged
        alert("booking succesful");
        refetch()
      })
      .catch((error) => {
        console.log(error);
        alert(error.message)
      });
    setTretment(null)
  }
  return (
    <>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">{name} </h3>
            <label htmlFor="booking_modal" className="btn rounded-full">
              x
            </label>
          </div>
          {/*ffor modal input infoo   */}
          
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                name="User_name"
                value={User?.displayName}
                className="w-full h-12 bg-[#E6E6E6] text-xl text-left px-7 py-3 text-black my-2 rounded-lg"
              />
              <input
                type="text"
                name="User_email"
                value={User?.email}
                className="w-full h-12 bg-[#E6E6E6] text-xl text-left px-7 py-3 text-black my-2 rounded-lg"
              />
              <input
                type="text"
                name="date"
                value={format(selectedDate, "PPPP")}
                className="w-full h-12 bg-[#E6E6E6] text-xl text-left px-7 py-3 text-black my-2 rounded-lg"
              />
              <select
                name="slot"
                className="w-full h-12 bg-[#E6E6E6] text-xl text-left px-7 py-2 text-black my-2 rounded-lg"
              >
                {slots.map((slot, i) => (
                  <option index={i} className="z-10">
                    {slot}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="phone"
              placeholder="phone number"
              required
                className="w-full h-12 bg-[#E6E6E6] text-xl text-left px-7 py-3 text-black my-2 rounded-lg"
              />
              <input
                type="submit"
                value='Submit'
                className="btn btn-success w-1/2"
              />
            </form>
          </div>
        </div>
      
    </>
  );
};

export default BookingModal;