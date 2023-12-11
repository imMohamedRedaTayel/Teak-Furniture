import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';



const Service = () => {
    return <>


        <section className='Service' >
            <div className="container">
                <div className="Service_Info">
                    <div className="text">
                        <h3 data-aos="fade-right" data-aos-duration={500} >Our Service</h3>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
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
                            <div className="Card" data-aos="fade-up" data-aos-duration={700} >
                                <img className='w-100 ' src="/Image/Service/1.png" alt="" />
                                <div className="Card_text ">
                                    <h4>home furniture</h4>
                                    <ul>
                                        <li>bedrooms(master-kids)</li>
                                        <li>dining rooms</li>
                                        <li>living room</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Card" data-aos="fade-up" data-aos-duration={800} >
                                <img className='w-100 ' src="/Image/Service/2.png" alt="furniture" />
                                <div className="Card_text ">
                                    <h4>office furniture</h4>
                                    <ul>
                                        <li>desks</li>
                                        <li>storage cabinet</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Card" data-aos="fade-up" data-aos-duration={900} >
                                <img className='w-100 ' src="/Image/Service/3.png" alt="furniture" />
                                <div className="Card_text ">
                                    <h4>kitchens</h4>
                                    <ul>
                                        <li>kitchens design</li>
                                        <li>implement with all materials(HPL-POLYLAC- natural wood....)</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Card" data-aos="fade-up" data-aos-duration={700} >
                                <img className='w-100 ' src="/Image/Service/2.png" alt="furniture" />
                                <div className="Card_text ">
                                    <h4>kitchens</h4>
                                    <ul>
                                        <li>kitchens design</li>
                                        <li>implement with all materials(HPL-POLYLAC- natural wood....)</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Card" data-aos="fade-up" data-aos-duration={700} >
                                <img className='w-100 ' src="/Image/Service/1.png" alt="furniture" />
                                <div className="Card_text ">
                                    <h4>home furniture</h4>
                                    <ul>
                                        <li>bedrooms(master-kids)</li>
                                        <li>dining rooms</li>
                                        <li>living room</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Card" data-aos="fade-up" data-aos-duration={700} >
                                <img className='w-100 ' src="/Image/Service/2.png" alt="furniture" />
                                <div className="Card_text ">
                                    <h4>office furniture</h4>
                                    <ul>
                                        <li>desks</li>
                                        <li>storage cabinet</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Card" data-aos="fade-up" data-aos-duration={700} >
                                <img className='w-100 ' src="/Image/Service/1.png" alt="furniture" />
                                <div className="Card_text ">
                                    <h4>office furniture</h4>
                                    <ul>
                                        <li>desks</li>
                                        <li>storage cabinet</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        
    </>
}

export default Service


