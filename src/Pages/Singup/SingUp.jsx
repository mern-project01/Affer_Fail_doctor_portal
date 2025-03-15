import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Gradient_Button from "../../Componets/Gradient_Button/Gradient_Button";

import { AuthContext } from "../../Componets/Context/ContextApi";

const SingUp = () => {
  const { User, setUser, googleAuth, handleLogin,handleName } = useContext(AuthContext);
  const [Error, setError] = useState();
  const handleGoogle = () => {
    googleAuth().then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };
 
  const handleSubmite = (event) => {
    event.preventDefault();

    const form = event.target; // Correct way to access form
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    handleLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const UpdatingName = {displayName:name};
         handleName(UpdatingName)
           .then(() => {})
           .catch((err) => {
             console.log(err);
           });
        console.log(user);
        setUser(user)
        alert('ok')
        form.reset()
        setError(null)
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
   
  };
  return (
    <div id="#singup">
      <div className="card bg-base-100 mx-auto my-10 w-full max-w-[500px] shrink-0 shadow-2xl">
        <h1 className="text-center pt-8 text-3xl text-slate-500 ">
          Create a new acount here--
        </h1>
        <div className="card-body">
          <form onSubmit={handleSubmite} className="fieldset">
            <label className="fieldset-label text-xl">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            <label className="fieldset-label text-xl">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="fieldset-label text-xl">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            {
            Error?.message && <p className="text-red-500 text-lg">{Error?.message} </p>
            }
            <Gradient_Button>Resister</Gradient_Button>
          </form>
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
              <button
                onClick={handleGoogle}
                className="btn btn-outline outline-slate-600 "
              >
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
