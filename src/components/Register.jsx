import React from "react";

function Register() {
  return (
    <div className="section_padding mt-10">
      <div className="flex-col flex gap-5 sm:gap-10 sm:flex-row  justify-between sm:items-center bg-gradient-to-r from-[#AE67FA] to-[#F49867] rounded-md px-5 py-10">
        <div className="flex gap-2 flex-col">
          <p className="text-[#0E0E0E] text-sm">
            Request Early Access to Get Started
          </p>
          <h1 className="text-black text-xl sm:text-3xl font-bold">
            Register today & start exploring the endless possiblities.
          </h1>
        </div>
        <div className="">
          <button className="px-10 py-3 rounded-full text-white bg-black hover:bg-white hover:text-black hover:transition-all hover:duration-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
