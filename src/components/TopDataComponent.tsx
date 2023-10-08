"use client";
import Image from "next/image";
import RugByDesktop from "@/assets/RugByDesktop.png";
import RugByTablet from "@/assets/RugByTablet.png";

import { useEffect, useState } from "react";

const topData = {
  header: "ATHLETS",
  headerColor: "text-header-gray",
  content: [
    {
      title: "CONNECTION",
      subContent:
        "Connect with coaches directly, you can ping coaches to view profile.",
      height: "md:h-[377px] lg:h-[345px]",
      titleColor: "text-title-gray",
      underlineColor: "border-b-purple-underline",
      subContentColor: "text-black",
      backgroundColor: "bg-white",
    },
    {
      title: "COLLABORATION",
      subContent:
        "Work with other student athletes to increase visibility. When you share and like other players' videos it will increase your visibility as a player. This is the team work aspect to Surface 1.",
      height: "md:h-[235px] lg:h-[256px]",
      titleColor: "text-title-gray",
      underlineColor: "border-b-purple-underline",
      subContentColor: "text-black",
      backgroundColor: "bg-light-gray-background",
    },
    {
      title: "GROWTH",
      subContent:
        "Resources and tools for you to get better as a student athlete. Access to training classes, tutor sessions, etc.",
      height: "md:h-[207px] lg:h-[297px]",
      titleColor: "text-title-gray",
      underlineColor: "border-b-white",
      subContentColor: "text-white",
      backgroundColor: "bg-purple-background",
    },
  ],
};

const TopDataComponent = () => {
  const [leftPosition, setLeftPosition] = useState(0);

  // first render
  useEffect(() => {
    const handleResize = () => {
      let newLeftPosition = 175;

      if (1920 - window.innerWidth >= 175) {
        newLeftPosition = 175 + (window.innerWidth - 1920) / 2.9;
      }
      setLeftPosition(newLeftPosition);
    };
    handleResize();
  }, []);

  // Update leftPosition whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      let newLeftPosition = 175;

      if (1920 - window.innerWidth >= 175) {
        newLeftPosition = 175 + (window.innerWidth - 1920) / 2.9;
      }
      setLeftPosition(newLeftPosition);
    };

    window.addEventListener("resize", handleResize);
  }, [leftPosition]);
  return (
    <div className="hidden md:block relative ">
      <div
        className="absolute top-[35px]  z-10"
        style={{ left: `${leftPosition}px` }}
      >
        <div className="hidden lg:block">
          <Image
            src={RugByDesktop}
            alt="RugByDesktop"
            className=" object-right-center w-[678px] h-[950px] "
          />
        </div>
      </div>

      <div className="absolute left-0 bottom-0  z-10">
        <div className="hidden md:block lg:hidden">
          <Image
            src={RugByTablet}
            alt="RugByTablet"
            className=" object-right-center  w-[337px] h-[699px] "
          />
        </div>
      </div>

      <div className="">
        {topData.content.map((el, index) => (
          <div
            key={index}
            className={`md:grid md:grid-cols-8  ${el.height} ${el.backgroundColor}`}
          >
            <div className="md:mr-[31px] lg:mr-0 md:col-start-4 md:col-end-9 lg:col-start-5 lg:col-end-8 flex flex-col justify-center gap-5">
              {index === 0 && (
                <>
                  <div className=" text-header-gray text-[90px] font-light">
                    {topData.header}
                  </div>
                </>
              )}

              <div className="flex items-center">
                <div className="mr-2">
                  <div className="text-black text-[18px] font-light leading-none tracking-wide mb-1 ">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div
                    className={`border-b-4 ${el.underlineColor} rounded-lg`}
                  ></div>
                </div>
                <div className={`${el.titleColor} text-[36px] font-light`}>
                  {el.title}
                </div>
              </div>
              <div
                className={`text-[18px] lg:text-[20px] font-light ${el.subContentColor} `}
              >
                {el.subContent}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDataComponent;
