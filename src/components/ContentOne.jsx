// src/components/ContentOne.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import img1 from '../assets/image/Icon_bg.webp';
import img2 from '../assets/image/social media.webp';
import img3 from '../assets/image/phone-call.webp';
import img4 from '../assets/image/Ordering.webp';
import img5 from '../assets/image/shedhuleding.webp';
import img6 from '../assets/image/Reputation Management.webp';
import img7 from '../assets/image/Marketing Automation.webp';
import img8 from '../assets/image/Widgets.webp';
import img9 from '../assets/image/Resource Handling.webp';

const ContentOne = () => {
    const stickyWrapRef = useRef(null);
    const stickyElementRef = useRef(null);
    const galleryRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Sticky Circle Animation
        const stickyWrap = stickyWrapRef.current;
        const stickyElement = stickyElementRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: stickyWrap,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });

        tl.fromTo(
            stickyElement,
            { width: "35em", height: "35em", borderRadius: "50%" },
            { width: "100vw", height: "100vh", borderRadius: "0%" }
        );

        // Scroll Animation for Gallery
        const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
        const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

        gsap.set(photos, { yPercent: 101 });

        details.forEach((detail, index) => {
            const headline = detail.querySelector("li");
            const animation = gsap.timeline().to(photos[index], { yPercent: 0 });

            ScrollTrigger.create({
                trigger: headline,
                start: "top 80%",
                end: "top 50%",
                animation: animation,
                scrub: true,
            });
        });

        // Cleanup on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="section-slide">
            <div className="content">
                <h2 className="heading--center_octopus aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    What is Virtual Octopus?
                </h2>
                <p className="whatis" data-aos="fade-up" data-aos-delay="200">
                    Virtual Octopus is an AI-operated software that can replace most of your manual labor and can be trained specifically for your business. It can interact and operate with your customers the way that you’d want it to, it can adapt to your answering style as well.
                </p>
                <div className="gallery" ref={galleryRef}>
                    <div className="left">
                        <div className="desktopContent">
                            <ul>
                                {/* Feature 1 */}
                                <div className="desktopContentSection">
                                    <li className="steps__list-item">
                                        <div data-aos="fade-up" data-aos-delay="100" className="steps__numb">
                                            <img src={img1} loading="eager" alt="" className="steps__numb-img" />
                                            <div className="steps__numb-txt">01</div>
                                        </div>
                                        <h3 data-aos="fade-up" data-aos-delay="200" className="steps__list-title">Social Media</h3>
                                        <p data-aos="fade-up" data-aos-delay="200" className="steps__list-p">
                                            The Virtual Octopus is capable of automating and scheduling your social media handles in seconds. It can carry out content planning, post-scheduling, and performance tracking, all while saving you valuable time and effort.
                                        </p>
                                        <p className="steps__list-p" data-aos="fade-up" data-aos-delay="300">
                                            You can use our AI-powered tool to ease up the processes of your business and save a lot of time to focus on the important aspects of your business. The tool can adapt to the changes in the trends and can be customized based on your specific business needs.
                                        </p>
                                    </li>
                                </div>

                                {/* Feature 2 */}
                                <div className="desktopContentSection">
                                    <li className="steps__list-item">
                                        <div data-aos="fade-up" data-aos-delay="200" className="steps__numb">
                                            <img src={img1} loading="eager" alt="" className="steps__numb-img" />
                                            <div className="steps__numb-txt">02</div>
                                        </div>
                                        <h3 data-aos="fade-up" data-aos-delay="200" className="steps__list-title">Phone Calls</h3>
                                        <p className="steps__list-p" data-aos="fade-up" data-aos-delay="300">
                                            The AI-based software can be trained to pick up calls, and answer them perfectly, offer solutions to their queries, and offer quick solutions to the client’s problems.
                                        </p>
                                        <p data-aos="fade-up" data-aos-delay="400" className="steps__list-p">
                                            Inbound calls are one of the fastest mediums to connect with the audience and turn them into potential and paying customers. Virtual Octopus will take care of all the inbound phone calls of your business and can potentially eliminate the existence of a receptionist.
                                        </p>
                                    </li>
                                </div>

                                {/* Additional Features */}
                                {/* Repeat similar structure for other features */}
                                {/* Feature 3 */}
                                <div className="desktopContentSection">
                                    <li className="steps__list-item">
                                        <div data-aos="fade-up" data-aos-delay="100" className="steps__numb">
                                            <img src={img1} loading="eager" alt="" className="steps__numb-img" />
                                            <div className="steps__numb-txt">03</div>
                                        </div>
                                        <h3 data-aos="fade-up" data-aos-delay="200" className="steps__list-title">Ordering</h3>
                                        <p className="steps__list-p" data-aos="fade-up" data-aos-delay="300">
                                            The tool can be used to book multiple orders with the use of automation. This means that in your absence, the Virtual Octopus can plan and execute orders for your business as well.
                                        </p>
                                        <p className="steps__list-p" data-aos="fade-up" data-aos-delay="400">
                                            With its technically advanced and intelligent system, Virtual Octopus can handle bulk orders, track order statuses, and even prioritize urgent requests. All of this can be done while you pay a fraction of your total operations costs to the receptionist or the call representatives.
                                        </p>
                                    </li>
                                </div>

                                {/* Add more features as needed */}
                            </ul>
                        </div>
                    </div>

                    <div className="right">
                        {/* Desktop content */}
                        <div className="desktopPhotos">
                            <div className="desktopPhoto">
                                <img src={img2} alt="social media" />
                            </div>
                            <div className="desktopPhoto">
                                <img src={img3} alt="phone-call" />
                            </div>
                            <div className="desktopPhoto">
                                <img src={img4} alt="Ordering" />
                            </div>
                            <div className="desktopPhoto">
                                <img src={img5} alt="Scheduling" />
                            </div>
                            <div className="desktopPhoto">
                                <img src={img6} alt="Reputation Management" />
                            </div>
                            <div className="desktopPhoto">
                                <img src={img7} alt="Marketing Automation" />
                            </div>
                            <div className="desktopPhoto">
                                <img src={img8} alt="Widgets" />
                            </div>
                            <div className="desktopPhoto">
                                <img src={img9} alt="Resource Handling" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentOne;