"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="w-full bg-[url('/banner-small.svg')] md:bg-[url('/banner.svg')] bg-cover bg-center bg-no-repeat h-[361px]	md:h-[934px]">
        <Image
          className="absolute top-[320px] right-[40px] hidden md:block"
          src="/banner-icon.svg"
          alt=""
          width={125}
          height={125}
        />
      </div>
    </>
  );
}
