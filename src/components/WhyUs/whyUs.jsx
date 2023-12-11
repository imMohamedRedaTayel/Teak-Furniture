import React from 'react'
import AOS from 'aos';

// furniture

const WhyUs = () => {
  return <>
    <section className="whyUs">
        <div className="container">
            <div className="WhyUs_Info">
                <h3 data-aos="fade-right" data-aos-duration={500} >Why Us</h3>
                <p>We work on both residential and commercial interior design projects that require a creative approach, We have the expertise to create unique and comfortable designs for you, Our team knows that design can be stressful for a client and we do everything we can to make it as easy as possible, We listen to your needs, ideas and input. Most importantly, we make it exciting and enjoyable for our customers.</p>

            </div>
            <div className="WhyUs_Card">
                <div className="row">
                    <div className="col-md-3 col-6" data-aos="fade-up" data-aos-duration={400} >
                        <div className="Card">
                            <img src="/Image/whyUs/MagicWand.png" alt="furniture" />
                            <h6>custom designs</h6>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 " data-aos="fade-up" data-aos-duration={500} >
                        <div className="Card">
                            <img src="/Image/whyUs/PaintBrush.png" alt="furniture" />
                            <h6>custom designs</h6>
                        </div>
                    </div>
                    <div className="col-md-3 col-6" data-aos="fade-up" data-aos-duration={600} >
                        <div className="Card">
                            <img src="/Image/whyUs/CircleWavyCheck.png" alt="furniture" />
                            <h6>custom designs</h6>
                        </div>
                    </div>
                    <div className="col-md-3 col-6" data-aos="fade-up" data-aos-duration={700} >
                        <div className="Card">
                            <img src="/Image/whyUs/CurrencyDollar.png" alt="furniture" />
                            <h6>custom designs</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
}

export default WhyUs