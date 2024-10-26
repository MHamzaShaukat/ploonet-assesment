"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomAccordion from "../CustomAccordion";

const AccordionData = [
  {
    title: "영상 유형 선택",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "연락 받으실 담당자 성함",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "이메일",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "휴대폰 번호",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "의뢰하실 영상내용 ",
    titleTwo: '아래 예시를 참고하셔서 이 중 편하신 내용을 기재해주세요.',
    content: "고객님의 비즈니스 유형 : 관공서/일반기업/소상공인 등 영상 장르 : 홍보,프로모션/IR/프레젠테이션 등 내용 : 제작하시고자 하는 영상의 내용을 간단히 기재해주세요.",
  },
  {
    title: "참고 영상",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const VideoProduction: React.FC = () => {
  const [currentlyOpen, setCurrentlyOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setCurrentlyOpen(currentlyOpen === index ? null : index);
  };

  return (
    <div className="bg-black w-full px-4 py-[40px]">
      <div className="max-w-[840px] mx-auto flex flex-col items-center">
        <h1 className="bg-clip-text text-[24px] font-bold text-transparent bg-studioGradient mb-3">
          영상 제작 문의
        </h1>
        <h2 className="text-white font-bold text-[30px] mb-5 max-w-[600px] text-center">
          영상 제작이 필요하다면, <span className="text-gray-400 ">지금 문의 주세요.</span>
        </h2>
        <p className="text-gray font-normal text-[24px] mb-5 max-w-[550px] text-center">
          여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 즉시 연락 드리겠습니다.
        </p>
        <p className="text-darkGray font-normal text-[18px] mb-5 max-w-[500px] text-center">
          henry.lim@saltlux.com
        </p>

        <div className="flex flex-col gap-4 w-full">
          {AccordionData.map((item, index) => (
            <CustomAccordion
              key={index}
              title={item.title}
              titleTwo={item.titleTwo}
              content={item.content}
              isOpen={currentlyOpen === index}
              toggle={() => toggleAccordion(index)}
            />
          ))}
          <div className="max-w-[760px] w-full">
            <p className="text-orange text-[14px] leading-[25px] text-start mb-2">
              *
              참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를 적어주시면 더 정확히 안내해드리겠습니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full max-w-[840px] mt-[40px]">
          <div className="flex flex-row gap-4 items-center mb-4 md:mb-0">
            <Image
              className=""
              src="/accept-icon.svg"
              alt="active"
              width={29}
              height={13}
            />
            <div className="flex flex-row">
              <p className="text-gray underline text-[20px] leading-[32px] text-start ">
                개인정보처리방침에
              </p>
              <p className="text-gray text-[20px] leading-[32px] text-start ">
                동의합니다.
              </p>
            </div>
          </div>
          <button className="w-full md:w-[145px] h-[64px] rounded-[8px] bg-orange text-white font-semibold mt-5 md:mt-0">
            문의 보내기
          </button>
        </div>


      </div>
    </div>
  );
};

export default VideoProduction;
