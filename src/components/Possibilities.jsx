import React from "react";
import PageWrapper from "./PageWrapper";
function Possibilities() {
  return (
    <div
      className="mt-10 section_padding flex-col flex items-center sm:flex-row gap-10 justify-center "
      id="casestudies"
    >
      <div className="w-11/12 sm:mr-20 ">
        <PageWrapper>
          <img src="./possibility.png" />
        </PageWrapper>
      </div>
      <div className="flex gap-5 flex-col">
        <p className="text-[#71E5FF]">Request Early Access to Get Started</p>
        <h1 className="font text-2xl sm:text-3xl font-bold ">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-[#81AFDD] ">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h1 className="text-[#FF8A71]">Request Early Access to Get Started</h1>
      </div>
    </div>
  );
}

export default Possibilities;
