import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import SkeletonLoading from "../../loading/skeleton";
import { TGetMoviesDataProps , TMovies } from "../../../types/types";
const TrendMovies = ({ data, error, isError, isLoading }:TGetMoviesDataProps) => {
  return (
    <div>
        {/* movie type title */}
    <h1 className="title">Trends</h1>
      {isError ? (
        // the error message if error is true
        <h1 className='error text-center'>{error?.message}</h1>
      ) : isLoading ? (
         // if loading is true appear skeleton loading
        <SkeletonLoading/>
      ) : (
         // main swiper element
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
   // filter data to map the movies with trend type
            .filter((item: TMovies) => item.type === "trend")
            .map((item: TMovies) => {
              return (
                 // swiper slide element
                <SwiperSlide
                  style={{borderColor: item.color }}
                  className='swiper-slide'>
                    {/*main div of the movie's cart*/}
                  <div className='flex flex-col w-full h-full items-start z-50 '>
                    {/* the movie image */}
                    <img
                      loading='lazy'
                      className='image'
                      src={item.image}
                      alt={item.name}
                    />
                    {/* the movie name */}
                   <h1 className="mt-2 text-zinc-500">{item.name}</h1>
                   {/* the movie genre */}
                   <h4 className='text-gray-700'>{item.genre}</h4>
                  </div>
                 {/* more info Link wich leads us to MoreInfo component */}
                  <Link
                    style={{ backgroundColor: item.btnColor }}
                    to={`/informaiton/${item.id}`}
                    className='py-0 rounded-lg hover:scale-110 transition-transform'>
                    {/* more info btn */}
                    <button className='moreInfo-btn'>
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

export default TrendMovies;
