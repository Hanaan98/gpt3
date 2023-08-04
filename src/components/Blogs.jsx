import React from "react";
import BlogItem from "./BlogItem";
import PageWrapper from "./PageWrapper";
function Blogs() {
  return (
    <PageWrapper>
      <div className="section_padding mt-10 flex flex-col gap-10" id="library">
        <div className="flex">
          <h1 className="font text-3xl font-bold">
            A lot is happening,
            <br /> We are blogging about it.
          </h1>
        </div> 
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className=" col-span-1 sm:row-span-2">
            <BlogItem
              heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              img="./blog01.png"
            />
          </div>
          <div className="col-span-1">
            <BlogItem
              heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              img="./blog02.png"
            />
          </div>
          <div className="col-span-1">
            <BlogItem
              heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              img="./blog03.png"
            />
          </div>
          <div className="col-span-1">
            <BlogItem
              heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              img="./blog04.png"
            />
          </div>
          <div className="col-span-1">
            <BlogItem
              heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              img="./blog05.png"
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Blogs;
