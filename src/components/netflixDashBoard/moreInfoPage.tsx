import useGetMovieById from "../../hooks/useGetHooks/useGetMovieById";
import { useParams, Link } from "react-router-dom";
import BackButton from "./backBtn";
import SpinLoading from "../loading/spinLoading";
import { CastObject, TMovies } from "../../types/types";
import { useEffect } from "react";
import { useMyContext } from "../context/context";
import AOS from "aos";
import "aos/dist/aos.css";
const MoreInfo = () => {
  // get the movie id from url
  const { id } = useParams();
  // destructure useGetMovieById
  const { data, isLoading, error, isError } = useGetMovieById(id); // >> we pass the movie's id from url to our useGetMovieById hook to get the movie we want to have more info about
  // our state from context to mark the movie we want to mark
  const { setMark, mark } = useMyContext();
  // we use this package to have nice scroll animations
  useEffect(() => {
    AOS.init();
  }, []);
  // at this function check if the movie is marked before ,dont mark it again but if it hasen't been marked before,mark it
  const handleMarkMovie = () => {
    const find = mark.find((item: TMovies) => item.id === data.id); // >> find the movie's id in mark state that matches the movie's id in the data
    if (find) {
      alert("this move is already marked");
    } else {
      setMark([data, ...mark]); // >> set new and previous movies that are marked before
      alert("the movie is marked");
    }
  };
  return (
    <div>
      {/* MoreInfo page navigation */}
      <nav className='flex items-center justify-between pr-4'>
        {/* back to previous page btn */}
        <BackButton />
        {/* mark movie link */}
        <Link className=' flex items-center' to={"/markedMoviesPage"}>
          {/* mark svg */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-14 text-red-700 active:text-blue-500'>
            <path
              fillRule='evenodd'
              d='M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z'
              clipRule='evenodd'
            />
          </svg>
          {/* the total number of the marked movies  */}
          <span className='text-white '>{mark.length}</span>
        </Link>
      </nav>
      {/* error message */}
      {isError ? (
        <h1 className='error text-center py-28'>{error?.message}</h1>
      ) : //  Loading status
      isLoading ? (
        <SpinLoading />
      ) : (
        // mroreInfo page main body section
        <section className='mb-20 sm:px-2 lg:px-5'>
          {/* // mroreInfo page main div */}
          <div className='flex items-center justify-center gap-x-4 sm:gap-x-8 text-white child:w-1/2'>
            {/* the movie image */}
            <img
              className='border-2 sm:border-4 h-64 sm:h-96 image-animate'
              style={{ borderColor: data.color }}
              src={data.image}
              alt=''
              data-aos='fade-right'
            />
            {/* the movie informations (title&name&text) */}
            <div
              className='flex flex-col items-start gap-y-2'
              data-aos='fade-left'>
              <h1 className='text-lg sm:text-3xl text-red-700'>{data.name}</h1>
              <h3 className='text-sm md:text-base lg:text-lg max-h-48 sm:max-h-96 overflow-auto'>
                {data.text}
              </h3>
              {/* mark the movie btn (this btn will mark the movie by onClick event and calling handleMarkMovie function)*/}
              <button
                onClick={handleMarkMovie}
                className='bg-red-700 p-1 rounded-md size-10 sm:size-12 text-black'>
                {/* if the movie hasn't been marked yet,show first svg,otherwise show second svg */}
                {!mark.find((item: TMovies) => item.id === data.id) ? (
                  // first svg
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
                    />
                  </svg>
                ) : (
                  // second svg
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* casts info */}
          <div
            className='flex items-center flex-wrap justify-around gap-y-2'
            data-aos='fade-up'>
            {data.cast.map((item: CastObject) => {
              return (
                <div className='flex flex-col  items-center justify-center gap-y-2 mt-12 text-white'>
                  {/* cast avatar */}
                  <img
                    className=' w-32 sm:w-44 h-32 bg-gray-300 rounded-full image-animate'
                    src={item.avatar}
                    alt=''
                  />
                  {/* cast name */}
                  <h2>{item.name}</h2>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default MoreInfo;
