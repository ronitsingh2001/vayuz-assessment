export default function Sidebar() {
  return (
    <div className="flex flex-col gap-8 border-r border-r-[rgba(255,255,255,0.25)] p-4 xl:p-8 w-[17vw] min-w-[200px]">
      <div id="brand" className="mx-auto">
        <img src="./assets/VayuzLogo.svg" alt="" />
      </div>
      <button className="relative p-[1px] rounded-[56px] bg-gradient-border">
        <div className="bg-[#131313] cursor-pointer font-[600] rounded-full py-[12px] px-[16px] lg:text-[16px] text-[12px] uppercase hover:bg-black">
          Contact Us
        </div>
      </button>
      <div className="flex flex-col gap-4 text-[15px]">
        <p className="cursor-pointer p-2 hover:opacity-80">App Development</p>
        <p className="cursor-pointer p-2 hover:opacity-80">Challenges</p>
        <p className="cursor-pointer p-2 hover:opacity-80">Hire Developer </p>
        <p className="cursor-pointer p-2 hover:opacity-80">Community</p>
      </div>
      <div className="flex flex-col gap-4 mt-48">
        <img src="./assets/side.jpg" className="rounded-[4px]" alt="" />
        <p className="text-[14px] leading-[160%] pe-3">
          Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
        </p>
      </div>
    </div>
  );
}
