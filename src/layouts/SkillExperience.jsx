import React, { useState, useEffect } from "react";
import Content from "./Content";
import MySkill from "./MySkill";
import MyExperience from "./MyExperience";
import MyEducation from "./MyEducation";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillExperience = () => {
  const [showEducation, setShowEducation] = useState(true);

  const toggleDisplay = () => {
    setShowEducation(!showEducation);
  };
  useEffect(() => {
    AOS.init(); // Menginisialisasi AOS
  }, []);
  return (
    <>
      <div className="bg-chineseGoldfish">
        <Content>
          <div className="h-48 xl:h-80 flex justify-center flex-col items-center text-white">
            <h1
              className="text-xl xl:text-7xl font-semibold mb-5"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              I'm Available for freelancing
            </h1>
            <p
              className="text-md xl:text-2xl italic text-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              "Transforming Ideas into Innovative Solutions"
            </p>
          </div>
        </Content>
      </div>
      <Content>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 px-5 xl:px-10 py-10 xl:py-20">
          <MySkill />
          <div>
            <div className="justify-center flex">
              <button
                class="inline-flex items-center justify-center h-12 w-44 gap-2 px-6 text-sm font-medium tracking-wide text-washedBlack focus:text-white hover:text-white transition border-2 border-blueTitmouse duration-300 rounded-l-md focus-visible:outline-none whitespace-nowrap  hover:bg-clearBlue focus:bg-blue-800"
                onClick={toggleDisplay}
              >
                <span>Experience</span>
              </button>
              <button
                class="inline-flex items-center justify-center h-12 w-44 gap-2 px-6 text-sm font-medium tracking-wide text-washedBlack border-2 active:bg-blueTitmouse hover:text-white focus:text-white border-blueTitmouse transition duration-300  rounded-r-md focus-visible:outline-none whitespace-nowrap hover:bg-clearBlue focus:bg-blue-800"
                onClick={toggleDisplay}
              >
                <span>Education</span>
              </button>
            </div>
            {showEducation ? <MyExperience /> : <MyEducation />}
          </div>
        </div>
      </Content>
    </>
  );
};

export default SkillExperience;
