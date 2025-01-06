import React from 'react';
import img1 from '../assets/image/octopus.webp';
import iconImage from '../assets/image/Icon_bg.webp';

// Reusable Statistic Component
const Statistic = ({ number, description, delay }) => (
    <div className="swiper-slide mod--numb" data-aos="fade-up" data-aos-delay={delay}>
        <div className="hero__numb-block">
            <div className="hero__counts-img-wrap">
                <img
                    src={iconImage}
                    loading="eager"
                    alt="Icon Background"
                    className="hero__counts-img"
                />
                <div className="hero__counts-numb">{number}</div>
            </div>
            <div className="wrap-hide">
                <p className="hero__counts-p">{description}</p>
            </div>
        </div>
        <div className="hero__counts-dash"></div>
    </div>
);

// Hero Section Component
const HeroSection = () => {
    const stats = [
        {
            number: '50+',
            description: 'Business Niches Covered. The AI can be trained for businesses like Restaurants, dog trainers, Spas, electricians, and more.',
            delay: 100
        },
        {
            number: '100+',
            description: 'Pre-trained Datasets. We have more than 100 pre-trained datasets for easy integration and intelligent automation of businesses.',
            delay: 200
        },
        {
            number: '90%',
            description: 'Reduction in Response Time. Virtual Octopus can respond to customer queries faster, reducing response times by up to 90%.',
            delay: 300
        }
    ];

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
                        <a href="#" className="btn mod--hero w-inline-block" data-aos="fade-down" data-aos-delay="400">
                            <div className="btn__bg-wrap">
                                <div className="btn__bg"></div>
                            </div>
                            <div className="btn__txt">Schedule a Free Demo</div>
                        </a>
                    </div>
                </div>
                <div className="hero_illustr-wrap">
                    <img src={img1} loading="eager" alt="Octopus Illustration" className="hero_illustr" />
                </div>

                <div className="hero__counts">
                    <div className="swiper-wrapper">
                        {stats.map((stat, index) => (
                            <Statistic 
                                key={index} 
                                number={stat.number} 
                                description={stat.description} 
                                delay={stat.delay}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;