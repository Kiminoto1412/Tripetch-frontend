"use client";
import Image from "next/image";
import RugbyMobile from "@/assets/RugbyMobile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { CSSProperties } from "react";

const topData = {
  header: "ATHLETS",
  headerColor: "text-header-gray",
  content: [
    {
      title: "CONNECTION",
      subContent:
        "Connect with coaches directly, you can ping coaches to view profile.",
    },
    {
      title: "COLLABORATION",
      subContent:
        "Work with other student athletes to increase visibility. When you share and like other players' videos it will increase your visibility as a player. This is the team work aspect to Surface 1.",
    },
    {
      title: "GROWTH",
      subContent:
        "Resources and tools for you to get better as a student athlete. Access to training classes, tutor sessions, etc.",
    },
  ],
};

const TopDataMobileComponent = () => {
  return (
    <div className="md:hidden">
      <div className="mx-[18px] text-header-gray text-[50px] font-light">
        {topData.header}
      </div>
      <div className="mt-[11px] mb-[-55px]">
        <div className="relative h-[281px] z-10 ">
          <Image
            src={RugbyMobile}
            alt="RugbyMobile"
            className="w-[218px] h-[281px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          />
        </div>
      </div>

      <div className="h-[284px]  bg-light-gray-background">
        <Swiper
          style={{ "--swiper-pagination-color": "#5E3DB3" } as CSSProperties}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-full"
        >
          {topData.content.map((el, index) => (
            <SwiperSlide key={index}>
              <div className="px-[18px] flex flex-col justify-center gap-5 h-full bg-light-gray-background">
                <div className="flex items-center">
                  <div className="mr-2">
                    <div className="text-black text-[14px] font-light leading-none tracking-wide mb-[2px]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="border-b-4 border-b-purple-underline rounded-lg"></div>
                  </div>
                  <div className="text-title-gray text-[28px] font-light ">
                    {el.title}
                  </div>
                </div>
                <div className="text-[15px]  font-light text-black ">
                  {el.subContent}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopDataMobileComponent;
