import Accordion from "./Accordion";
import Connect from "./Coonect";
import Footer from "./Footer";
import Hero from "./Hero";

export default function MainDiv() {
  return (
    <div className="flex flex-col w-full">
      <p className="border-b border-b-[rgba(255,255,255,0.25)] md:py-7 py-3 px-2 md:ps-4 w-[85%] text-[10px] md:text-[16px] font-[600]">
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
    <div className="flex flex-col gap-2 p-4 md:mt-32 mt-12 text-center items-center">
      <h1 className="playfair md:text-[40px] text-[25px] leading-none">
        Our Dynamic Services Suite!
      </h1>
      <p className="md:text-[22px] text-[12px] opacity-80">
        Embrace Innovation: Let's Create Together!
      </p>
      <p className="md:text-[14px] text-[10px] opacity-80 md:w-3/5 w-2/3">
        Step into innovation! Explore our range of services and let's create
        something extraordinary together. Your vision, our expertise. Let's
        begin!
      </p>
    </div>
  );
}

function BeginComponent() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-2 p-4 w-full items-center px-3">
      <div className="md:w-[25%]">
        <p className="playfair font-[500] md:text-[40px] text-[25px] m-0 leading-none md:w-[25%]">
          Flutter's Dawn
        </p>
        <p className="text-[16px] font-[600]">History of flutter</p>
      </div>
      <div className="md:w-[50%]">
        <p className="md:text-[16px] text-[12px] text-center text-white opacity-80 w-full mx-auto lg:w-[75%]">
          Uncover the fascinating story of Flutter in 'Flutter's Dawn: History
          of Flutter.' From humble origins to global acclaim, delve into its
          captivating narrative. Explore milestones, triumphs, and challenges.
          Whether tech enthusiast or curious mind, join us on this captivating
          journey! <button className="text-[#08A7CE]">Click to begin!</button>
        </p>
      </div>
      <div className="mt-auto md:ms-auto md:w-[25%] flex justify-end">
        <button className="mt-auto flex gap-2 items-center bg-[#08A7CE] uppercase md:text-[16px] text-[10px] px-[30px] py-[12px]  rounded-[56px] cursor-pointer hover:bg-[#08A7CE]/80">
          Begin
          <span>
            <img src="./assets/Vector.svg" alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}
