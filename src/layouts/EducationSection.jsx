import React from "react";
import CardEducation from "../components/CardEducation";

const EducationSection = () => {
  return (
    <>
      <h1 className="text-center text-5xl text-washedBlack font-hammersmith font-bold">
        My Education
      </h1>
      <div className="grid lg:grid-cols-2 gap-5 lg:my-10 m-5">
        <CardEducation title="Mi Al-Jumhuriyah" tahun="2006 - 2011">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias
          cumque non laudantium asperiores accusamus eveniet labore quae quas
          totam?
        </CardEducation>
        <CardEducation title="Mts Al-Jumhuriyah" tahun="2011 - 2014" />
        <CardEducation title="Smk NuurulMuttaqin" tahun="2014 - 2017" />
      </div>
    </>
  );
};

export default EducationSection;
