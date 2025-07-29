const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="">
      <div
        className="flex justify-between items-center cursor-pointer p-1 rounded hover:opacity-80"
        onClick={onToggle}
      >
        <div className="playfair text-[26px] opacity-80 capitalize">{title}</div>
        <img
          src={`./assets/${isOpen ? "minus" : "plus"}.svg`}
          alt={isOpen ? "Collapse" : "Expand"}
          className="w-5 h-5"
        />
      </div>
      {isOpen && (
        <p className="mt-2 w-[75%] text-[14px] opacity-60 transition-all">
          {content}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;
