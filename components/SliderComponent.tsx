 'use client'


import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { text: 'Search Medicines', img: '/search.png' },
    { text: 'Compare Medicine Prices', img: '/compare.png' },
    { text: 'Select Online Pharmacy', img: '/Choose.png' },
    { text: 'Buy Medicine Online', img: '/Shop.png' },
  ];

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container  bg-gradient-to-r bg-black relative z-0 h-96">
      <p className="ml-9 text-[26px] font-bold text-white text-center">
        How DriveHive Works
      </p>
      <div className="carousel">
        <div className="carousel-inner">
        {slides.map((slide, index) => (
  <div
    key={index}
    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
  >
    <img src={slide.img} alt="" />
    <p className="carousel-text">{slide.text}</p>
  </div>
))}
        </div>
        

        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 bg-white bg-opacity-75">
          <button
            className="bg-black bg-opacity-50 text-white rounded-full p-2"
            onClick={handlePrevClick}
          >
            <FaChevronLeft />
          </button>
          <button
            className="bg-black bg-opacity-50 text-white rounded-full p-2"
            onClick={handleNextClick}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <style jsx>{`
        .carousel-container {
          height: 500px;
        }
        .carousel {
          margin-top: 30px;
          position: relative;
          width: 300px;
          height: 300px;
          margin-left: 500px;
          overflow: hidden;
          border: 1px solid #ccc;
          border-radius: 10px;
        }
        .carousel-inner {
          display: flex;
          transition: transform 0.5s ease;
          transform: translateX(${-currentIndex * 100}%);
        }
        .carousel-item {
          min-width: 100%;
          box-sizing: border-box;
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          color: black;
          
           
        }
        .carousel-item p {
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          
        }
      
        .carousel-item img {
          width: 100%;
          height: auto;
        }
        .carousel-prev,
        .carousel-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }
        .carousel-prev {
          left: 10px;
        }
        .carousel-next {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Carousel;






   



