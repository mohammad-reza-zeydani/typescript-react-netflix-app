import { BodyData } from "./bodyData";
import { TBody } from "../../../types/types";
import Accordion from "../accordion/accordion";
import { AccordionData } from "../accordion/accordionData";
const Body = () => {
  return (
    <>
      {/*body main content section*/}
      <section className='flex flex-col md:gap-y-4 bg-black text-white divide-y-4 sm:divide-y-8 divide-gray-800 myborder '>
        {BodyData.map((item: TBody) => {
          return (
            // kids and phone images and titles
            item.reverse ? (
              <div
                key={item.id}
                className=' flex flex-col lg:flex-row items-center justify-center body'>
                <img src={item.image} alt='' />
                <div className='flex flex-col'>
                  <h2 className=' text-lg md:text-4xl font-bold'>
                    {item.title}
                  </h2>
                  <p className='text-base md:text-2xl'>{item.text}</p>
                </div>
              </div>
            ) : (
              // tv and devices images and titles
              <div
                key={item.id}
                className='flex flex-col-reverse lg:flex-row items-center justify-center body'>
                <div className='flex flex-col'>
                  <h2 className='text-lg md:text-4xl font-bold'>
                    {item.title}
                  </h2>
                  <p className='text-base md:text-2xl'>{item.text}</p>
                </div>
                <img src={item.image} alt='' />
              </div>
            )
          );
        })}
      </section>
      {/* body accordion section */}
      <section className='flex  flex-col justify-center items-center w-full pt-9 bg-black text-white gap-y-7 sm:gap-y-9 '>
        {/* accordion title */}
        <h1 className=' font-sans font-bold text-xl sm:text-2xl lg:text-4xl tracking-normal md:tracking-wider'>
          Frequntley Asked Questions
        </h1>
        {/* accordion main div */}
        <div className='w-full child:pt-3'>
          {AccordionData.map((item) => {
            return (
              <Accordion key={item.id} title={item.title} text={item.text} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Body;
