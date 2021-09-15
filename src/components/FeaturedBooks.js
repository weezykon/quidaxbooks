import React from 'react'
import SwiperCore, { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

//component for each book
import SlideItem from './SlideItem';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

function FeaturedBooks({ books = [] }) {
    const featuredBooks = books.filter((book) => book.featured);
    const slides = featuredBooks.map((book) => {
        return (
            <SwiperSlide key={book.id}>
                <SlideItem book={book} />
            </SwiperSlide>
        );
    });

    return (
        <Swiper
            navigation
            pagination={{ clickable: true }}
            spaceBetween={0}
            loop={true}
            slidesPerView={2.4}
            breakpoints={{
                568: {
                    slidesPerView: 2.6,
                },
                928: {
                    slidesPerView: 4.1,
                },
                1158: {
                    slidesPerView: 5,
                },
                1440: {
                    slidesPerView: 6.2,
                },
            }}
        >
            {slides}
        </Swiper>
    );
}

export default FeaturedBooks
