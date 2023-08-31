import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const CardEducation = (props) => {
  const { title, tahun, children = null } = props;
  return (
    <div
      className="bg-white p-3 lg:p-5 rounded-md xl:rounded-lg shadow-md"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="200"
    >
      <h1 className="font-semibold text-washedBlack text-xl">{title}</h1>
      <p className="text-clearBlue">{tahun}</p>
      <article className="text-xl text-washedBlack">{children}</article>
    </div>
  );
};

export default CardEducation;
