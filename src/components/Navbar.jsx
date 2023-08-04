import React, { useState } from "react";
import Link from "next/link";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="section_padding flex justify-between items-center">
        <div className="flex items-center justify-between gap-10">
          <div>
            <img src="./GPT-3 (1).png" alt="logo" />
          </div>
          <div className="hidden lg:flex lg:gap-10 ">
            <Link href="#home" onClick={handleScroll}>
              Home
            </Link>
            <Link href="#whatisgpt?" onClick={handleScroll}>
              What is GPT?
            </Link>
            <Link href="#openai" onClick={handleScroll}>
              OpenAi
            </Link>
            <Link href="#casestudies" onClick={handleScroll}>
              Case Studies
            </Link>
            <Link href="#library" onClick={handleScroll}>
              Library
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden xs:flex xs:gap-3 xs:items-center">
            <Link href="">
              <button className="py-2 px-5 rounded-sm">Sign in</button>
            </Link>
            <Link href="">
              <button className="bg-[#FF4820] py-2 px-5 rounded-sm">
                Sign up
              </button>
            </Link>
          </div>
          <div className="lg:hidden">
            {toggle ? (
              <AiOutlineClose
                color="white"
                fontSize={"20px"}
                onClick={() => setToggle(false)}
              />
            ) : (
              <CgMenuRightAlt
                color="white"
                fontSize={"20px"}
                onClick={() => setToggle(true)}
              />
            )}
            {toggle && (
              <div className="top-10 right-10 flex flex-col bg-[var(--color-footer)] absolute xs:top-16 xs:right-14 scale-up-center p-3 text-end  justify-center w-40 ">
                <div className="flex flex-col  text-sm gap-2 ">
                  <Link href="#home">Home</Link>
                  <Link href="#whatisgpt?">What is GPT?</Link>
                  <Link href="#openai">OpenAi</Link>
                  <Link href="#casestudies">Case Studies</Link>
                  <Link href="#library">Library</Link>
                </div>
                <div className="xs:hidden flex gap-3 flex-col text-sm py-2 sm:flex-row sm:items-center sm:justify-center">
                  <Link href="">
                    <button className="">Sign in</button>
                  </Link>
                  <Link href="">
                    <button className="bg-[#FF4820] py-2 px-5 rounded-sm">
                      Sign up
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
