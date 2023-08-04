import React from "react";

function Features(props) {
  const classname = props.row
    ? "flex flex-col justify-between gap-2 sm:gap-10 sm:items-baseline md:flex-row"
    : "flex flex-wrap justify-between gap-2 sm:gap-10 items-center ";

  return (
    <div className={classname}>
      <div className={props.row ? "sm:w-1/2" : "w-full"}>
        <hr className="w-10 h-1 mb-3 border-none bg-gradient-to-r from-[#AE67FA] to-[#F49867]" />
        <h1
          className={
            props.future
              ? "text-white text-md font-bold sm:w-1/2"
              : "font text-xl sm:text-2xl font-bold "
          }
        >
          {props.heading}
        </h1>
      </div>
      <p
        className={
          props.future
            ? "text-[#81AFDD]  text-xs sm:w-1/2"
            : "text-[#81AFDD]  sm:text-md"
        }
      >
        {props.text}
      </p>
    </div>
  );
}

export default Features;
