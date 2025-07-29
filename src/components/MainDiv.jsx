import Accordion from "./Accordion";
import Connect from "./Coonect";
import Footer from "./Footer";
import Hero from "./Hero";

export default function MainDiv() {
  return (
    <div className="flex flex-col w-full">
      <p className="border-b border-b-[rgba(255,255,255,0.25)] py-7 px-4 w-[85%] text-[16px] font-[600]">
        Securing Your Flutter App: Best Practices and Techniques
      </p>
      <Hero />
      <BeginComponent />
      <AccordionHeader />
      <div className="flex p-4 gap-4 pe-5">
        <Accordion />
        <div className="md:flex hidden h-full w-[40%]">
          <img src="./assets/com.jpg" className="object-cover" alt="" />
        </div>
      </div>
      <Connect />
      <Footer />
    </div>
  );
}

function AccordionHeader() {
  return (
    <div className="flex flex-col gap-2 p-4 mt-32 text-center items-center">
      <h1 className="playfair text-[40px] leading-none">
        Our Dynamic Services Suite!
      </h1>
      <p className="text-[22px] opacity-80">
        Embrace Innovation: Let's Create Together!
      </p>
      <p className="text-[14px] opacity-80 w-3/5">
        Step into innovation! Explore our range of services and let's create
        something extraordinary together. Your vision, our expertise. Let's
        begin!
      </p>
    </div>
  );
}

function BeginComponent() {
  return (
    <div className="flex gap-2 p-4 w-full items-center px-3">
      <div className="w-[25%]">
        <p className="playfair font-[500] text-[40px] m-0 leading-none w-[25%]">
          Flutter's <br /> Dawn
        </p>
        <p className="text-[16px] font-[600]">History of flutter</p>
      </div>
      <div className="w-[50%]">
        <p className="text-[16px] text-white opacity-80 w-full mx-auto lg:w-[75%]">
          Uncover the fascinating story of Flutter in 'Flutter's Dawn: History
          of Flutter.' From humble origins to global acclaim, delve into its
          captivating narrative. Explore milestones, triumphs, and challenges.
          Whether tech enthusiast or curious mind, join us on this captivating
          journey! <button className="text-[#08A7CE]">Click to begin!</button>
        </p>
      </div>
      <div className="mt-auto ms-auto w-[25%] flex justify-end">
        <button className="mt-auto flex gap-2 items-center bg-[#08A7CE] uppercase text-[16px] px-[30px] py-[12px]  rounded-[56px] cursor-pointer hover:bg-[#08A7CE]/80">
          Begin
          <span>
            <img src="./assets/Vector.svg" alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}
