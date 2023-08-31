import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const CardExperience = (props) => {
  const { position, tahun, perusahaan } = props;
  return (
    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
      <h1 className="font-semibold text-washedBlack">{position}</h1>
      <p className="text-clearBlue mt-2">{tahun}</p>
      <p className="font-semibold text-washedBlack">{perusahaan}</p>
    </div>
  );
};

export default CardExperience;
