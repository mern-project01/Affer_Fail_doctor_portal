import React from "react";
import Header from "../../Pages/Share/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Share/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
