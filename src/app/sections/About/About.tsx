import React from 'react';
import Image from 'next/image';
import aboutImage from '../../../../public/assets/about.jpg';
import './About.css';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div
                        className="col-lg-6 order-1 order-lg-2"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <div className="about-img">
                            <Image src={aboutImage} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>
                            ABOUT RESTAURANT
                        </h3>
                        <p className="fst-italic">
                            In a world that is increasingly coming closer, we seek to promote the harmony of Indian culture, cuisine and architecture. Best recipes and awesome spices are blended together in perfect ratio to give healthy meals to each and every one who come to us with the taste that lasts forever.
                        </p>
                        <ul>
                            <li>
                                <i className="bi bi-check-circle"></i> Serving high quality multi-cuisines. 
                            </li>
                            <li>
                                <i className="bi bi-check-circle"></i> Personalised friendly service.
                            </li>
                            <li>
                                <i className="bi bi-check-circle"></i> Exclusive Catering facilities.
                            </li>
                        </ul>
                        <p>
                            New Taste Of India is designed for relaxation and great times. We provide an extensive menu of delicious Indian food and a modern environment suitable for family dinners, romantic dates, power lunches and meetups with friends. From curries bursting with flavor to exotic dishes straight from the heart of India, we welcome you into your family-operated kitchen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
