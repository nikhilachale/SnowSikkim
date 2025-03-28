'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LogoData {
  url: string;
  title: string;
  link: string;
}

const logoData: LogoData[] = [
  { url: 'https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-tour-boxx.jpg', title: 'Gangtok Tour', link: 'https://www.esikkimtourism.in' },
  { url: 'https://www.esikkimtourism.in/wp-content/uploads/2019/03/spellbinding-sikkim-tourr.jpg', title: 'Spellbinding Sikkim', link: 'https://www.esikkimtourism.in' },
  { url: 'https://www.esikkimtourism.in/wp-content/uploads/2019/03/darjeeling-gangtok-family-tour.jpg', title: 'Tsomgo Lake', link: 'https://www.esikkimtourism.in' },
  { url: 'https://www.esikkimtourism.in/wp-content/uploads/2019/03/Scintillating-Sikkim-box.jpg', title: 'Lachung & Lachen', link: 'https://www.esikkimtourism.in' },
  { url: 'https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-with-lachung-tour-boxx.jpg', title: 'Pelling Tour', link: 'https://www.esikkimtourism.in' },
  { url: 'https://www.esikkimtourism.in/wp-content/uploads/2019/03/with-yak.jpg', title: 'Baba Mandir', link: 'https://www.esikkimtourism.in' },
  { url: 'https://www.esikkimtourism.in/wp-content/uploads/2019/06/green-lake-trek-n.jpg', title: 'Ravangla', link: 'https://www.esikkimtourism.in' },
  { url: 'https://www.esikkimtourism.in/wp-content/uploads/2019/03/rumtek-monastery-side-boxx.jpg', title: 'Nathula Pass', link: 'https://www.esikkimtourism.in' },
  { url: 'https://www.esikkimtourism.in/wp-content/uploads/2019/03/with-yak.jpg', title: 'Yuksom', link: 'https://www.esikkimtourism.in' },
  { url: 'https://www.esikkimtourism.in/wp-content/uploads/2019/03/amazing-family-holiday-sikkim-boxx.jpg', title: 'Gurudongmar Lake', link: 'https://www.esikkimtourism.in' },
];

const LogoCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.5; // 30% of width
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  const prevSlide = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.5; // 30% of width
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleImageClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="w-full relative">
      <div className="relative w-full bg-white py-4 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <div ref={carouselRef} className="flex overflow-x-auto scroll-smooth hide-scrollbar">
          {logoData.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-2 sm:mx-4 lg:mx-6 flex justify-center items-center cursor-pointer"
              onClick={() => handleImageClick(slide.link)}
            >
              <Image
                src={slide.url}
                alt={slide.title}
                width={300}
                height={180}
                className="object-cover h-24 sm:h-32 lg:h-40 xl:h-48 rounded-lg"
                priority
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-1/2 left-0 z-30 transform -translate-y-1/2 flex items-center justify-center h-10 w-10 bg-black/40 rounded-full hover:bg-black/60 focus:outline-none"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        <button
          type="button"
          className="absolute top-1/2 right-0 z-30 transform -translate-y-1/2 flex items-center justify-center h-10 w-10 bg-black/40 rounded-full hover:bg-black/60 focus:outline-none"
          onClick={nextSlide}
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default LogoCarousel;