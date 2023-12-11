import React from 'react'

const Footer = () => {
    return <>

        <footer className='footer' >
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer_Img">
                            <a>
                                <img src="/Image/logo.png" alt="Furniture" />
                            </a>
                            <div className="text">
                                <h6>Teak Furniture</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer_contact">
                                    <a href="">
                                        <img src="/Image/footer/Envelope.svg" alt="" />
                                        TeakFurniture@example.com
                                    </a>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="footer_contact">
                                    <a href="">
                                        <img src="/Image/footer/PhoneCall.svg" alt="" />
                                        +201033631133
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="footer_contact">
                                    <a href="">
                                        <img src="/Image/footer/MapPin.svg" alt="" />
                                        Next to Sidi Mousa, Sama Zoual Pharmacy, Jadila, Mansoura.
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="footer_contact">
                                    <span>Follow us on social media</span>
                                    <div className="scl">
                                        <a href="">
                                            <img src="/Image/footer/FacebookLogo.svg" alt="" />
                                        </a>
                                        <a href="">
                                            <img src="/Image/footer/InstagramLogo.svg" alt="" />
                                        </a>
                                        <a href="">
                                            <img src="/Image/footer/WhatsappLogo.svg" alt="" />
                                        </a>
                                        <a href="">
                                            <img src="/Image/footer/TiktokLogo.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="footer_contact">
                                    <a href="">
                                        <img src="/Image/footer/Envelope.svg" alt="" />
                                        TeakFurniture@example.com
                                    </a>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                <div className="CopyRight">
                    <span>© 2023. All rights reserved.</span>
                </div>
            </div>
        </footer>

    </>
}

export default Footer