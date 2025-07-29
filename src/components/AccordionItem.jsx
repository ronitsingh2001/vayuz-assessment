const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div>
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

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? 'max-h-[500px] opacity-100 scale-100 mt-2'
            : 'max-h-0 opacity-0 scale-95'
        }`}
      >
        <p className="md:w-[75%] md:text-[14px] text-[12px] opacity-60">
          {content}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
