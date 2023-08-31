import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function CardProject(props) {
  const { foto, children } = props;
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="overflow-hidden rounded-lg bg-white text-slate-500 shadow-lg shadow-slate-200"
      >
        <figure>
          <img
            src={foto}
            alt="card image"
            className="aspect-video object-contain w-full"
          />
        </figure>
        <div className="p-6">
          <p className="text-justify">{children}</p>
        </div>
        {/* <div className="flex justify-end gap-2 p-2 pt-0">
          <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span>Read more</span>
          </button>
        </div> */}
      </div>
    </>
  );
}
