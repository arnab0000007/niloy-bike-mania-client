import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item className="banner-overlay">
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>A bike on the road </h3>
                        <p>is worth two in the shed.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner-overlay">
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Four wheels move the body </h3>
                        <p>Two wheels move the soul</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner-overlay">
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Bikes don’t leak oil</h3>
                        <p>they mark their territory</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;