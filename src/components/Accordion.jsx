import { useState } from "react";
import AccordionItem from "./AccordionItem";

const services = [
  {
    title: "Flutter App Development",
    content:
      "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform – faster and easier than ever before. Ready to revolutionize your app experience? Let's get started today!",
  },
  {
    title: "UI/UX Design",
    content:
      "We craft intuitive and engaging user experiences through modern, human-centered UI/UX design. From wireframes to final visuals, our design process ensures usability, consistency, and beauty across all devices.",
  },
  {
    title: "Customization & Integration",
    content:
      "Tailor your digital solutions to your specific business needs. We offer seamless integration with third-party platforms and custom module development for enhanced performance and scalability.",
  },
  {
    title: "Testing & Quality Assurance",
    content:
      "Our QA experts ensure that every product is thoroughly tested for performance, security, and user experience. We deliver bug-free, stable applications through manual and automated testing.",
  },
  {
    title: "Maintenance & Support",
    content:
      "Keep your applications running smoothly with our proactive maintenance and support services. We handle updates, bug fixes, and technical troubleshooting to ensure uninterrupted service.",
  },
  {
    title: "Consulting & Training",
    content:
      "Leverage our expertise to make informed tech decisions. We provide strategic consulting, technical audits, and hands-on training to empower your internal teams and drive success.",
  },
  {
    title: "Migration & Upgrades",
    content:
      "Modernize your legacy systems by migrating to newer, scalable platforms. Our upgrade services ensure minimal downtime, data integrity, and performance improvements tailored to your goals.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0); // 0th is open by default

  return (
    <div className="flex flex-col gap-6 w-full">
      {services.map((service, index) => (
        <AccordionItem
          key={index}
          title={service.title}
          content={service.content || ""}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
