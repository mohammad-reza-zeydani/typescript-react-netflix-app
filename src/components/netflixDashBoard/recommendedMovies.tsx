import useGetMovies from "../../hooks/useGetMovies";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import SkeletonLoading from "../loading/skeleton";
const RecommendedMovies = () => {
      // destructure useGetMovies hook
  const { data, error, isError, isLoading } = useGetMovies();
  return (
    <div>
        {/* movie type title */}
    <h1 className="text-2xl sm:text-3xl mb-10 pl-3 sm:pl-5">Recommended</h1>
      {isError ? (
        // the error message
        <h1 className='error text-center'>{error?.message}</h1>
      ) : isLoading ? (
        // loading component
        <SkeletonLoading/>
      ) : (
        // main swiper
        <Swiper
          slidesPerView={2.1}
          spaceBetween={10}
          breakpoints={{
            380: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3.5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className='mySwiper'>
          {data
        //   the movies with recommended type
            .filter((item: any) => item.type === "recommended")
            .map((item: any) => {
              return (
                <SwiperSlide
                  style={{ backgroundColor: item.color }}
                  className='flex flex-col  gap-y-2 h-80 xs:h-96 p-1 md:p-2 rounded-md'>
                    {/* cart main div */}
                  <div className='flex flex-col w-full h-full items-start z-50 '>
                    {/* the movie image */}
                    <img
                      loading='lazy'
                      className='image'
                      src={item.image}
                      alt=''
                    />
                    {/* the movie name */}
                   <h1 className="mt-2 text-zinc-900">{item.name}</h1>
                   {/* the movie genre */}
                   <h4 className='text-gray-700'>{item.genre}</h4>
                  </div>
                  {/* more info Link */}
                  <Link
                    style={{ backgroundColor: item.btnColor }}
                    to={"/"}
                    className='py-0 rounded-lg hover:scale-110 transition-transform'>
                    {/* more info btn */}
                    <button className='py-1 px-4 sm:px-5 text-zinc-900 active:text-white'>
                      More Info
                    </button>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
    </div>
  );
};

export default RecommendedMovies;
