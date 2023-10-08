"use client";
import Image from "next/image";
import BasketballDesktop from "@/assets/BasketballDesktop.png";
import BasketballTablet from "@/assets/BasketballTablet.png";
import { useEffect, useState } from "react";

const bottomData = {
  header: "PLAYERS",
  headerColor: "text-header-gray",
  content: [
    {
      title: "CONNECTION",
      subContent:
        "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
      height: "h-[377px] lg:h-[485px]",
      titleColor: "text-title-gray",
      underlineColor: "border-b-purple-underline",
      subContentColor: "text-black",
      backgroundColor: "bg-white",
    },
    {
      title: "COLLABORATION",
      subContent:
        "Work with recruiter to increase your chances of finding talented athlete.",
      height: "h-[235px] lg:h-[245px]",
      titleColor: "text-title-gray",
      underlineColor: "border-b-purple-underline",
      subContentColor: "text-black",
      backgroundColor: "bg-light-gray-background",
    },
    {
      title: "GROWTH",
      subContent: "Save your time, recruit proper athlets for your team.",
      height: "h-[207px] lg:h-[240px]",
      textUnderline: "text-purple-text-underline",
      titleColor: "text-title-gray",
      underlineColor: "border-b-white",
      subContentColor: "text-white",
      backgroundColor: "bg-dark-purple-background",
    },
  ],
};

const BottomDataComponent = () => {
  const [rightPosition, setRightPosition] = useState(0);

  // first render
  useEffect(() => {
    const handleResize = () => {
      let newRightPosition = 125;

      if (1920 - window.innerWidth >= 125) {
        newRightPosition = 125 + (window.innerWidth - 1920) / 2;
      }
      setRightPosition(newRightPosition);
    };

    handleResize();
  }, []);

  // Update rightPosition whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      let newRightPosition = 125;

      if (1920 - window.innerWidth >= 125) {
        newRightPosition = 125 + (window.innerWidth - 1920) / 2;
      }
      //   console.log("newRightPosition", newRightPosition);

      setRightPosition(newRightPosition);
    };

    window.addEventListener("resize", handleResize);
  }, [rightPosition]);
  return (
    <div className="hidden md:block relative w-screen overflow-hidden">
      <div
        className="absolute bottom-[155px] z-10"
        style={{ right: `${rightPosition}px` }}
      >
        {/* desktop */}
        <div className="hidden lg:block">
          <Image
            src={BasketballDesktop}
            alt="BasketballDesktop"
            className=" object-right-center lg:w-[991px] lg:h-[815px] "
          />
        </div>
      </div>
      <div className="absolute right-0 bottom-[189px] z-10">
        {/* tablet */}
        <div className="hidden md:block lg:hidden">
          <Image
            src={BasketballTablet}
            alt="BasketballTablet"
            className=" object-right-center w-[437px] h-[586px] "
          />
        </div>
      </div>

      <div className="">
        {bottomData.content.map((el, index) => (
          <div
            key={index}
            className={`grid grid-cols-12  ${el.height} ${el.backgroundColor}`}
          >
            <div
              className={`md:ml-[-31px] lg:ml-0 sm:col-start-2 sm:col-end-8 xl:col-start-2 2xl:col-start-3 xl:col-end-7 ${
                index === 0 && " xl:w-[571px]"
              } flex flex-col justify-center gap-5`}
            >
              {index === 0 && (
                <div className=" text-header-gray text-[90px] font-light">
                  {bottomData.header}
                </div>
              )}
              <div className="flex items-center">
                <div className="mr-2">
                  <div
                    className={`text-black text-[18px] font-light leading-none tracking-wide mb-1 ${el.textUnderline} `}
                  >
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
                className={`sm:[18px] lg:text-[20px] font-light ${el.subContentColor} `}
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

export default BottomDataComponent;
