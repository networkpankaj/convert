// src/components/Review.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import reviewImage from '../assets/image/Icon_bg.webp'; // Adjust the path as necessary

// Review data
const reviewsData = [
    {
        name: "Emma Rogers",
        review: "Virtual Octopus has been a game changer for our business. We were struggling to take multiple calls at peak hours, but their AI simply helped our business and simplified everything.",
    },
    {
        name: "Rajesh Khanna",
        review: "I love how the virtual octopus manages customer queries 24/7. We’ve seen a clear and positive increment in client satisfaction since using it.",
    },
    {
        name: "Priya Menon",
        review: "Virtual octopus has offered the best marketing automation features for my business. The AI has been able to bring and maintain one of the best engagement streaks our business has ever seen.",
    }
    
];

const Review = () => {
    return (
        <div className="section-slide mod--1">
            <section id="reviews" className="section mod--reviews">
                <div className="content">
                    <h2 className="heading--center" data-aos="fade-up" data-aos-delay="100">
                        Client reviews
                    </h2>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3} // Show 3 cards at a time
                    >
                        {reviewsData.map((review, index) => (
                            <SwiperSlide key={index} className="swiper-slide mod--reviews">
                                <div className="reviews__block">
                                    <div className="reviews__ava-wrap">
                                        <img
                                            src={reviewImage}
                                            loading="eager"
                                            width="125"
                                            alt={review.name}
                                            className="reviews__ava"
                                        />
                                    </div>
                                    <h3 className="reviews__title">{review.name}</h3>
                                    <p className="reviews__p">{review.review}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default Review;