import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div>
      <div
        className={`w-full h-[calc(100vh_-_70px)] bg-cover relative flex flex-col justify-center items-center space-y-4`}
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/568370/pexels-photo-568370.jpeg)",
        }}
      >
        <div className="w-full h-full bg-black/40 absolute top-0 bottom-0" />
        <h2 className="text-white font-bold text-8xl z-30 font-montserrat">
          Grabit
        </h2>
        <p className="text-white font-bold text-2xl z-30 font-montserrat">
          Food you love, delivered in minutes.
        </p>
      </div>
      {/* <Image
        src={"https://images.pexels.com/photos/568370/pexels-photo-568370.jpeg"}
        alt="Hero Section Image"
        width={1000}
        height={1000}
        className="h-screen object-contain"
      /> */}
    </div>
  );
}
