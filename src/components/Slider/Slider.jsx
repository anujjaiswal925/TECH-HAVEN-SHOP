import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import "./Slider.css"

const Slider = () => {
    return (
        <div className='sliderdiv'>

            <Carousel>

                <Carousel.Item>
                    <img src="/slider_1.webp" loading="lazy" className="d-block sliderimg" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src="/slider_2.webp" loading="lazy" className="d-block sliderimg" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src="/slider_3.webp" loading="lazy" className="d-block sliderimg" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src="/slider_4.webp" loading="lazy" className="d-block sliderimg" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src="/slider_5.webp" loading="lazy" className="d-block sliderimg" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src="/slider_6.webp" loading="lazy" className="d-block sliderimg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/slider_7.webp" loading="lazy" className="d-block sliderimg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/slider_8.webp" loading="lazy" className="d-block sliderimg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/slider_9.webp" loading="lazy" className="d-block sliderimg" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/slider_10.webp" loading="lazy" className="d-block sliderimg" alt="" />
                </Carousel.Item>


            </Carousel>
        </div>
    )
}

export default Slider;