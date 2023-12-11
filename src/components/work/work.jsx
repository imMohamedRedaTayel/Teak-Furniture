import React, { useEffect } from 'react'
import AOS from 'aos';
import { useState } from 'react';


const Work = () => {
    // const images = [
    //     {
    //         text: "",
    //         imgs: [
    //             "/Image/hero/1.webp",
    //             ""
    //         ]
    //     }
    // ]
    const images = ["/Image/hero/1.webp", "/Image/hero/3.webp", "/Image/hero/4.webp", "/Image/hero/5.webp", "/Image/hero/6.webp", "/Image/hero/7.webp"];

    const [index, setIndex] = useState(0);
    const [number, setNumber] = useState(1)
    const [info, setInfo] = useState({
        title: "Neoclassic Mini Salon",
        description: "mini salon with welcome your visitors in classic way."
    });



    function handelNext() {
        if (index !== images.length - 1  ) {
            setIndex((prevIndex) => (prevIndex + 1) % images.length  );
            setNumber((num) => num + 1);
            updateInfo(index + 1);
        }
    }

    function handelPrev() {
        if (index !== 0) {
            setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setNumber((num) => Math.max(num - 1, 1));
            updateInfo(index - 1);
        }
    }

    const updateInfo = (currentIndex) => {
        const titles = [
            "Neoclassic Mini Salon",
            "Latin Room",
            "Linear Bedroom",
            "Retro Bedroom",
            "Azy Living",
            "Pearl Dining Room",
        ];
        const descriptions = [
            "mini salon with welcome your visitors in classic way.",
            "Modern room furniture using strips wood part of its design using mix of light and dark colors to make feel of great contrast for comfy and relaxing look.",
            "Bedroom furniture with line design as motif. Choose it to add more modern look to your room.",
            "retro bedroom furniture for vintage look to add ancient look in modern way.",
            "stunning living room furniture to add comfortable usage.",
            "Neoclassical dining room furniture choose it to add classic vibe to your room with modernity way.",
        ];

        setInfo({
            title: titles[currentIndex],
            description: descriptions[currentIndex]
        });
    };

    return <>


        <section className='work' >
            <div className="container">
                <div className="title">
                    <h3 data-aos="fade-right" data-aos-duration={500} >Our Work</h3>
                    <p data-aos="fade-up" data-aos-duration="3000" >Whether you’re choosing the perfect piece for your home, preparing for its delivery, or maintaining its beauty for years to come, our collection of guides and resources is here to help you every step of the way.</p>
                </div>
                <div className="Work_Info">
                    <span >0{number}</span>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="Work_Img">
                                <img className='Img1' src={images[index]} alt="furniture" />
                                <img className='Img2' src={images[(index + 1) % images.length]} alt="furniture" />
                            </div>
                        </div>
                        <div className="col-md-4 d-flex  align-items-center ">
                            <div className="Work_text" data-aos="fade-right" data-aos-duration="3000" >
                                <h6>{info.title}</h6>
                                <p>{info.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="buttonss">
                        <div className="item d-flex flex-column ">
                            <button onClick={handelNext} className='mb-2 nextt position-relative ' > Next </button>
                            <button onClick={handelPrev} className='Prevv position-relative ' > Prev </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>
}

export default Work