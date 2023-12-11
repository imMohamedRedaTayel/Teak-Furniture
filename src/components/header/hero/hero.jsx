import React, { useState } from 'react';

const Hero = () => {
    const images = [
        "/Image/hero/1.webp",
        "/Image/hero/3.webp",
        "/Image/hero/4.webp",
        "/Image/hero/5.webp",
        "/Image/hero/6.webp",
        "/Image/hero/7.webp"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    

    const goToNextImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(images.length - 1);
        }
    };

    const goToPrevImage = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    return (
        <section className="Hero">
            <div className="container">
                <div className="hero_contact">
                    <img src={images[currentIndex]} alt="furniture" />
                    <h1>
                        Teak
                        <br /> Furniture
                    </h1>
                </div>
                    <div className="buttons">
                        <div className="next">
                            <div className="line">
                                <button
                                    onClick={goToPrevImage}
                                    disabled={currentIndex === images.length - 1}
                                    >
                                    Next
                                </button>
                            </div>
                            <div className="linee">
                                <button
                                    onClick={goToNextImage}
                                    disabled={currentIndex === 0}
                                    className="Prev mt-4"
                                >
                                    Prev
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Hero;
