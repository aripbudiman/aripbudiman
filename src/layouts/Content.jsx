import React from "react";

const Content = (props) => {
  const { children } = props;
  return (
    <div className={`w-full xl:max-w-[80rem] 5xl:max-w-[96rem] lg:mx-auto`}>
      {children}
    </div>
  );
};

export default Content;
