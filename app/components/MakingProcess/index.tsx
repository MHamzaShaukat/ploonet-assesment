"use client";
import Image from "next/image";

const steps = [
  {
    step: "STEP1",
    title: "사전 논의",
    description:
      "영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의",
  },
  {
    step: "STEP2",
    title: "사전 논의",
    description:
      "영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의",
  },
  {
    step: "STEP3",
    title: "사전 논의",
    description:
      "영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의",
  },
  {
    step: "STEP4",
    title: "사전 논의",
    description:
      "영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의",
  },
  {
    step: "STEP5",
    title: "사전 논의",
    description:
      "영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의",
  },
];

const ploonetSteps = [
  {
    step: "STEP1",
    title: "제작 안내",
    description: "영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내",
  },
  {
    step: "STEP2",
    title: "제작 안내",
    description: "영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내",
  },
  {
    step: "STEP3",
    title: "제작 안내",
    description: "영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내",
  },
];

export default function MakingProcess() {
  return (
    <div className="w-full max-w-[1280px] mx-auto my-[120px] px-[20px]">
      <div className="relative mb-[40px] sm:max-w-[480px] max-w-[210px] mx-auto">
        <Image
          className="absolute"
          src="/acitve-dot.svg"
          alt="active"
          width={8}
          height={8}
        />
        <h1 className="font-bold sm:text-[48px] text-[20px] text-white text-center">
          MAKING PROCESS
        </h1>
      </div>

      <div className="flex items-start gap-[20px] flex-wrap w-full mb-[20px]">
        <div className="bg-jetBlack border-WhisperWhite border rounded-[20px] p-[20px] flex flex-col items-center sm:max-w-[48%] w-full">
          <h1 className="text-white sm:text-[44px] text-[28px] font-bold mb-[10px]">
            일반 제작
          </h1>
          <p className="sm:text-[24px] text-[28px] text-white mb-[20px]">
            제작 시작 후 5영업일 이내
          </p>

          {steps.map((item, index) => (
            <div
              key={index}
              className="relative py-[20px] px-[30px] sm:rounded-[52px] rounded-[15px] flex sm:gap-[20px] gap-[10px] border-WhisperWhite border mb-[20px]"
            >
              <div>
                <h2 className="bg-clip-text text-transparent bg-stepsGradient sm:text-[16px] text-[12px]">
                  {item.step}
                </h2>
                <h5 className="text-white font-bold  sm:text-[20px] text-[16px]">
                  {item.title}
                </h5>
              </div>
              <div>
                <p className="text-gray sm:text-[16px] text-[12px] sm:max-w-[280px] max-w-[200px] w-full">
                  {item.description}
                </p>
              </div>
              <Image
                className="absolute left-1/2 bottom-[-10px]"
                src="/polygon-6.svg"
                alt="active"
                width={29}
                height={13}
              />
            </div>
          ))}
        </div>

        <div className="sm:max-w-[48%] w-full rounded-[20px] p-[1px] bg-studioGradient">
          <div className="bg-jetBlack border border-transparent bg-clip-border p-[20px] w-full rounded-[20px] flex flex-col items-center">
            <h1 className="font-bold sm:text-[44px] text-[28px] mb-[10px] bg-clip-text text-transparent bg-quickServeGradient">
              Ploonet Quickserve™
            </h1>
            <p className="sm:text-[24px] text-[16px] text-white font-bold mb-[50px]">
              제작 시작 후 12~48시간 이내
            </p>

            {ploonetSteps.map((item, index) => (
              <div
                key={index}
                className="flex sm:gap-[20px] gap-[10px] mb-[70px]"
              >
                <div>
                  <div className="bg-quickServeGradient px-[20px] py-[10px] rounded-[19px] flex flex-col items-center">
                    <h2 className="text-white text-[16px]">{item.step}</h2>
                    <Image
                      className=""
                      src="/isolation-mode.svg"
                      alt=""
                      width={40}
                      height={51}
                    />
                  </div>
                </div>
                <div className="max-w-[400px] w-full border-b border-WhisperWhite">
                  <h2 className="mb-[10px] font-bold sm:text-[24px] text-[18px] text-white">
                    {item.title}
                  </h2>
                  <p className="sm:text-[18px] text-[14px] font-semibold mb-[10px] text-lightGray">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[760px-w-full">
        <p className="text-gray text-[14px] text-center mb-2">
          * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며,  모션그래픽 등
          전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
        </p>
        <p className="text-gray text-[14px] text-center">
          ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수
          있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
