import React, { useRef } from "react";
import Features from "./Features";
import PageWrapper from "./PageWrapper";
function Whatisgpt3() {
  return (
    <PageWrapper>
      <div className="mt-10 section_padding" id="whatisgpt?">
        <div className="gpt3__whatgpt3 flex flex-col gap-10 sm:gap-16 rounded-md">
          <div>
            <Features
              row={true}
              heading="What is GPT-3?"
              text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
            />
          </div>
          <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row flex-wrap justify-between sm:items-center">
            <h1 className="font text-2xl sm:text-3xl font-bold sm:w-1/2">
              The possibilities are beyond your imagination
            </h1>
            <p className="text-[#FF8A71]">Explore The Library</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
            <Features
              heading="Chatbots"
              text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
            />
            <Features
              heading="Knowledgebase"
              text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            />
            <Features
              heading="Education"
              text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Whatisgpt3;
