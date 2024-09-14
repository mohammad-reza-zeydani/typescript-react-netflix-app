import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "../../assets/style.css";
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const NetFlixDashBoard = () => {
   
    return ( 
        <div className=' my-28 space-y-20'>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className=' rounded-md bg-red-200 hover:border-8 border-green-600 active:border-red-500 h-96  transition-all'>
            <button className='w-full h-full'>slide 1</button>
          </SwiperSlide>
          <SwiperSlide className=' rounded-md bg-red-200 h-96'>Slide 1</SwiperSlide>
          <SwiperSlide className=' rounded-md bg-red-200 h-96'>Slide 1</SwiperSlide>
          <SwiperSlide className=' rounded-md bg-red-200 h-96'>Slide 1</SwiperSlide>
          <SwiperSlide className=' rounded-md bg-red-200 h-96'>Slide 1</SwiperSlide>
          <SwiperSlide className=' rounded-md bg-red-200 h-96'>Slide 1</SwiperSlide>
          <SwiperSlide className=' rounded-md bg-red-200 h-96'>Slide 1</SwiperSlide>
          <SwiperSlide className=' rounded-md bg-red-200 h-96'>Slide 1</SwiperSlide>
        </Swiper>
        </div>
     );
}
 
export default NetFlixDashBoard;