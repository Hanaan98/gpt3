import React from "react";
import PageWrapper from "./PageWrapper";

function Banner() {
  return (
    <PageWrapper>
      <div
        className="flex-col section_padding  flex md:flex-row items-center justify-between"
        id="home"
      >
        <div className="flex flex-col gap-5 xs:gap-10 justify-center flex-1 mr-5">
          <h1 className="text-3xl font sm:text-5xl font-extrabold">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="text-[#81AFDD] text-sm xs:text-md w-11/12 lg:w-2/3">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <form action="">
            <input
              type="text"
              placeholder="Your Email Address"
              className="bg-[#052D56] text-sm py-2 px-2  lg:px-5 rounded-l-sm shadow-md outline-none text-white"
            />
            <button className="text-sm bg-[#FF4820] py-2 px-2 lg:px-3 rounded-r-sm text-white lg:text-md">
              Get Started
            </button>
          </form>
          <div className="flex flex-col xs:flex-row gap-2 items-center">
            <img src="people.png" alt="people" />
            <p className="text-white text-[0.6rem]">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end  flex-1">
          <img src="/ai.png" alt="" className="w-full h-full" />
        </div>
      </div>
    </PageWrapper>
  );
}

export default Banner;
