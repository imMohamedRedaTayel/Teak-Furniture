import React from 'react'
import Modal from 'react-bootstrap/Modal';
import AOS from 'aos';



const Video = () => {


  return <>
    <section className='video' >
        <div className="container">
            <div className="title">
                <h3 data-aos="fade-right" data-aos-duration={500} >Videos</h3>
            </div>
            
            <Modal.Body className='w-100 ' > 
                 <div className="videoFrame">
                    <iframe  className='video_frame w-100 h-100  ' src={`https://www.youtube.com/embed/_bT-dK8RsbI?&autoplay=1`} title="Mr English is now live!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>    
            </Modal.Body>
            
        {/* </Modal> */}
        </div>
    </section>
  </>
}

export default Video