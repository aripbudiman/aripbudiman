import React, { useEffect } from "react";
import CardProject from "../components/CardProject";
import AOS from "aos";
import "aos/dist/aos.css";
const MyProject = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="project">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center text-5xl text-washedBlack font-hammersmith font-bold mb-10"
      >
        MyProject
      </h1>
      <div className="grid grid-cols-1 mx-5 xl:grid-cols-3 5xl:grid-cols-4 gap-5 xl:gap-8">
        <CardProject foto="/project/dmp1.png">
          Project perusahaan Percetakan yang ada dibekasi, saya buat sendiri
          menggunakan codeigniter 4.
        </CardProject>
        <CardProject foto="/project/sparepart1.png">
          Project yang saya buat menggunakan laravel 10 dimana aplikasi ini
          sangat sederhana, aplikasi ini mirip e-commerce khusus untuk jual beli
          sparepart motor. aplikasi ini saya jual ke salah satu customer di fb.
        </CardProject>
        <CardProject foto="/project/mobile.png">
          Aplikasi ini saya buat menggunakan laravel 10 dan PWA, karena
          penggunanya kebanyakan orang2 lapangan maka saya menambahkan fitur PWA
          pada aplikasi ini, aplikasi ini banyak sekali kegunaannya salah
          satunya adalah menyimpan semua dokumentasi kerjaan lapangan agar ter
          arsip dengan rapih dan mudah diakses kapan saja dan banyak fitur2 lain
          yg tidak bisa saya jelaskan satu per satu.
        </CardProject>
        <CardProject foto="/project/stok.png">
          aplikasi pencatatan ATK, pencatatan droping(saldo Wakalah), dan
          informasi selisih kas petugas. aplikasi ini dibuat menggunakan laravel
          9
        </CardProject>
      </div>
    </div>
  );
};

export default MyProject;
