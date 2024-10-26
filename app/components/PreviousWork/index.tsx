"use client";
import Image from "next/image";

const images = [
  "/01.svg",
  "/02.svg",
  "/03.svg",
  "/04.svg",
  "/05.svg",
  "/06.svg",
  "/07.svg",
  "/08.svg",
  "/09.svg",
  "/10.svg",
  "/11.svg",
  "/12.svg",
];

export default function PrviousWork() {
  return (
    <div className="w-full mx-auto">
      <div className="relative mb-[40px] sm:max-w-[480px] max-w-[210px] mx-auto">
        <Image
          className="absolute"
          src="/acitve-dot.svg"
          alt="active"
          width={8}
          height={8}
        />
        <h1 className="font-bold sm:text-[48px] text-[20px] text-white text-center">
          PREVIOUS WORKS
        </h1>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        {images.map((src, index) => (
          <div key={index} className="image-container">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={480}
              height={270}
              className="hidden sm:block"
            />
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={187}
              height={106}
              className="block sm:hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
