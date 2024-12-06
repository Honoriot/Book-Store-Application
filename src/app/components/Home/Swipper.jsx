import BookCard from "./BookCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BookSwipper({books}){
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {books.length && books.map((book, index)=>{
            return(
                <SwiperSlide key={index}>
                    <BookCard book={book} />
                </SwiperSlide>
            ); 
        })}
      </Swiper>
    );
}