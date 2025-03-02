import React from "react";
import bgBlue from "../../assets/img/bg-blue 1.png";
import Gradient_Button from "../../Componets/Gradient_Button/Gradient_Button";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${bgBlue})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="hero"
    >
      <div className="py-16 w-96">
        <div className="pb-12">
          <h1 className="text-xl text-secondary pb-4">Contact Us</h1>
          <h1 className="text-4xl text-base-100">Stay connected with us</h1>
        </div>
        <div className="card  w-full max-w-sm shrink-0 ">
          <form className="card-body">
            <div className="form-control">
              <input
                type="email"
                placeholder="Email address "
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="subject"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="message"
                placeholder="your massage"
                className="input input-bordered h-[150px] "
                required
              />
            </div>
            <div className="text-center pt-3">
              <Gradient_Button>SUBMITE</Gradient_Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
