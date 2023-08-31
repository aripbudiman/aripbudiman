import React from "react";

const CardEducation = (props) => {
  const { title, tahun, children = null } = props;
  return (
    <div className="bg-white p-3 lg:p-5 rounded-lg shadow-md">
      <h1 className="font-semibold text-washedBlack text-xl">{title}</h1>
      <p className="text-clearBlue">{tahun}</p>
      <article className="text-xl text-washedBlack">{children}</article>
    </div>
  );
};

export default CardEducation;
