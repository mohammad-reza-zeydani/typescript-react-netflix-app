import { useState } from "react";
import { TAccordion } from "../../../types/types";
const Accordion = ({ text, title }: TAccordion) => {
  const [open, setOpen] = useState(false);// >>>  the state for open or close my Accordion
  return (
    <div className='flex w-full justify-center items-center'>
      <div className=' flex flex-col items-start justify-center w-5/6 xs:w-2/3 lg:w-1/2 '>
      {/* Accordion open & close button and the title */}
        <button
          onClick={() => setOpen(!open)}
          className='flex justify-between items-center z-50 w-full active:bg-blue-500 focus:bg-neutral-800 bg-neutral-800/40  px-2 py-2 xs:p-3 sm:p-5 cursor-pointer'>
          <h1 className='font-sans font-bold text-sm xs:text-base lg:text-xl'>
            {title}
          </h1>
          <div className='text-white'>
            {open ? <div className='rotate-45'>✚</div> : "✚"}
          </div>
        </button>
        {/* Accordion invisible content */}
        <span
          className={`${
            open
              ? "pl-2 xs:pl-3 py-5 sm:pl-5 bg-neutral-900 translate-y-1 transition-all text-sm sm:text-base lg:text-lg "
              : " w-full pl-2 xs:pl-3 sm:pl-5  transition-all -translate-y-10 bg-neutral-900 text-sm sm:text-base lg:text-lg"
          }`}>
            {/* visible text if open is true */}
          {open && text}
        </span>
      </div>
    </div>
  );
};

export default Accordion;
