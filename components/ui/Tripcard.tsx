"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const tripDetails = [
  { id: 1, duration: "03 Nights / 04 Days", title: "Gangtok Tour Package", price: 6200, location: "Gangtok 3N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-tour-boxx.jpg" },
  { id: 2, duration: "04 Nights / 05 Days", title: "Gangtok Lachung Tour", price: 8000, location: "Gangtok 3N, Lachung 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/spellbinding-sikkim-tourr.jpg" },
  { id: 3, duration: "05 Nights / 06 Days", title: "Mesmerizing Meghalaya Tour", price: 22000, location: "Shillong 3N, Cherrapunji 2N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/darjeeling-gangtok-family-tour.jpg" },
  { id: 4, duration: "07 Nights / 08 Days", title: "Himalayan Wonder Tour", price: 28000, location: "Darjeeling 3N, Gangtok 3N, Lachung 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/Scintillating-Sikkim-box.jpg" },
  { id: 5, duration: "03 Nights / 04 Days", title: "Goa Beach Special", price: 15500, location: "Goa 3N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-with-lachung-tour-boxx.jpg" },
  { id: 6, duration: "05 Nights / 06 Days", title: "Kerala Backwater Delight", price: 20000, location: "Munnar 2N, Alleppey 2N, Cochin 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/with-yak.jpg" },
  { id: 7, duration: "08 Nights / 09 Days", title: "Royal Rajasthan Tour", price: 35000, location: "Jaipur 2N, Udaipur 2N, Jodhpur 2N, Jaisalmer 2N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/06/green-lake-trek-n.jpg" },
  { id: 8, duration: "06 Nights / 07 Days", title: "Andaman Island Escape", price: 25000, location: "Port Blair 3N, Havelock 2N, Neil 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/rumtek-monastery-side-boxx.jpg" },
  { id: 9, duration: "04 Nights / 05 Days", title: "Kashmir Paradise Tour", price: 19000, location: "Srinagar 2N, Gulmarg 1N, Pahalgam 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/with-yak.jpg" },
  { id: 10, duration: "07 Nights / 08 Days", title: "Leh-Ladakh Adventure", price: 40000, location: "Leh 3N, Nubra 2N, Pangong 2N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/amazing-family-holiday-sikkim-boxx.jpg" }
];






export default function Tripcard() {
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/place/${id}`);
  };
  return (
    <div className="flex flex-col items-center gap-6 p-4 md:p-6">
    {tripDetails.map((trip) => (
      <div
        key={trip.id}
        className="w-full flex flex-row bg-white border p-3 md:p-4 rounded-lg shadow-md overflow-hidden"
      >
        {/* Left Side - Image */}
        <div className="w-1/3">
          <Image
            src={trip.image}
            alt={trip.title}
            width={300}
            height={200}
            className="w-full h-24 md:h-full rounded-sm object-cover"
          />
        </div>
  
        {/* Right Side - Trip Details */}
        <div className="w-2/3 px-3 md:px-4 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-[10px] md:text-xs text-cyan-500 font-medium">
              {trip.duration}
            </p>
            <h2 className="text-base md:text-xl text-black font-semibold py-1 md:py-2">
              {trip.title}
            </h2>
            <p className="text-[10px] md:text-xs text-black">Starting @</p>
            <h3 className="text-sm md:text-lg text-black font-semibold">
              {trip.price}
            </h3>
            <p className="text-xs md:text-sm text-black">{trip.location}</p>
          </div>
  
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-auto pt-3">
            <a href="#" className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-red-500 text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-red-600">
                Send Enquiry
              </button>
            </a>
            <button
              onClick={() => handleClick(trip.id)}
              className="w-full md:w-auto bg-white border text-black text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-red-400 hover:text-white"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
}