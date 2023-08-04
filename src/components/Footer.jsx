import React from "react";

function Footer() {
  return (
    <div className="mt-10 section_padding flex flex-col bg-[#031B34]">
      <div className="flex flex-col sm:items-center justify-center gap-10">
        <h1 className="font text-4xl font-bold ">
          Do you want to step in to the future before others
        </h1>
        <button className="text-white border px-6 py-4">
          Request Early Access
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-32 gap-10">
        <div className="flex flex-col gap-5">
          <img src="./GPT-3 (1).png" alt="logo" className="w-24 object-cover" />
          <p className="text-white text-sm w-3/4">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="text-white flex flex-col gap-5">
          <h1 className="font-bold">Links</h1>
          <ul className="flex flex-col gap-2">
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="text-white flex flex-col gap-5">
          <h1 className="font-bold">Company</h1>
          <ul className="flex flex-col gap-2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="text-white flex flex-col gap-5">
          <h1 className="font-bold">Get in touch</h1>
          <ul className="flex flex-col gap-2">
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-white text-center mt-32">
          © 2021 GPT-3. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
