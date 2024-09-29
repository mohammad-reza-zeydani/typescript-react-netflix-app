import { Link } from "react-router-dom";
const BackButton = () => {
    return ( 
        <Link to={"/netflixDashboard"} className="inline-flex rounded-md bg-red-700 text-white my-10 ml-4  gap-x-2 px-3 xs:px-4 py-1 shadow-2xl border-b-4 border-red-900 active:border-0 active:scale-90 active:text-white">
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className=' size-5 xs:size-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3'
          />
        </svg>
        <button className="md:text-lg">Back</button>
      </Link>
     );
}
 
export default BackButton;