import { BodyData } from "./bodyData";
import { TBody } from "../../../types/types";
import Accordion from "../accordion/accordion";
import { AccordionData } from "../accordion/accordionData";
import { Link } from "react-router-dom";
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
        <div className='w-full child:pt-2 child:xs:pt-3'>
          {AccordionData.map((item) => {
            return (
              <Accordion key={item.id} title={item.title} text={item.text} />
            );
          })}
        </div>
      </section>
      {/* body form */}
      <form className=' flex justify-center items-center bg-black py-8 md:py-12 lg:py-20 myborder'>
        <div className='flex flex-col items-start justify-center w-11/12 md:w-1/2  gap-y-2 md:gap-y-4 text-white'>
          {/* input text */}
          <h3 className='text-base md:text-lg'>
            Ready to watch? Enter your email to create or restart your
            membership
          </h3>
          <input
            placeholder='Email address'
            className='w-full input p-3 md:p-5'
            type='text'
          />
          {/* this link lead us to sign_up page */}
          <Link
            to={"/sign_up"}
            className='block bg-red-700 px-4 py-2 rounded-md active-btn sm:text-lg font-extralight'>
            Get Started
          </Link>
        </div>
      </form>
    </>
  );
};

export default Body;
