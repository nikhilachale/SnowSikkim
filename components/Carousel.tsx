"use client"
import React, { useState, useEffect } from 'react';

interface TourPackage {
  image: string;
  title: string;
  duration: string;
}

const tourPackages: TourPackage[] = [
  { image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-tour-boxx.jpg", title: "Gangtok Tour", duration: "03 Nights / 04 Days" },
  { image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/spellbinding-sikkim-tourr.jpg", title: "Gangtok Lachung Tour", duration: "04 Nights / 05 Days" },
  { image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/darjeeling-gangtok-family-tour.jpg", title: "Mesmerizing Meghalaya Tour", duration: "05 Nights / 06 Days" },
  { image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/Scintillating-Sikkim-box.jpg", title: "Himalayan Wonder Tour", duration: "07 Nights / 08 Days" },
  { image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-with-lachung-tour-boxx.jpg", title: "Goa Beach Special", duration: "03 Nights / 04 Days" },
  { image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/with-yak.jpg", title: "Kerala Backwater Delight", duration: "05 Nights / 06 Days" },
  { image: "https://www.esikkimtourism.in/wp-content/uploads/2019/06/green-lake-trek-n.jpg", title: "Royal Rajasthan Tour", duration: "08 Nights / 09 Days" },
  { image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/rumtek-monastery-side-boxx.jpg", title: "Andaman Island Escape", duration: "06 Nights / 07 Days" },
  { image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/with-yak.jpg", title: "Kashmir Paradise Tour", duration: "04 Nights / 05 Days" },
  { image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/amazing-family-holiday-sikkim-boxx.jpg", title: "Leh-Ladakh Adventure", duration: "07 Nights / 08 Days" }
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handlePrev = (): void => {
    setCurrentSlide((prev) => (prev === 0 ? tourPackages.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentSlide((prev) => (prev === tourPackages.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index: number): void => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full mt-16">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {tourPackages.map((pkg, index) => (
          <div key={index} className={`${currentSlide === index ? 'block' : 'hidden'} duration-900 ease-in-out`}>
            <img src={pkg.image} className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt={pkg.title} />
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4 bg-black/50 rounded-lg">
              <h2 className="text-sm md:text-xl font-bold">{pkg.title}</h2>
              <p className="text-xs md:text-base">{pkg.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute flex bottom-5 left-1/2 -translate-x-1/2 space-x-3">
        {tourPackages.map((_, index) => (
          <button key={index} className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-400'}`} onClick={() => handleIndicatorClick(index)}></button>
        ))}
      </div>
      <button className="absolute top-0 left-0 h-full px-4" onClick={handlePrev}>
        ◀
      </button>
      <button className="absolute top-0 right-0 h-full px-4" onClick={handleNext}>
        ▶
      </button>
    </div>
  );
};

export default Carousel;