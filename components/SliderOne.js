import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const SliderOne = () => {

    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
          swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
          swiper.slidePrev();
        }
    };

    const videoStyle = {
        width: "100%",
        height: "100%",
        marginTop: "-2em"
      };


    return (
        <div className="banner-wrapper">
            <section className="banner-one banner-carousel__one no-dots">

                <Swiper getSwiper={setSwiper}>
                    <div className="banner-one__slide banner-one__slide-one">
                        <div className="container">
                            <div className="banner-one__bubble-1"></div>
                            <div className="banner-one__bubble-2"></div>
                            <div className="banner-one__bubble-3"></div>
                            <video  className="" style={videoStyle} autoPlay loop>
                                <source src="/assets/videos/video_header_home_fisiocampus.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <h3 className="banner-one__title banner-one__light-color"><small>Un nuevo concepto <br />
                                        de formación <br /> Para fisioterapeutas</small></h3>
                                    
                                    <a href="#" className="thm-btn banner-one__btn">Suscribirse</a>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                </Swiper>
            </section>
            <div className="banner-carousel-btn">
                <div onClick={goPrev} className="banner-carousel-btn__left-btn banner-arrow"><i className="kipso-icon-left-arrow"></i></div>
                <div onClick={goNext} className="banner-carousel-btn__right-btn banner-arrow"><i className="kipso-icon-right-arrow"></i></div>
            </div>
            <div className="banner-one__cta">
                <div className="banner-one__cta-icon">
                    <i className="kipso-icon-black-graduation-cap-tool-of-university-student-for-head"></i>
                </div>
                <div className="banner-one__cta-title">
                    <h3 className="banner-one__cta-text"><a href="#">Vea testimonios de nuestros estudiantes</a></h3>
                </div>
                <div className="banner-one__cta-link">
                    <a href="#"><i className="kipso-icon-right-arrow"></i></a>
                </div>
            </div>
        </div>
    );
}
export default SliderOne;