export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row p-4 md:mb-24 mb-8 md:justify-center md:items-center gap-12">
      <div className="flex flex-col md:gap-4 gap-2 w-[75%]">
        <h1 className="playfair md:text-[43px] text-[18px] leading-[120%] w-full">
          Unlock the Potential of Flutter
        </h1>
        <p className="md:text-[20px] text-[10px] leading-[140%]">
          Your Premier Partner for Cross-Platform App Excellence!
        </p>
        <button className="md:mt-12 mt-4 cursor-pointer w-fit flex gap-2 items-center bg-[#08A7CE] uppercase text-[10px] md:text-[16px] px-[16px] md:px-[30px] md:py-[12px] py-[8px]  rounded-[56px] hover:bg-[#08A7CE]/80">
          Upgrade Your Tech
        </button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="relative">
          <img src="./assets/main3.jpg" className="relative left-0 w-[75%]" />
          <img
            src="./assets/main1.png"
            className="absolute w-35 sm:w-50 md:w-75 md:right-0 -right-5 rounded-lg md:top-25 sm:top-15 top-5 z-10"
          />
          <img
            src="./assets/main2.png"
            className="absolute w-35 sm:w-50 md:w-75 rounded-lg md:right-25 right-0 md:-bottom-25 -bottom-10 z-10"
          />
          <div className="absolute bottom-30 right-10 -z-10 pointer-events-none">
            <div className="absolute top-[10%] right-[15%] w-[150px] h-[150px] bg-[#09D809]/40 rounded-full blur-3xl" />
            <div className="absolute bottom-[10%] right-[10%] w-[150px] h-[150px] bg-[#08A7CE]/40 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
