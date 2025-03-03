import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Gradient_Button from "../../Componets/Gradient_Button/Gradient_Button";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../Componets/Firbase/Firbase.init";

const SingUp = () => {
  const [User,setUser]=useState()
const auth=getAuth(app)
  const provider = new GoogleAuthProvider();
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        console.log(user)
    })
  }
    const handleSubmite = () => {
      alert('ok')
    
    }
  return (
    <div id="#singup">
      <div className="card bg-base-100 mx-auto my-10 w-full max-w-[500px] shrink-0 shadow-2xl">
        <h1 className="text-center pt-8 text-3xl text-slate-500 ">
          Create a new acount here--
        </h1>
        <div className="card-body">
          <fieldset onSubmit={handleSubmite} className="fieldset">
            <label className="fieldset-label text-xl">Name</label>
            <input type="name" className="input" placeholder="Name" />
            <label className="fieldset-label text-xl">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="fieldset-label text-xl">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <Gradient_Button>Resister</Gradient_Button>
          </fieldset>
          <div>
            <NavLink
              to="/login"
              className="text-center text-lg block link link-hover"
            >
              <span className="text-accent pe-2">Already have an acount?</span>
              <span className="text-secondary">Login</span>
            </NavLink>

            <div className="grid grid-cols-3 py-5">
              <hr className=""></hr>
              <h1 className="text-center -mt-3">OR</h1>
              <hr></hr>
            </div>
            <div className="pb-5  text-center">
              <button onClick={handleGoogle} className="btn btn-outline outline-slate-600 ">
                CONTINUE WITH GOOGLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
