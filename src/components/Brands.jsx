import React from "react";

function Brands() {
  return (
    <div
      className="flex gap-10 mt-10 section_padding justify-center items-center flex-wrap"
      id="brands"
    >
      <div className="max-w-[150px] min-w-[120px] flex justify-center items-center">
        <img src="./google.png" alt="" />
      </div>
      <div className="max-w-[150px] min-w-[120px] flex justify-center items-center">
        <img src="./dropbox.png" alt="" />
      </div>
      <div className="max-w-[150px] min-w-[120px] flex justify-center items-center">
        <img src="./shopify.png" alt="" />
      </div>
      <div className="max-w-[150px] min-w-[120px] flex justify-center items-center">
        <img src="./slack.png" alt="" />
      </div>
      <div className="max-w-[150px] min-w-[120px] flex justify-center items-center">
        <img src="./atlassian.png" alt="" />
      </div>
    </div>
  );
}

export default Brands;
