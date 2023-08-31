import React from "react";

const CardExperience = (props) => {
  const { position, tahun, perusahaan } = props;
  return (
    <div>
      <h1 className="font-semibold text-washedBlack">{position}</h1>
      <p className="text-clearBlue mt-2">{tahun}</p>
      <p className="font-semibold text-washedBlack">{perusahaan}</p>
    </div>
  );
};

export default CardExperience;
