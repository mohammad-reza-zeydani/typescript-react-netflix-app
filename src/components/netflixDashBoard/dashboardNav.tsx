import netflixLogo from "../../assets/images/netLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMyContext } from "../context/context";
const DashboardNavigation = () => {
  // this state is using in mobile design to open and close the nav menu
  const [open, setOpen] = useState<boolean>(false);
  // set the searched words form search input
  const { setSearch } = useMyContext();
  return (
    <nav>
      {/* navigation mobile design section */}
      <section className='md:hidden px-3'>
        <div className='flex items-center justify-between text-white'>
          {/*if open is false show menu*/}
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
            // if open is true show close menu svg
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
          {/*mobile navigation form */}
          <form className='w-3/4 text-white'>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none'>
                {/* search svg */}
                <svg
                  className='w-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'>
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              {/* search input set searched value from user to our context as search result */}
              <input
                type='search'
                onChange={(e) => setSearch(e.target.value)}
                className='w-full bg-black border-2 rounded-sm p-3 ps-8 text-base outline-none focus:outline-slate-700'
                placeholder='Search for movies'
              />
            </div>
          </form>
        </div>
        {/* list of the movies genre links */}
        {open && (
          <ul className='flex flex-col  divide-y divide-slate-900  text-white child:active-link child:font-mono child:active-btn  mt-5 text-center text-lg child:py-3'>
            <Link className='text-red-700' to={"/"}>
              Home
            </Link>
            <Link to={"/animation"}>Animation</Link>
            <Link to={"/action"}>Action</Link>
            <Link to={"/adventure"}>Adventure</Link>
            <Link to={"/horror"}>Horror</Link>
          </ul>
        )}
      </section>

      {/* navigation desktop design section */}
      <section className='hidden md:flex items-center justify-between px-3'>
        {/* navigation left contents*/}
        <div className='flex items-center md:gap-x-4 gap-x-8'>
          {/* netflix logo */}
          <img className='w-32 lg:w-40' src={netflixLogo} alt='netflix logo' />
          {/* list of the movies genre links*/}
          <ul className='flex items-center gap-x-4 text-white child:py-0 child:text-lg child:lg:text-2xl child:active-link  child:font-mono'>
            <Link className='text-red-700' to={"/"}>
              Home
            </Link>
            <Link to={"/animation"}>Animation</Link>
            <Link to={"/action"}>Action</Link>
            <Link to={"/adventure"}>Adventure</Link>
            <Link to={"/horror"}>Horror</Link>
          </ul>
        </div>
        {/* navigation right contents*/}
        <form className='md:w-1/4 lg:w-1/3 text-white'>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-2 lg:ps-4 pointer-events-none'>
              {/* search svg */}
              <svg
                className='w-5 lg:w-6'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            {/* search input set searched value from user to our context as search result */}
            <input
              type='search'
              onChange={(e) => setSearch(e.target.value)}
              className='w-full bg-black border-2 rounded-sm p-4 ps-8 lg:ps-12 text-base lg:text-lg outline-none focus:outline-slate-700'
              placeholder='Search for movies'
            />
          </div>
        </form>
      </section>
    </nav>
  );
};

export default DashboardNavigation;
