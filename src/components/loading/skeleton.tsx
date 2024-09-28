import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../../src/style.css"
// i used this loading for my movies cart that did not loaded yet
const SkeletonLoading = () => {
    return (
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
        className='mySwiper'
      >
        {
        Array(7)
    .fill({})
    .map(() => {
      return (
        <SwiperSlide className=" h-80 xs:h-96 p-1 md:p-2 rounded-md">
          <div className='flex items-center justify-center animate-pulse'>
            <svg
              className='w-14 h-14 lg:w-20 lg:h-20 text-gray-400 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 18'>
              <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
            </svg>
          </div>
        </SwiperSlide>
      );
    })
    }
      </Swiper>
    )
};

export default SkeletonLoading;
