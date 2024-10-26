"use client";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { text: "스튜디오", href: "#", isActive: false },
  { text: "워크센터", href: "#", isActive: false },
  { text: "손비서", href: "#", isActive: false },
  { text: "메타휴먼", href: "#", isActive: false },
  { text: "영상제작소", href: "#", isActive: true },
  { text: "공지사항", href: "#", isActive: false },
  { text: "제휴문의", href: "#", isActive: false },
];

export default function Header() {
  return (
    <div className="bg-black backdrop-blur-2xl">
      <div className="max-w-[1280px] w-full flex items-center justify-between h-[52px] md:h-[100px] mx-auto p-[20px]">
        <div>
          <Link href={""}>
          <Image
            className=""
            src="/logo.svg"
            alt="logo"
            width={170}
            height={28}
          />
          </Link>
        </div>

        <div className="items-center gap-[20px] hidden lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`text-[16px] font-bold leading-[19px] cursor-pointer ${link.isActive ? "text-white relative" : "text-gray"
                }`}
            >
              {link.text}
              {link.isActive && (
                <Image
                  className="absolute left-1/2"
                  src="/acitve-dot.svg"
                  alt="active"
                  width={8}
                  height={8}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-[20px]">
          <div className="text-[16px] text-white font-bold leading-[19px] cursor-pointer">
            로그인
          </div>

          <div className="cursor-pointer">
            <Image
              className=""
              src="/language.svg"
              alt=""
              width={40}
              height={20}
            />
          </div>
        </div>
        <div className="cursor-pointer block lg:hidden">
          <Image
            className=""
            src="/menu.svg"
            alt=""
            width={16}
            height={12}
          />
        </div>
      </div>
    </div>
  );
}
