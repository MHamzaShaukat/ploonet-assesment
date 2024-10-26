"use client";
const features = [
  { title: "FAST", subtitle: "X2" },
  { title: "Quality", subtitle: "A++" },
  { title: "LOW PRICE", subtitle: "1/2" },
  { title: "High Tech", subtitle: "Gen AI" },
];

export default function VideoStudio() {
  return (
    <div className="bg-black w-full px-[20px] py-[40px]">
      <div className="max-w-[840px] mx-auto flex flex-col items-center">
        <h1 className="bg-clip-text text-transparent bg-studioGradient mb-[10px]">
          영상 제작소
        </h1>
        <h1 className="text-gray font-normal text-[18px] mb-[20px]">
          당장 내일{" "}
          <span className="text-white font-bold">‘고품질 맞춤 영상’</span> 을
          받아보세요.
        </h1>
        <div className="flex items-center mb-[40px]">
          {features.map((feature, index) => (
            <div key={index} className="p-[1px] bg-studioGradient rounded-full">
              <div className="bg-black p-4 lg:w-[211px] lg:h-[211px] w-[84px] h-[84px] rounded-full border border-transparent bg-clip-border flex flex-col items-center justify-center">
                <h1 className="bg-clip-text text-transparent bg-studioGradient lg:text-[32px] text-[16px] lg:leading-[38px] leading-[16px] font-bold text-center">
                  {feature.title}
                </h1>
                <h2 className="bg-clip-text text-transparent bg-studioGradient text-[24px] font-medium hidden lg:block">
                  {feature.subtitle}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-bold text-[18px] leading-[21px] mb-[20px] text-white text-center">
          AI VIDEO ON YOUR DEMAND
        </h2>
        <p className="text-[16px] font-normal leading-[24px] text-white text-center mb-[20px] max-w-[682px] w-full">
          가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI
          기술에 영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는
          보장된 영상을 만듭니다
        </p>
        <p className="text-[16px] font-normal leading-[24px] text-white text-center mb-[40px] max-w-[682px] w-full">
          가격은 절반으로, 속도는 두배로, 품질은 A++! 기업 홍보, 제품 소개, 교육
          및 행사, 정보 및 안내 영상 등 당신이 필요한 '그 영상'을 플루닛
          영상제작소에 맡겨주세요.
        </p>
        <div className="relative lg:w-[800px] w-[240px] mx-auto">
          <div className="h-[1px] bg-lineBreakerGradient"></div>
        </div>
      </div>
    </div>
  );
}
