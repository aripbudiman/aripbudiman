import React from "react";
import CardExperience from "../components/CardExperience";
const MyExperience = () => {
  return (
    <div className="mt-10 grid grid-cols-2 gap-x-2 gap-y-10">
      <CardExperience
        position="Pedagang Chicken"
        tahun="2017 - 2017"
        perusahaan="Dinasty Fried Chicken"
      />
      <CardExperience
        position="Pedagang Cendol"
        tahun="2017 - 2017"
        perusahaan="Usaha Sendiri"
      />
      <CardExperience
        position="Tenaga Pendampaing Lapangan"
        tahun="2017 - 2021"
        perusahaan="Kspps Baytul Ikhtiar"
      />
      <CardExperience
        position="Admin Pembiayaan"
        tahun="2021 - 2022"
        perusahaan="Kspps Baytul Ikhtiar"
      />
      <CardExperience
        position="Spv Admin"
        tahun="2022 - Present"
        perusahaan="Kspps Baytul Ikhtiar"
      />
    </div>
  );
};

export default MyExperience;
