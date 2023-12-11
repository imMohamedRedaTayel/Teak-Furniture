import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AOS from 'aos';




const Design = () => {
    return <>

        <section className="design">
            <div className="container">
                <div className="title">
                    <h3 data-aos="fade-right" data-aos-duration={500} >Design</h3>
                </div>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={2}
                    pagination={{
                        clickable: true,
                    }}

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
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}

                >
                    <SwiperSlide>
                        <div className="design_info" data-aos="fade-up" data-aos-duration={600} >
                            <div className="Card">
                                <div className="row ">
                                    <div className="col-md-6">
                                        <img className='w-100 ' src="/Image/Design/1.webp" alt="furniture" />
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="text">
                                            <h6>Modern bed room</h6>
                                            <p>Bedroom furniture with streamlined finish fore nobleness look Add luxury to your space with this bedroom furniture</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="design_info" data-aos="fade-up" data-aos-duration={800} >
                            <div className="Card">
                                <div className="row ">
                                    <div className="col-md-6">
                                        <img className='w-100 ' src="/Image/Design/2.webp" alt="furniture" />
                                    </div>
                                    <div className="col-md-6  ">
                                        <div className="text">
                                            <h6>Modern bed room</h6>
                                            <p>Bedroom furniture with streamlined finish fore nobleness look Add luxury to your space with this bedroom furniture</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="design_info">
                            <div className="Card">
                                <div className="row ">
                                    <div className="col-md-6">
                                        <img className='w-100 ' src="/Image/Design/5.webp" alt="furniture" />
                                    </div>
                                    <div className="col-md-6  ">
                                        <div className="text">
                                            <h6>Modern bed room</h6>
                                            <p>Bedroom furniture with streamlined finish fore nobleness look Add luxury to your space with this bedroom furniture</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="design_info">
                            <div className="Card">
                                <div className="row ">
                                    <div className="col-md-6">
                                        <img className='w-100 ' src="/Image/Design/1.webp" alt="furniture" />
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="text">
                                            <h6>Modern bed room</h6>
                                            <p>Bedroom furniture with streamlined finish fore nobleness look Add luxury to your space with this bedroom furniture</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="design_info">
                            <div className="Card">
                                <div className="row ">
                                    <div className="col-md-6">
                                        <img className='w-100 ' src="/Image/Design/2.webp" alt="furniture" />
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="text">
                                            <h6>Modern bed room</h6>
                                            <p>Bedroom furniture with streamlined finish fore nobleness look Add luxury to your space with this bedroom furniture</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </section>

    </>
}

export default Design