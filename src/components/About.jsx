// src/components/About.jsx
import React from 'react';
import helloImage from '../assets/image/hello-there.webp'; // Adjust the path as necessary

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="blurwrapper top-30">
                <div className="blurblock">
                    <div className="blurpeaple"></div>
                    <div className="blurblue"></div>
                </div>
            </div>
            <div className="content">
                <div className="steps__columns">
                    <div
                        className="steps__col"
                        data-aos="fade-right"
                        data-aos-delay="100"
                    >
                        <div className="steps__illustr-wrap">
                            <img
                                src={helloImage}
                                loading="eager"
                                alt=""
                                className="steps__illustr"
                            />
                        </div>
                    </div>
                    <div
                        className="steps__col mod--2"
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        <h2>About Virtual Octopus</h2>
                        <p className="steps__list-p">
                            While Virtual Octopus was founded in 2024, the founders of
                            the company began working together in 2015. One was the
                            owner of a service-based business in the USA, while the
                            other owned a web development agency in India.
                        </p>
                        <p className="steps__list-p">
                            As both of them had deep knowledge in their respective
                            fields, they decided to bridge the gap between the oceans.
                            With years of research and data availability, Virtual
                            Octopus was created with the integration of AI through
                            proven marketing techniques to grow businesses.
                        </p>
                        <p className="steps__list-p">
                            The AI is shaped and created with years of insight into
                            growing a service business while also growing a web
                            development business.
                        </p>
                        <p className="steps__list-p">
                            At Virtual Octopus, we understand the challenges of growing
                            small, local businesses and are experts at creating online
                            solutions to solve the problems you face.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;