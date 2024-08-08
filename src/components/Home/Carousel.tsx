import React, { useEffect, useRef } from 'react';
import './Carousel.css';

const carouselData = [
    { src: '/img1.jpg', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' },
    { src: '/img2.jpg', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' },
    { src: '/img3.jpg', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' },
    { src: '/img4.jpg', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' },
    { src: '/img5.jpg', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' },
    { src: '/img6.jpg', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' },
    { src: '/img7.jpg', author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'ANIMAL', description: 'Lorem ipsum dolor...' }
];

const Carousel: React.FC = () => {
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const thumbnailBorderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const nextDom = nextRef.current;
        const prevDom = prevRef.current;
        const carouselDom = carouselRef.current;
        const sliderDom = sliderRef.current;
        const thumbnailBorderDom = thumbnailBorderRef.current;

        if (!nextDom || !prevDom || !carouselDom || !sliderDom || !thumbnailBorderDom) {
            return;
        }

        const updateSliderAndThumbnails = (type: 'next' | 'prev') => {
            const sliderItemsDom = Array.from(sliderDom.querySelectorAll('.item'));
            const thumbnailItemsDom = Array.from(thumbnailBorderDom.querySelectorAll('.item'));

            if (type === 'next') {
                sliderDom.appendChild(sliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            } else {
                sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            }

            carouselDom.classList.add(type);
            setTimeout(() => {
                carouselDom.classList.remove(type);
            }, 500); // Adjust the duration to match your CSS transition
        };

        let runNextAuto: ReturnType<typeof setInterval> | undefined;

        nextDom.onclick = () => {
            updateSliderAndThumbnails('next');
        };

        prevDom.onclick = () => {
            updateSliderAndThumbnails('prev');
        };

        runNextAuto = setInterval(() => {
            nextDom.click();
        }, 7000);

        return () => {
            if (runNextAuto) clearInterval(runNextAuto);
        };
    }, []);

    return (
        <div className="carousel" ref={carouselRef}>
            <div className="list" ref={sliderRef}>
                {carouselData.map((item, index) => (
                    <div className="item" key={index}>
                        <img src={item.src} alt={`Slide ${index + 1}`} />
                        <div className="content">
                            <div className="author">{item.author}</div>
                            <div className="title">{item.title}</div>
                            <div className="topic">{item.topic}</div>
                            <div className="des">{item.description}</div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="thumbnail" ref={thumbnailBorderRef}>
                {carouselData.map((item, index) => (
                    <div className="item" key={index}>
                        <img src={item.src} alt={`Thumbnail ${index + 1}`} />
                        <div className="content">
                            <div className="title">Name Slider {index + 1}</div>
                            <div className="description">Description</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button id="prev" ref={prevRef}>‹</button>
                <button id="next" ref={nextRef}>›</button>
            </div>
        </div>
    );
};

export default Carousel;
