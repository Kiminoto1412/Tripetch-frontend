"use client";
import Image from "next/image";
import BasketballMobile from "@/assets/BasketballMobile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { CSSProperties } from "react";

const bottomData = {
  header: "PLAYERS",
  headerColor: "text-header-gray",
  content: [
    {
      title: "CONNECTION",
      subContent:
        "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
    },
    {
      title: "COLLABORATION",
      subContent:
        "Work with recruiter to increase your chances of finding talented athlete.",
    },
    {
      title: "GROWTH",
      subContent: "Save your time, recruit proper athlets for your team.",
    },
  ],
};

const BottomDataMobileComponent = () => {
  return (
    <div className="md:hidden mt-[19px]">
      <div className="mx-[18px] h-[59px] text-header-gray text-[50px] font-light">
        {bottomData.header}
      </div>
      <div className=" mb-[-58px]">
        <div className="relative h-[272px] z-10 ">
          <Image
            src={BasketballMobile}
            alt="BasketballMobile"
            className="w-[302px] h-[249px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          />
        </div>
      </div>

      <div className="h-[238px] bg-light-gray-background">
        <Swiper
          style={{ "--swiper-pagination-color": "#5E3DB3" } as CSSProperties}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-full"
        >
          {bottomData.content.map((el, index) => (
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

export default BottomDataMobileComponent;
