// src/components/HeroSection.jsx
import React from 'react';
import img1 from '../assets/image/octopus.webp'
import img2 from '../assets/image/Icon_bg.webp'
import img3 from '../assets/image/Icon_bg.webp'
import img4 from '../assets/image/Icon_bg.webp'
function HeroSection() {
    return (
        <section id="hero" className="section mod--hero">
            <div className="content mod--hero" id="playground">
                <div className="home__content">
                    <div className="wrap-hide" data-aos="fade-down" data-aos-delay="100">
                        <h1 className="hero__heading mod--1">
                            Hire a Virtual Octopus<br />
                        </h1>
                    </div>
                    <div className="wrap-hide" data-aos="fade-down" data-aos-delay="200">
                        <h2 className="hero__heading">as your New Employee</h2>
                    </div>
                    <div className="wrap-hide" data-aos="fade-down" data-aos-delay="300">
                        <p className="subheading mod--hero">
                            Grow your revenue while saving hours of time, all at a fraction of your total operating cost.
                        </p>
                    </div>
                    <div className="hero__btn-wrap">
                        <a
                            href="#"
                            className="btn mod--hero w-inline-block"
                            data-aos="fade-down"
                            data-aos-delay="400"
                        >
                            <div className="btn__bg-wrap">
                                <div className="btn__bg"></div>
                            </div>
                            <div className="btn__txt">Schedule a Free Demo</div>
                        </a>
                    </div>
                </div>
                <div className="hero_illustr-wrap">
                    <img
                        src={img1}
                        loading="eager"
                        alt="Octopus Illustration"
                        className="hero_illustr"
                    />
                </div>

                <div className="hero__counts">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide mod--numb" data-aos="fade-up" data-aos-delay="100">
                            <div className="hero__numb-block">
                                <div className="hero__counts-img-wrap">
                                    <img
                                        src={img2}
                                        loading="eager"
                                        alt="Icon Background"
                                        className="hero__counts-img"
                                    />
                                    <div className="hero__counts-numb">50+</div>
                                </div>
                                <div className="wrap-hide">
                                    <p className="hero__counts-p">
                                        Business Niches Covered The AI can be trained for businesses like Restaurants, dog trainers, Spas, electricians, and more.
                                    </p>
                                </div>
                            </div>
                            <div className="hero__counts-dash"></div>
                        </div>
                        <div className="swiper-slide mod--numb" data-aos="fade-up" data-aos-delay="200">
                            <div className="hero__numb-block">
                                <div className="hero__counts-img-wrap">
                                    <img
                                        src={img3}
                                        loading="eager"
                                        alt="Icon Background"
                                        className="hero__counts-img"
                                    />
                                    <div className="hero__counts-numb">100+</div>
                                </div>
                                <div className="wrap-hide">
                                    <p className="hero__counts-p">
                                        Pre-trained Datasets We have more than 100 pre-trained datasets for easy integration and intelligent automation of businesses.
                                    </p>
                                </div>
                            </div>
                            <div className="hero__counts-dash"></div>
                        </div>
                        <div className="swiper-slide mod--numb" data-aos="fade-up" data-aos-delay="300">
                            <div className="hero__numb-block">
                                <div className="hero__counts-img-wrap">
                                    <img
                                        src={img4}
                                        loading="eager"
                                        alt="Icon Background"
                                        className="hero__counts-img"
                                    />
                                    <div className="hero__counts-numb">90%</div>
                                </div>
                                <div className="wrap-hide">
                                    <p className="hero__counts-p">
                                        Reduction in Response Time Virtual Octopus can respond to customer queries faster, reducing response times by up to 90%.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;