import React, { memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Updated logos data
const logos = [
    "https://www.thaytech.com/images/client/1.jpg",
    "https://www.thaytech.com/images/client/2.jpg",
    "https://www.thaytech.com/images/client/3.jpg",
    "https://www.thaytech.com/images/client/4.jpg",
    "https://www.thaytech.com/images/client/5.jpg",
    "https://www.thaytech.com/images/client/6.jpg",
    "https://www.thaytech.com/images/client/7.jpg",
    "https://www.thaytech.com/images/client/8.jpg",
    "https://www.thaytech.com/images/client/9.jpg",
    "https://www.thaytech.com/images/client/10.jpg",
    "https://www.thaytech.com/images/client/11.jpg",
    "https://www.thaytech.com/images/client/12.jpg",
    "https://www.thaytech.com/images/client/13.jpg",
    "https://www.thaytech.com/images/client/14.jpg",
    "https://www.thaytech.com/images/client/15.jpg",
    "https://www.thaytech.com/images/client/16.jpg",
    "https://www.thaytech.com/images/client/17.jpg",
    "https://www.thaytech.com/images/client/18.jpg",
    "https://www.thaytech.com/images/client/19.jpg",
    "https://www.thaytech.com/images/client/20.jpg",
    "https://www.thaytech.com/images/client/21.jpg",
    "https://www.thaytech.com/images/client/22.jpg",
    "https://www.thaytech.com/images/client/23.jpg",
    "https://www.thaytech.com/images/client/24.jpg"
];

const ClientLogos: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <section id="clients" className="py-16 bg-[#FAFDFF]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Our Clients
                </h2>
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="p-4 flex justify-center items-center">
                            <div className="relative w-full flex justify-center items-center">
                                <img 
                                    src={logo} 
                                    alt={`Client ${index + 1}`} 
                                    className="object-cover w-32 h-32 rounded-full border border-gray-300 bg-white shadow-md" 
                                    loading="lazy" 
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default memo(ClientLogos);
