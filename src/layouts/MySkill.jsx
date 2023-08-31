import React, { useEffect } from "react";
import Progresbar from "../components/Progresbar";
import AOS from "aos";
import "aos/dist/aos.css";

const MySkill = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="mb-10 xl:mb-0">
      <h1
        className="text-3xl xl:text-left text-center xl:text-5xl text-washedBlack font-semibold"
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        Skills & Experience
      </h1>
      <h2
        className="text-3xl text-washedBlack font-semibold mt-10"
        data-aos="fade-left"
        data-aos-duration="0"
        data-aos-delay="400"
      >
        MySkills
      </h2>
      <div className="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-5">
        <Progresbar skill="HTML/CSS" value="90" />
        <Progresbar skill="JavaScript" value="75" />
        <Progresbar skill="PHP" value="70" />
        <Progresbar skill="Laravel" value="80" />
        <Progresbar skill="Tailwind CSS" value="85" />
        <Progresbar skill="Node Js" value="50" />
        <Progresbar skill="Excel" value="90" />
        <Progresbar skill="Word" value="90" />
        <Progresbar skill="Power Point" value="90" />
        <Progresbar skill="Adobe Photoshop" value="80" />
        <Progresbar skill="CodeIgniter 4" value="70" />
        <Progresbar skill="JQuery" value="80" />
        <Progresbar skill="Mysql" value="85" />
        <Progresbar skill="Ubuntu Server" value="60" />
      </div>
    </div>
  );
};

export default MySkill;
