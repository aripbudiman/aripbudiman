import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  const handleDownloadClick = () => {
    const imageUrl = "/cv.jpg"; // Path to the image

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "cv-aripbudiman.jpg"; // Nama file yang akan diunduh
    link.click();
  };
  return (
    <>
      <div className="mx-5 lg:flex lg:flex-row-reverse items-center justify-between lg:mx-10 mb-20">
        <img
          src="/arip.png"
          alt="arip.png"
          className="w-[400px] lg:w-[500px]"
        />
        <div className="lg:w-1/2 text-justify">
          <h1 className="font-hammersmith font-semibold text-5xl lg:text-8xl text-reptilianGreen mb-2">
            Arip Budiman
          </h1>
          <Profesi />
          <p className="my-5 text-washedBlack lg:text-xl text-sm">
            Saya adalah web developer yang cekatan, disiplin dan bertanggung
            jawab dalam mengurus hal-hal yang berkaitan dengan web dan ilmu
            komputer lainnya.
          </p>
          <div className="w-full flex gap-x-3 lg:gap-x-5 justify-center lg:justify-start">
            <button
              onClick={handleDownloadClick}
              className="bg-reptilianGreen lg:text-xl text-sm px-3 py-3 lg:py-4 lg:px-10 rounded-full uppercase text-white hover:bg-emerald-700 hover:transition-all focus:bg-emerald-700 "
            >
              Download CV
            </button>
            <a
              href="#project"
              className="bg-reptilianGreen lg:text-xl text-sm px-3 py-3 lg:py-4 lg:px-10 rounded-full uppercase text-white hover:bg-emerald-700 hover:transition-all focus:bg-emerald-700 "
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Profesi = () => {
  return (
    <TypeAnimation
      sequence={[
        "Fullstack Web Developer",
        1000,
        "Freelancer",
        1000,
        "Part Time Developer",
        1000,
      ]}
      speed={20}
      className="lg:text-5xl text-2xl font-hammersmith text-washedBlack"
      repeat={Infinity}
    />
  );
};

export default HeroSection;
