// src/components/Features.jsx
import React from 'react';
import octopusImage from '../assets/image/octopus.webp';
import automatedCallImage from '../assets/image/Marketing Automation.webp';
import industryCustomizationImage from '../assets/image/Marketing Automation.webp';
import multiChannelImage from '../assets/image/Marketing Automation.webp';
import costSavingImage from '../assets/image/Marketing Automation.webp';

const Features = () => {
    return (
        <div className="section-slide mod--2">
            <section id="courses" className="section mod--courses">
                <div className="content">
                    <div className="courses__heading-wrap">
                        <div className="wrap-hide" data-aos="fade-up" data-aos-delay="100">
                            <h2 className="heading--margin-0">
                                Features of <br />Virtual Octopus
                            </h2>
                        </div>
                        <div className="wrap-hide" data-aos="fade-up" data-aos-delay="100">
                            <p className="subheading mod--courses">
                                Our courses are complete professional courses of high quality that include a set of video lessons, practical and training materials.
                            </p>
                        </div>
                    </div>
                    <div id="track">
                        {/* SVG for the motion path */}
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 1000 1000"
                            style={{ position: 'absolute', top: 0, left: 0 }}
                        >
                            {/* The traced path */}
                            <path
                                id="motionPath"
                                d="M 200 -100 L 800 340 L 200 800L 750 1200"
                                stroke="transparent"
                                fill="none"
                                strokeWidth="2"
                            ></path>
                        </svg>
                        {/* Octopus element */}
                        <img
                            id="octopus"
                            src={octopusImage}
                            alt="Octopus"
                            style={{ width: '550px', position: 'absolute' }}
                            loading="eager"
                        />

                        {/* Section 1 */}
                        {/* <section className="section-1">
                            <div className="courses__columns">
                                <div className="courses__col"></div>
                                <div className="courses__col mod--3">
                                    <div className="courses__block">
                                        <div className="courses__txt-wrap">
                                            <div className="courses__type" data-aos="fade-up" data-aos-delay="100">
                                                Automated Call Handling
                                            </div>
                                            <h3 className="courses__title" data-aos="fade-up" data-aos-delay="200">
                                                Our tool can handle all the inbound calls for your business and serve as a virtual assistant for it. Virtual Octopus can give you the power and freedom to pick up and manage your late-night or rush-hour calls with the best responses for customer queries and problems.
                                            </h3>
                                        </div>
                                        <div className="courses__illustr-wrap">
                                            <img
                                                width="200"
                                                src={automatedCallImage}
                                                loading="eager"
                                                alt="Automated Call Handling"
                                                className="courses__illustr"
                                            />
                                        </div>
                                        <div className="courses__block-bg"></div>
                                    </div>
                                </div>
                            </div>
                        </section> */}

                        {/* Section 2 */}
                        {/* <section className="section-2">
                            <div className="courses__columns">
                                <div className="courses__col">
                                    <div className="courses__block">
                                        <div className="courses__txt-wrap">
                                            <div className="courses__type" data-aos="fade-up" data-aos-delay="100">
                                                Industry-specific customization
                                            </div>
                                            <h3 className="courses__title" data-aos="fade-up" data-aos-delay="200">
                                                Virtual Octopus can be customized specially for your business, the AI can automate calls and solutions based on the specific needs of your industries. For example, the Virtual Octopus can be trained to take orders from customers for restaurants that struggle with overwhelming orders.
                                            </h3>
                                        </div>
                                        <div className="courses__illustr-wrap">
                                            <img
                                                width="200"
                                                src={industryCustomizationImage}
                                                loading="eager"
                                                alt="Industry-specific customization"
                                                className="courses__illustr"
                                            />
                                        </div>
                                        <div className="courses__block-bg"></div>
                                    </div>
                                </div>
                                <div className="courses__col mod--3"></div>
                            </div>
                        </section> */}

                        {/* Section 3 */}
                        {/* <section className="section-3">
                            <div className="courses__columns">
                                <div className="courses__col"></div>
                                <div className="courses__col mod--3">
                                    <div className="courses__block">
                                        <div className="courses__txt-wrap">
                                            <div className="courses__type" data-aos="fade-up" data-aos-delay="100">
                                                Multi-Channel Integration
                                            </div>
                                            <h3 className="courses__title" data-aos="fade-up" data-aos-delay="200">
                                                Our AI automation tool can be integrated with your mobile and PC for better management and control. This feature will allow you to take better control of all the proceedings in the business.
                                            </h3>
                                        </div>
                                        <div className="courses__illustr-wrap">
                                            <img
                                                width="200"
                                                src={multiChannelImage}
                                                loading="eager"
                                                alt="Multi-Channel Integration"
                                                className="courses__illustr"
                                            />
                                        </div>
                                        <div className="courses__block-bg"></div>
                                    </div>
                                </div>
                            </div>
                        </section> */}

                        {/* Section 4 */}
                        {/* <section className="section-2">
                            <div className="courses__columns">
                                <div className="courses__col">
                                    <div className="courses__block">
                                        <div className="courses__txt-wrap">
                                            <div className="courses__type" data-aos="fade-up" data-aos-delay="100">
                                                Cost-Saving Solution for Your Business
                                            </div>
                                            <h3 className="courses__title" data-aos="fade-up" data-aos-delay="200">
                                                You can save a tremendous amount of costs and time in your business by using Virtual Octopus. The tool never gets sick, never asks for appraisals, never takes long breaks, and never stops working, hence it can save you a lot of time in your business.
                                            </h3>
                                        </div>
                                        <div className="courses__illustr-wrap">
                                            <img
                                                width="200"
                                                src={costSavingImage}
                                                loading="eager"
                                                alt="Cost-Saving Solution for Your Business"
                                                className="courses__illustr"
                                            />
                                        </div>
                                        <div className="courses__block-bg"></div>
                                    </div>
                                </div>
                                <div className="courses__col mod--3"></div>
                            </div>
                        </section> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;