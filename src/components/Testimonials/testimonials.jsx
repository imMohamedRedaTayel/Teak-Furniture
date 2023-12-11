import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';




const Testimonials = () => {
    return <>

        <section className="Testimonials">
            <div className="container">
                <div className="title">
                    <h3 data-aos="fade-right" data-aos-duration={500} >Testimonials</h3>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation

                    breakpoints={{
                        // نطاق شاشة الهواتف الذكية

                        400: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },

                        500: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },

                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        // نطاق شاشة الأجهزة اللوحية
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // نطاق شاشة الحواسب المكتبية
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}

                >
                    <SwiperSlide>
                        <div className="Testimonials_info" data-aos="fade-up" data-aos-duration={700} >
                            <div className="Card">
                                <h6>Mohamed Reda</h6>
                                <span>ordered a living room furniture a while ago</span>
                                <div className="icon">
                                    <p>it came in a very good condition, the quality of the fabrics they chose ,the wood and the precision in the details was mesmerizing.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Testimonials_info" data-aos="fade-up" data-aos-duration={800} >
                            <div className="Card">
                                <h6>Mohamed Reda</h6>
                                <span>ordered a living room furniture a while ago</span>
                                <div className="icon">
                                    <p>it came in a very good condition, the quality of the fabrics they chose ,the wood and the precision in the details was mesmerizing.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Testimonials_info" data-aos="fade-up" data-aos-duration={900} >
                            <div className="Card">
                                <h6>Mohamed Reda</h6>
                                <span>ordered a living room furniture a while ago</span>
                                <div className="icon">
                                    <p>it came in a very good condition, the quality of the fabrics they chose ,the wood and the precision in the details was mesmerizing.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Testimonials_info">
                            <div className="Card">
                                <h6>Mohamed Reda</h6>
                                <span>ordered a living room furniture a while ago</span>
                                <div className="icon">
                                    <p>it came in a very good condition, the quality of the fabrics they chose ,the wood and the precision in the details was mesmerizing.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Testimonials_info">
                            <div className="Card">
                                <h6>Mohamed Reda</h6>
                                <span>ordered a living room furniture a while ago</span>
                                <div className="icon">
                                    <p>it came in a very good condition, the quality of the fabrics they chose ,the wood and the precision in the details was mesmerizing.</p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>



                </Swiper>

            </div>
        </section>

    </>
}

export default Testimonials