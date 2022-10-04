
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import bannerimg from './images/bannerimg.jpg';
import bannerimg1 from './images/bannerimg1.jpg';
import bannerimg2 from './images/bannerimg2.jpg';
import bannerimg3 from './images/bannerimg4.jpg';


const slides = [
    {
        image: bannerimg
    },

    {
        image: bannerimg1
    },

    {
        image: bannerimg2
    },

    {
        image: bannerimg3
    },
]

export default function Slider() {

    return (
        <div className="slider-container">
            <Slide>
                {slides.map((slides, index) => (
                    <div className="each-slide" key={index}>
                        <img src={slides.image} width={1366} />
                    </div>
                ))}
            </Slide>
        </div>

    );
}