# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


// src/components/Content.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';

function Content() {
    const stickyWrapRef = useRef(null);
    const stickyElementRef = useRef(null);
    const playgroundRef = useRef(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0, moved: false });
    const [rect, setRect] = useState({});

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

        // Cache DOM Elements
        const stickyWrap = stickyWrapRef.current;
        const stickyElement = stickyElementRef.current;
        const playground = playgroundRef.current;

        // Optimize Sticky Circle Grow
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: stickyWrap,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });

        tl.fromTo(
            stickyElement,
            { width: "35em", height: "35em", borderRadius: "35em" },
            { width: "100vw", height: "100vh", borderRadius: "3em" }
        );

        // GSAP Scroll Animation
        gsap.to("#octopus", {
            duration: 10,
            motionPath: {
                path: "#motionPath",
                align: "#motionPath",
                autoRotate: false,
                alignOrigin: [0.5, 0.5],
            },
            scrollTrigger: {
                trigger: "#motionPath",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            ease: "power1.inOut",
        });

        // Parallax Effect
        const handleMouseMove = (e) => {
            setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, moved: true });
        };

        playground.addEventListener('mousemove', handleMouseMove);

        const ticker = gsap.ticker.add(() => {
            if (mouse.moved) {
                parallaxIt(".hero_illustr-wrap", -50);
                setMouse((prev) => ({ ...prev, moved: false }));
            }
        });

        function parallaxIt(target, movement) {
            gsap.to(target, {
                duration: 0.5,
                x: ((mouse.x - rect.width / 2) / rect.width) * movement,
                y: ((mouse.y - rect.height / 2) / rect.height) * movement,
            });
        }

        const handleResizeScroll = () => {
            setRect(playground.getBoundingClientRect());
        };

        window.addEventListener("resize", handleResizeScroll);
        window.addEventListener("scroll", handleResizeScroll);

        // Cleanup
        return () => {
            playground.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener("resize", handleResizeScroll);
            window.removeEventListener("scroll", handleResizeScroll);
            gsap.ticker.remove(ticker);
        };
    }, [mouse, rect]);

    return (
        <div className="section-slide">
            <div className="content">
                <h2
                    className="heading--center_octopus aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    What is Virtual Octopus?
                </h2>
                <p className="whatis" data-aos="fade-up" data-aos-delay="200">
                    Virtual Octopus is an AI-operated software that can replace most of your manual labor and can be trained specifically for your business. It can interact and operate with your customers the way that you’d want it to, it can adapt to your answering style as well.
                </p>
                <div className="gallery" ref={playgroundRef}>
                    <div className="left">
                        <div className="desktopContent">
                            <ul>
                                {/* Feature 1 */}
                                <div className="desktopContentSection">
                                    <li className="steps__list-item">
                                        <div data-aos="fade-up" data-aos-delay="100" className="steps__numb">
                                            <img
                                                src="./assets/image/Icon_bg.webp"
                                                loading="eager"
                                                alt=""
                                                className="steps__numb-img"
                                            />
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
                                            <img
                                                src="./assets/image/Icon_bg.webp"
                                                loading="eager"
                                                alt=""
                                                className="steps__numb-img"
                                            />
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

                                {/* Feature 3 */}
                                <div className="desktopContentSection">
                                    <li className="steps__list-item">
                                        <div data-aos="fade-up" data-aos-delay="100" className="steps__numb">
                                            <img
                                                src="./assets/image/Icon_bg.webp"
                                                loading="eager"
                                                alt=""
                                                className="steps__numb-img"
                                            />
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

                                {/* Feature 4 */}
                                <div className="desktopContentSection">
                                    <li className="steps__list-item">
                                        <div data-aos="fade-up" data-aos-delay="200" className="steps__numb">
                                            <img
                                                src="./assets/image/Icon_bg.webp"
                                                loading="eager"
                                                alt=""
                                                className="steps__numb-img"
                                            />
                                            <div className="steps__numb-txt">04</div>
                                        </div>
                                        <h3 data-aos="fade-up" data-aos-delay="300" className="steps__list-title">Scheduling</h3>
                                        <p className="steps__list-p">
                                            The Virtual Octopus can schedule calls and appointments for your clients with a human representative via a call or text. This will make sure your operations go smoothly 24/7 without any interruptions.
                                        </p>
                                        <p data-aos="fade-up" data-aos-delay="400" className="steps__list-p">
                                            The AI-powered tool can automate any upcoming consulting, meetings, or follow-up calls. This makes sure your clients are attended to promptly without missing any appointments or business opportunities.
                                        </p>
                                    </li>
                                </div>

                                {/* Feature 5 */}
                                <div className="desktopContentSection">
                                    <li className="steps__list-item">
                                        <div data-aos="fade-up" data-aos-delay="100" className="steps__numb">
                                            <img
                                                src="./assets/image/Icon_bg.webp"
                                                loading="eager"
                                                alt=""
                                                className="steps__numb-img"
                                            />
                                            <div className="steps__numb-txt">05</div>
                                        </div>
                                        <h3 data-aos="fade-up" data-aos-delay="200" className="steps__list-title">Reputation Management</h3>
                                        <p data-aos="fade-up" data-aos-delay="300" className="steps__list-p">
                                            The AI software can manage your online reputation by keeping an eye on all the reviews and comments, be they negative or positive ones. Virtual Octopus can be trained to proactively suggest strategies to improve your brand perception online.
                                        </p>
                                        <p data-aos="fade-up" data-aos-delay="400" className="steps__list-p">
                                            Beyond just monitoring, Virtual Octopus can be trained to proactively suggest strategies to improve your brand image, from responding to customer reviews to identifying key areas for improvement. The AI can help in maintaining a positive online presence for your business.
                                        </p>
                                    </li>
                                </div>

                                {/* Feature 6 */}
                                <div className="desktopContentSection">
                                    <li className="steps__list-item">
                                        <div data-aos="fade-up" data-aos-delay="100" className="steps__numb">
                                            <img
                                                src="./assets/image/Icon_bg.webp"
                                                loading="eager"
                                                alt=""
                                                className="steps__numb-img"
                                            />
                                            <div className="steps__numb-txt">06</div>
                                        </div>
                                        <h3 data-aos="fade-up" data-aos-delay="200" className="steps__list-title">Marketing Automation</h3>
                                        <p data-aos="fade-up" data-aos-delay="300" className="steps__list-p">
                                            The Virtual Octopus AI can automate marketing through campaigns, email outreach, and customer follow-ups, ensuring smooth and consistent messaging and engagement across multiple channels with little effort.
                                        </p>
                                        <p data-aos="fade-up" data-aos-delay="400" className="steps__list-p">
                                            By studying data-driven insights and marketing strategies, AI can be incorporated into your contact lists to send emails and messages. It can also think and write text campaigns to promote a discount, newsletters, Black Friday specials, filling up unused space, and more.
                                        </p>
                                    </li>
                                </div>

                                {/* Feature 7 */}
                                <div className="desktopContentSection">
                                    <li className="steps__list-item">
                                        <div data-aos="fade-up" data-aos-delay="100" className="steps__numb">
                                            <img
                                                src="./assets/image/Icon_bg.webp"
                                                loading="eager"
                                                alt=""
                                                className="steps__numb-img"
                                            />
                                            <div className="steps__numb-txt">07</div>
                                        </div>
                                        <h3 data-aos="fade-up" data-aos-delay="200" className="steps__list-title">Widgets</h3>
                                        <p data-aos="fade-up" data-aos-delay="300" className="steps__list-p">
                                            Virtual Octopus can be used to create, customize, and manage widgets for your website or app to automate lead generation, calls, and customer support, making it an overall package for better lead management.
                                        </p>
                                        <p data-aos="fade-up" data-aos-delay="400" className="steps__list-p">
                                            Through the addition of our widget to your site, we can incorporate the Virtual Octopus to monitor communication 24/7 meanwhile generating a lot more sales conversations for your clients.
                                        </p>
                                    </li>
                                </div>

                                {/* Feature 8 */}
                                <div className="desktopContentSection">
                                    <li className="steps__list-item">
                                        <div data-aos="fade-up" data-aos-delay="100" className="steps__numb">
                                            <img
                                                src="./assets/image/Icon_bg.webp"
                                                loading="eager"
                                                alt=""
                                                className="steps__numb-img"
                                            />
                                            <div className="steps__numb-txt">08</div>
                                        </div>
                                        <h3 data-aos="fade-up" data-aos-delay="200" className="steps__list-title">Resource Handling</h3>
                                        <p data-aos="fade-up" data-aos-delay="300" className="steps__list-p">
                                            Virtual Octopus AI can be used for better resource handling while managing the different tasks of the business on automation. With the right task allocation, time, and inventory management, AI can offer one of the best kinds of resource handling for your business.
                                        </p>
                                        <p data-aos="fade-up" data-aos-delay="400" className="steps__list-p">
                                            In addition, the AI can be trained to grab payment from the customers before they even come in for their appointment or before you visit them to render any services at their doorstep.
                                        </p>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="right">
                        {/* Desktop content */}
                        <div className="desktopPhotos">
                            <div className="desktopPhoto">
                                <img
                                    src="./assets/image/social media.webp"
                                    alt="social media"
                                />
                            </div>
                            <div className="desktopPhoto">
                                <img
                                    src="./assets/image/phone-call.webp"
                                    alt="phone-call"
                                />
                            </div>
                            <div className="desktopPhoto">
                                <img
                                    src="./assets/image/Ordering.webp"
                                    alt="Ordering"
                                />
                            </div>
                            <div className="desktopPhoto">
                                <img src="./assets/image/shedhuleding.webp" alt="Scheduling" />
                            </div>
                            <div className="desktopPhoto">
                                <img src="./assets/image/Reputation Management.webp" alt="Reputation Management" />
                            </div>
                            <div className="desktopPhoto">
                                <img src="./assets/image/Marketing Automation.webp" alt="Marketing Automation" />
                            </div>
                            <div className="desktopPhoto">
                                <img src="./assets/image/Widgets.webp" alt="Widgets" />
                            </div>
                            <div className="desktopPhoto">
                                <img src="./assets/image/Resource Handling.webp" alt="Resource Handling" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;


   // src/components/HeroSection.jsx
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
