const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="">
      <div
        className="flex justify-between items-center cursor-pointer p-1 rounded hover:opacity-80"
        onClick={onToggle}
      >
        <div className="playfair md:text-[26px] text-[16px] opacity-80 capitalize">{title}</div>
        <img
          src={`./assets/${isOpen ? "minus" : "plus"}.svg`}
          alt={isOpen ? "Collapse" : "Expand"}
          className="w-5 h-5"
        />
      </div>
      {isOpen && (
        <p className="mt-2 md:w-[75%] md:text-[14px] text-[12px] opacity-60 transition-all">
          {content}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;
