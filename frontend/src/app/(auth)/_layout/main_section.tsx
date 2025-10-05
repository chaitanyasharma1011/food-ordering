import client_acquisition_tools from "images/illustrations/client_acquisition_tools.svg";
import Image from "next/image";
import { ReactNode } from "react";
export default function MainSection({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primarybg-300 min-h-inherit min-w-full lg:pt-8 lg:pb-10 px-6 lg:px-20 lg:flex justify-between relative lg:mt-0 space-x-0 lg:space-x-4 overflow-x-hidden">
      <div className=" hidden lg:block space-y-8">
        <p className="text-[#0D0D0D] font-montserrat font-medium text-2xl leading-[36px] pt-4 ">
          Explore a wide range of delicious meals
          <br />
          from your favorite restaurants,
        </p>
        <p className="font-montserrat text-sm leading-[21px] text-[#0D0D0D]">
          Get them delivered hot and fresh to your doorstep in no time. <br />
          Elevate your dining experience with curated recommendations, <br />
          smart combos, and instant order tracking that keeps you updated.{" "}
          <br />
          Enjoy convenience, variety, and taste ; all in one app.
        </p>
        <Image
          src={
            "https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg"
          }
          alt="logo"
          width={500}
          height={500}
          className="w-[350px] h-auto"
        />
      </div>
      <div className="lg:shadow-[0_4px_10px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]  lg:min-h-full w-full lg:min-w-[500px] lg:w-[500px] rounded-[8px] px-0 lg:px-[32px] pt-8 lg:pt-0 lg:bg-gradient-to-r from-gray-50 via-white to-gray-50 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
}
