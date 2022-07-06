import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,

        };
        return (
            <div className="carousel">
                <Slider arrows={false} {...settings}>
                    <div>
                        <a href="/"><img src="https://img.irroba.com.br/fit-in/1440x1440/filters:format(webp):quality(95)/lojalaro/catalog/assessoria/banners/2022/07-jul/06-07/banner-principal-dia-dos-pais-03.png" alt="pai e filho sentados em um banco" /> </a>
                    </div>
                    <div>
                        <a href="/"><img src="https://img.irroba.com.br/fit-in/1440x1440/filters:format(webp):quality(95)/lojalaro/catalog/assessoria/banners/2022/06-jun/29-06/banner-principal-envio.png" alt="entregador em uma moto" /></a>
                    </div>

                </Slider>
            </div>
        );
    }
}