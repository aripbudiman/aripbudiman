import React from "react";
import CardEducation from "../components/CardEducation";

const MyEducation = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10">
      <CardEducation title="Mi Al-Jumhuriyah" tahun="2006 - 2011" />
      <CardEducation title="Mts Al-Jumhuriyah" tahun="2011 - 2014" />
      <CardEducation title="Smk Nuurul Muttaqiin" tahun="2014 - 2017">
        Multimedia
      </CardEducation>
    </div>
  );
};

export default MyEducation;
