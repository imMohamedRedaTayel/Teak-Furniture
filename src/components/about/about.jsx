import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS on component mount
      }, []);

      

  return <>
    <section className="about">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img  data-aos="fade-up" data-aos-duration={600} src="/Image/Rectangle 8.png" alt="furniture" />
                </div>
                <div className="col-md-6  p-0">
                    <h3 data-aos="fade-right" data-aos-duration={500} >About Us</h3>
                    <div className="about_info   ">
                        <ul>
                            <li data-aos="fade-up" data-aos-duration={400} >We are teak .the name of tropical ,sustainable ,durable and hard wood.</li>
                            <li data-aos="fade-up" data-aos-duration={500} >We are Experts in furniture manufacture and wood products suitable for your space.</li>
                            <li data-aos="fade-up" data-aos-duration={600} >We care about quality details to guarantee the best experience to make you comfortable with magnificent designs .</li>
                            <li data-aos="fade-up" data-aos-duration={700} >We have 10 years of experience in furniture manufacture and wood products. We presented a lot of projects that made us gain the trust of our clients and their satisfaction.</li>
                            <li data-aos="fade-up" data-aos-duration={800} >In Cooperation with the best interior decor offices, We create furniture designed specially for you.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
}

export default About