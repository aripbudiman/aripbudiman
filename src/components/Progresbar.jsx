import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Progresbar = (props) => {
  const { value, skill } = props;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="flex flex-col"
      data-Aos="zoom-out-up"
      data-Aos-duration="1000"
    >
      <label htmlFor="p01e" className="flex justify-between">
        <span>{skill}</span>
        <span>{value}%</span>
      </label>
      <progress
        aria-labelledby="p01e-label"
        id="p01e"
        max="100"
        value={value}
        class="block w-full overflow-hidden rounded bg-slate-200 [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-chineseGoldfish [&::-moz-progress-bar]:bg-chineseGoldfish"
      ></progress>
    </div>
  );
};

export default Progresbar;
