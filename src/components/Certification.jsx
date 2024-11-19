import React, { useState ,useEffect } from 'react';
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import { PiLessThanThin, PiGreaterThanThin } from "react-icons/pi";

const Certification = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        cert1,
        cert2,
        cert3
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-slate-800 p-2 rounded-full shadow-lg"><PiLessThanThin /></button>
            <button onClick={nextSlide} className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-slate-800 p-2 rounded-full shadow-lg"><PiGreaterThanThin /></button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                ))}
            </div>
        </div>
    );
};

export default Certification;
