import React from "react";


// Define Type for Testimonial Item
interface TestimonialItem {
  id: number;
  name: string;
  review: string;
  rating: number;
}
// Testimonials Data
const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: "Rohan Sharma",
      review: "Snow Sikkim made my trip to Sikkim truly unforgettable! From the breathtaking views of Tsomgo Lake to the serene monasteries, every part of the journey was well-planned. The team ensured a smooth experience, and the hospitality was exceptional. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Naman Gupta",
      review: "Sikkim is a paradise, and Snow Sikkim made it even more special! The itinerary was perfect, covering Gangtok, Lachung, and Yumthang Valley. The guides were friendly and knowledgeable, making the trip both fun and insightful. Can’t wait to visit again!",
      rating: 5,
    },
    {
      id: 3,
      name: "Riya Singh",
      review: "A wonderful experience exploring Sikkim with Snow Sikkim! The arrangements were seamless, and the accommodations were comfortable. The only suggestion I have is to add more adventure activities. Otherwise, everything was fantastic!",
      rating: 4,
    },
    {
      id: 4,
      name: "Amit Verma",
      review: "Absolutely mesmerizing! Snow-capped mountains, lush valleys, and the peaceful vibes of monasteries – Sikkim is pure magic. Thanks to Snow Sikkim for organizing everything so perfectly. Highly recommend their services!",
      rating: 5,
    },
    {
      id: 5,
      name: "Sneha Kapoor",
      review: "One of the best travel experiences of my life! Snow Sikkim ensured top-notch service, from smooth transportation to excellent stay arrangements. The beauty of Sikkim is unmatched, and this trip was a dream come true!",
      rating: 5,
    },
  ];

// Testimonial Component
const Testimonial: React.FC = () => {
  return (
    <div className="bg-white text-red-500 py-12 px-6 border">
      <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>

      {/* Testimonials List */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg w-80 shadow-lg">
            <p className="text-xl text-red-900 font-semibold">{item.name}</p>

            {/* Star Ratings */}
            <div className="flex mt-2 mb-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={`text-yellow-400 ${index < item.rating ? "opacity-100" : "opacity-30"}`}>
                  ★
                </span>
              ))}
            </div>

            <p className="text-red-500">{item.review}</p>
          </div>
        ))}
      </div>

      {/* More Reviews Button */}
      <div className="flex justify-center mt-12">

          <button className= " border bg-white px-6 py-3 text-red-900 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
            More Reviews
          </button>

      </div>
    </div>
  );
};

export default Testimonial;