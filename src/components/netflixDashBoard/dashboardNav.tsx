import netflixLogo from "../../assets/images/netLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const DashboardNavigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav>
      {/* navigation mobile design section */}
      <section className='md:hidden px-3'>
        <div className='flex items-center justify-between text-white'>
          {/* menu svg (open list)*/}
          {!open ? (
            <svg
              onClick={() => setOpen(!open)}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-10'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          ) : (
            // close svg (close list)
            <svg
              onClick={() => setOpen(!open)}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-10'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          )}
          {/* navigation search box */}
          <div className='flex gap-x-1 w-3/4  border text-white py-1  pl-2  rounded-sm bg-black'>
            {/* search svg */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6 lg:size-8'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
              />
            </svg>
            {/* search input */}
            <input
              className='outline-none text-base lg:text-xl bg-black w-full'
              type='search'
              placeholder='search for movies'
            />
          </div>
        </div>
        {/* list of movie genre links */}
        {open && (
          <ul className='flex flex-col text-white child:active-btn  mt-5 text-center child:pb-3 divide-y divide-slate-900'>
            <Link className='text-red-700' to={"/"}>
              Home
            </Link>
            <Link to={"/"}>Animation</Link>
            <Link to={"/"}>Action</Link>
            <Link to={"/"}>Adventure</Link>
            <Link to={"/"}>Horror</Link>
          </ul>
        )}
      </section>

      {/* navigation desktop design section */}
      <section className='hidden md:flex items-center justify-between px-3'>
        {/* navigation left content div */}
        <div className='flex items-center md:gap-x-4 gap-x-8'>
          {/* netflix logo */}
          <img className='w-32 lg:w-40' src={netflixLogo} alt='' />
          {/* list of movie genre links*/}
          <ul className='flex items-center gap-x-4 text-white child:py-0 child:lg:text-2xl'>
            <Link className='text-red-700' to={"/"}>
              Home
            </Link>
            <Link to={"/"}>Animation</Link>
            <Link to={"/"}>Action</Link>
            <Link to={"/"}>Adventure</Link>
            <Link to={"/"}>Horror</Link>
          </ul>
        </div>
        {/* navigation right content div*/}
        <div className='flex gap-x-2 md:w-1/4 lg:w-1/3 border-2 text-white py-2 lg:py-4 pl-3  rounded-sm bg-black'>
          {/* search svg */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6 lg:size-8'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
          {/* search input */}
          <input
            className='outline-none text-base lg:text-xl bg-black w-full'
            type='search'
            placeholder='search for movies'
          />
        </div>
      </section>
    </nav>
  );
};

export default DashboardNavigation;
