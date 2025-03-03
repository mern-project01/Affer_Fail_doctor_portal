import React from "react";
import { NavLink } from "react-router-dom";
import Gradient_Button from "../../Componets/Gradient_Button/Gradient_Button";

const Login = () => {
  const handleSubmite = () => {
    alert("ok");
  };
  return (
    <div id="">
      <div className="card bg-base-100 mx-auto my-10 w-full max-w-[500px] shrink-0 shadow-2xl">
        <h1 className="text-center pt-8 text-3xl text-slate-500 ">
          Login with Email & password
        </h1>
        <div className="card-body ">
          <fieldset onSubmit={handleSubmite} className="fieldset">
           
            <label className="fieldset-label text-xl">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="fieldset-label text-xl">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div className="lg:py-4">
              <a className="hiden link link-hover text-lg  ">Forgot password?</a>
            </div>
            <Gradient_Button>Login</Gradient_Button>
          </fieldset>
          <div>
            <NavLink
              to="/singup"
              className="text-center text-lg block link link-hover"
            >
              <span className="text-accent pe-2">New to here?</span>
              <span className="text-secondary">Please Resister</span>
            </NavLink>

            <div className="grid grid-cols-3 py-5">
              <hr className=""></hr>
              <h1 className="text-center -mt-3">OR</h1>
              <hr></hr>
            </div>
            <div className="pb-5  text-center">
              <button className="btn btn-outline outline-slate-600 ">
                CONTINUE WITH GOOGLE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*
      <div className="hero min-h-screen">
        <div className="card bg-base-100 w-full max-w-[500px] shrink-0 shadow-2xl">
          <h1 className="text-center pt-8 text-3xl text-slate-500 ">
            Create a new acount here--
          </h1>
          <form onSubmit={handleSubmite} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                type="name"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent text-[16px]">Resister</button>
            </div>
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
              <button className="btn btn-outline outline-slate-600 ">
                CONTINUE WITH GOOGLE
              </button>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
};

export default Login;
