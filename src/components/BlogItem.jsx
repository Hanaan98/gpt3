import React from "react";

function BlogItem(props) {
  return (
    <div className="flex flex-col w-full h-full ">
      <div className="w-full h-full ">
        <img
          src={props.img}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="flex flex-col justify-between bg-[#042C54] px-10 py-8 gap-5 h-full rounded-b-md">
        <div className="flex flex-col gap-2">
          <p className="text-white text-sm">Sep 26, 2021</p>
          <h1 className="text-white font-bold">{props.heading}</h1>
        </div>
        <p className="text-white text-sm cursor-pointer">Read Full Article</p>
      </div>
    </div>
  );
}

export default BlogItem;
