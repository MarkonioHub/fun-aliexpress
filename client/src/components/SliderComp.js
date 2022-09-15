import React, {useEffect, useState} from 'react'

import banner_1 from '../images/banner_1.webp'
import banner_2 from '../images/banner_2.webp'
import banner_3 from '../images/banner_3.webp'
import banner_4 from '../images/banner_4.webp'

const SliderComp = () => {

    const sliderData = [
        { image: banner_1 },
        { image: banner_2 },
        { image: banner_3 },
        { image: banner_4 },
    ]
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    const slides = sliderData.map((slide, i) =>
        <div className={"slider__item " + (i === activeSlideIndex ? 'slider__item_active' : '')} key={i}>
            <picture className="slider__picture">
                <img src={slide.image} alt="" className="slider__image"/>
            </picture>
        </div>
    );

    const sliderNav = sliderData.map((slide, index) =>
        <div
            onClick={ () => setActiveSlideIndex(index)}
            key={index}
            className={"slider__nav-item " + (index === activeSlideIndex ? 'slider__nav-item_active' : '')}>
        </div>
    );

    function setSlideIndex(mod) {
        if (mod === 'prev') {
            if (activeSlideIndex === 0) {
                setActiveSlideIndex(sliderData.length - 1)
                return
            }
            setActiveSlideIndex(activeSlideIndex-1)
        } else if (mod === 'next') {
            if (activeSlideIndex === sliderData.length - 1) {
                setActiveSlideIndex(0)
                return
            }
            setActiveSlideIndex(activeSlideIndex+1)
        }
    }

    return (
        <section className="slider">
            <div className="slider__cont cont">
                <div className="slider__wrapper">
                    <div className="slider__nav slider__nav_prev" onClick={ () => setSlideIndex('prev')}>
                        <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path transform="rotate(-180 5 8)" d="M0.792923 1.70711C0.402398 1.31658 0.402398 0.683418 0.792923 0.292893C1.18345 -0.0976311 1.81661 -0.0976311 2.20714 0.292893L9.20714 7.29289C9.59766 7.68342 9.59766 8.31658 9.20714 8.70711L2.20714 15.7071C1.81661 16.0976 1.18345 16.0976 0.792923 15.7071C0.402398 15.3166 0.402398 14.6834 0.792923 14.2929L7.08582 8L0.792923 1.70711Z" fill="#fff"/>
                        </svg>
                    </div>
                    <div className="slider__list">
                        {slides}
                    </div>
                    <div className="slider__nav slider__nav_next" onClick={ () => setSlideIndex('next')}>
                        <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path transform="rotate(-180 5 8)" d="M0.792923 1.70711C0.402398 1.31658 0.402398 0.683418 0.792923 0.292893C1.18345 -0.0976311 1.81661 -0.0976311 2.20714 0.292893L9.20714 7.29289C9.59766 7.68342 9.59766 8.31658 9.20714 8.70711L2.20714 15.7071C1.81661 16.0976 1.18345 16.0976 0.792923 15.7071C0.402398 15.3166 0.402398 14.6834 0.792923 14.2929L7.08582 8L0.792923 1.70711Z" fill="#fff"/>
                        </svg>
                    </div>
                    <div className="slider__nav-list">
                        {sliderNav}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderComp;
