import React from "react";
import Features from "./Features";
import PageWrapper from "./PageWrapper";
function Future() {
  return (
    <PageWrapper>
      <div
        className="mt-10 flex-col section_padding flex sm:flex-row gap-10 items-baseline fade-in-top"
        id="openai"
      >
        <div className="flex flex-col sm:w-2/3 gap-5">
          <h1 className="font text-2xl sm:text-4xl font-bold">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p className="text-[#81AFDD]  sm:text-md">
            Request Early Access to Get Started
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <Features
            heading="Improving end distrusts instantly "
            text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
            row={true}
            future={true}
          />
          <Features
            heading="Become the tended active "
            text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
            row={true}
            future={true}
          />
          <Features
            heading="Improving end distrusts instantly "
            text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
            row={true}
            future={true}
          />
          <Features
            heading="Message or am nothing "
            text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
            row={true}
            future={true}
          />
        </div>
      </div>
    </PageWrapper>
  );
}

export default Future;
