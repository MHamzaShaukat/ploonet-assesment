"use client";
import GradientArrow from "@/app/icons/GradientArrow";
import React from "react";

interface CustomAccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggle: () => void;
  titleTwo?: string
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ title, content, isOpen, toggle, titleTwo }) => {
  return (
    <div className="rounded-[10px] p-[1px] bg-WhisperWhite">
      <div className="bg-jetBlack border border-WhisperWhite bg-clip-border p-[10px] w-full rounded-[10px]">
        <button
          onClick={toggle}
          className="w-full text-left px-4 py-2 text-lg font-medium text-rose-900 hover:bg-gray-100 flex justify-between items-center"
        >
          <div className="flex flex-col">
            <span className="text-[20px] leading-[21px] text-gray">{title}</span>
            {titleTwo && <span className="text-[20px] leading-[21px] text-gray">{titleTwo}</span>}
          </div>
          <GradientArrow isOpen={isOpen} />
        </button>
        {isOpen && (
          <div className="px-4 py-3  bg-gray-50 max-w-[520px] mb-[32px]">
            <p className="text-[20px] leading-[21px] text-gray">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomAccordion;
