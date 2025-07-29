export default function Connect() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-8">
        <div className="flex flex-col w-full gap-8">
          <ul className="flex gap-4 md:gap-6 lg:gap-8 text-[16px] flex-wrap">
            <li className="hover:opacity-80 cursor-pointer">Events</li>
            <li className="hover:opacity-80 cursor-pointer">Gen AI</li>
            <li className="hover:opacity-80 cursor-pointer">Careers</li>
            <li className="hover:opacity-80 cursor-pointer">Case study</li>
            <li className="hover:opacity-80 cursor-pointer">SME Talks</li>
          </ul>
          <h1 className="w-[100%] md:w-[75%] lg:w-[50%] text-[28px]">
            For any collaborative projects or enquiries feel free to connect
            with us.
          </h1>
          <h1 className="text-[30px]">vayuz.com</h1>
          </div>
    <div className="flex flex-col gap-4 lg:ms-auto lg:items-end px-4">
      <h1 className="text-[75px] leading-none playfair font-[400] lg:w-[75%] lg:text-end">
        Connect With Us
      </h1>
      <form action="#" className="flex flex-col gap-2 w-[75%]">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Full Name"
            className="border-b w-full text-[14px] p-2"
          />
          <input
            type="text"
            placeholder="Email"
            className="border-b w-full text-[14px] p-2"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border-b w-full text-[14px] p-2"
          />
        </div>
        <button className="relative -right-5 ms-auto uppercase mt-4 bg-[#08A7CE66] border-[#08A7CE] border py-2 cursor-pointer hover:bg-[#08A7CE66]/80 px-6 rounded-[56px] font-[700] text-[13px]">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
