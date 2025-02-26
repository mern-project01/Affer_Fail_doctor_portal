import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeBannerCard from "./HomeBanner/HomeBannerCard";
import Homeservice from "./HomeService/Homeservice";
import HomeAppointment from "./HomeAppointment/HomeAppointment";
import Hometestimonal from "./HomeTestimonal/Hometestimonal";
import HomeContact from "./HomeContact/HomeContact";
import Test from "../../Componets/test/Test";

const Home = () => {
  return (
    <div>
      {/* this is  for home baner*/}
      <HomeBanner></HomeBanner>
      <HomeBannerCard></HomeBannerCard>
      {/* this is for home service section */}
      <Homeservice></Homeservice>
      {/* this is for homeappointment section */}
      <HomeAppointment></HomeAppointment>
      <Hometestimonal></Hometestimonal>
      <HomeContact></HomeContact>
    </div>
  );
};

export default Home;
