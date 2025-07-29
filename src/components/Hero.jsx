export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row p-4 mb-24 justify-center items-center gap-12">
      <div className="flex flex-col gap-4 w-[75%]">
        <h1 className="playfair text-[43px] leading-[120%] w-full">
          Unlock the Potential of Flutter
        </h1>
        <p className="text-[20px] leading-[140%]">
          Your Premier Partner for Cross-Platform App Excellence!
        </p>
        <button className="mt-12 cursor-pointer w-fit flex gap-2 items-center bg-[#08A7CE] uppercase text-[16px] px-[30px] py-[12px]  rounded-[56px] hover:bg-[#08A7CE]/80">
          Upgrade Your Tech
        </button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="relative">
          <img src="./assets/main3.jpg" className="relative left-0 w-[75%]" />
          <img
            src="./assets/main1.png"
            className="absolute w-75 right-0 rounded-lg top-40 z-10"
          />
          <img
            src="./assets/main2.png"
            className="absolute w-75 rounded-lg right-25 -bottom-25 z-10"
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
