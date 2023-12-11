import React, { useState } from 'react'
import AOS from 'aos';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import OurGallaryMobile from '../ourGallaryMobile';



const OurGallary = () => {

    const [activeSlide, setActiveSlide] = useState(0);
    const [showData, setShowData] = useState(false);
    const [showMore, setShowMore] = useState(true);




    const slideImages = [
        "/Image/OurGallary/image2.png",
        "/Image/OurGallary/Image.png",
        "/Image/hero/5.webp",
    ];

    const handleSlideClick = (slideIndex) => {
        setActiveSlide(slideIndex);
        setShowData(true);
        setShowMore(false);
    };

    return <>

        <section className='Our_Gallary' >
            <div className='container' >
                <div className="title">
                    <h3 data-aos="fade-right" data-aos-duration={500} >Our Gallery</h3>
                </div>
            </div>
                <BrowserView>
            <div className='gallary'>
                <div className="contant-gallary" style={{ backgroundImage: `url(${slideImages[activeSlide]})` }}  >
                    
                    <div onClick={() => handleSlideClick(0)} className={`slide ${activeSlide === 0 ? 'active' : ''}`}>
                        {activeSlide != 0 ?
                            <div className={`more ${showMore ? '' : 'hidden'}`}>
                                <img src="/Image/OurGallary/add.svg" className='icon' alt="icon" />
                                <span> more </span>
                            </div>
                            : null}
                        { activeSlide === 0 && (
                            <div className='data_contant'>
                                <span> Room </span>
                                <h6>swera bedroom</h6>
                                <p>royal classic bedroom with cream color and touch of gold chose it if you want a luxury light classic and rich vibe</p>
                                <button className='btn_yellow' > contact us </button>
                            </div>
                        )}
                    </div>
                    
                    

                    <div onClick={() => handleSlideClick(1)} className={`slide ${activeSlide === 1 ? 'active' : ''}`}>
                        {activeSlide != 1 ?
                            <div className="more">
                                <img src="/Image/OurGallary/add.svg" className='icon' alt="icon" />
                                <span> more </span>
                            </div>
                            : null}
                        {showData && activeSlide === 1 && (
                            <div className='data_contant'>
                                <span> Room </span>
                                <h6>swera bedroom</h6>
                                <p>royal classic bedroom with cream color and touch of gold chose it if you want a luxury light classic and rich vibe</p>
                                <button className='btn_yellow' > contact us </button>
                            </div>
                        )}
                    </div>
                    
                    

                    <div onClick={() => handleSlideClick(2)} className={`slide ${activeSlide === 2 ? 'active' : ''}`}>
                        {activeSlide != 2 ?
                            <div className="more">
                                <img src="/Image/OurGallary/add.svg" className='icon' alt="icon" />
                                <span> more </span>
                            </div>
                            : null}
                        {showData && activeSlide === 2 && (
                            <div className='data_contant'>
                                <span> Room </span>
                                <h6>swera bedroom</h6>
                                <p>royal classic bedroom with cream color and touch of gold chose it if you want a luxury light classic and rich vibe</p>
                                <button className='btn_yellow' > contact us </button>
                            </div>
                        )}
                    </div>
                    

                </div>
                
            </div>
                </BrowserView>
                <MobileView>
                    <OurGallaryMobile/>
                </MobileView>

        </section >

    </>
}

export default OurGallary

