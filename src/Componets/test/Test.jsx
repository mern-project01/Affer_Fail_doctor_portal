import React from "react";
import people from "../../assets/img/people-1 1.png";

const Test = () => {
  return (
    <>
      <di className="w-1/3 ">
        <p className="text-accent-111 ">
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
        <div className="card card-side bg-base-100  text-white my-3">
          <figure>
            <img
              className="outline outline-secondary w-32 rounded-full "
              src={people}
              alt="Movie"
            />
          </figure>
          <div className="card-body text-accent-111">
            <h2 className="card-title">Winson Herry</h2>
            <p>Winson Herry</p>
          </div>
        </div>
      </di>
    </>
  );
};

export default Test;
