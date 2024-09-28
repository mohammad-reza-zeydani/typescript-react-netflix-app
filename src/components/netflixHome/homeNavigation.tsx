import logo from "../../assets/images/logo.png";
import netflix from "../../assets/images/netflix-header.jpg";
import { THeader } from "../../types/types";
import { Link } from "react-router-dom";
const Navigation = () => {
//  this object is to select  language
  const language: THeader[] = [
    {
      id: 1,
      name: "English",
    },
    {
      id: 2,
      name: "Spanish",
    },
  ];
  const token = localStorage.getItem("token"); //>>get the token of the signIned user
  return (
    <nav className=' relative flex flex-col items-center text-white bg-gradient-to-r from-gray-900 via-gray900 to-gray-800 myborder'>
      {/* navigation h section */}
      <section className='absolute w-size flex justify-between items-center'>
        {/* navigation leaft content */}
        <div>
          {/* netflix logo */}
          <img className='w-20 xs:w-24 sm:w-36 lg:w-44' src={logo} alt='' />
        </div>
        {/* navigation right content */}
        <div className='flex items-center gap-x-1 xs:gap-x-2 z-20'>
          {/*select the language*/}
          <select className='text-sm sm:text-lg border border-white bg-transparent px-1 py-px sm:px-2 sm:py-1'>
            {language.map((lang) => {
              return (
                <option className=' text-zinc-400' key={lang.id}>
                  {lang.name}
                </option>
              );
            })}
          </select>
          {token ? (
            // show dashboard and signOut links if there is token
            <>
              <Link to={"/netflixDashboard"} className='header-links'>
                Dashboard
              </Link>
              <Link to={"/sign_out"} className='header-links'>
                Sign Out
              </Link>
            </>
          ) : (
            //show signIn link if there is no token
            <Link to={"/sign_in"} className='header-links'>
              Sign In
            </Link>
          )}
        </div>
      </section>
      {/* navigation body section*/}
      <section className=' absolute flex flex-col gap-y-2  items-center justify-center z-10 h-full '>
        <div className='flex flex-col items-center gap-y-1 sm:gap-y-2'>
          {/* navigation body title */}
          <h1 className='font-sans font-bold text-xl xs:text-3xl lg:text-6xl text-white'>
            Unlimited movies, TV <br></br>shows and more.
          </h1>
          {/* navigation body paragraphs */}
          <p className='paragraph'>Watch anywhere. Cancel anytime.</p>
          <p className='paragraph'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        {/* navigation search input and get stareted link (signUp) */}
        <div className='flex flex-col gap-y-2 sm:flex-row w-full items-center justify-center child:py-1 child:md:py-3 child:px-1 child:md:px-5'>
          <input
            className='w-5/6 sm:w-4/6 lg:w-5/6 outline-none text-black'
            type='email'
            placeholder='search email'
          />
          <Link to={"/sign_up"} className='bg-red-700 text-base active-btn '>
            Get Started
          </Link>
        </div>
      </section>
      {/* navigation background image */}
      <img
        className=' w-full h-96 md:h-auto mix-blend-overlay bg-cover bg-no-repeat bg-center'
        src={netflix}
        alt=''
      />
    </nav>
  );
};

export default Navigation;
