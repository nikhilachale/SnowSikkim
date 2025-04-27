"use client";
type Trip = {
  id: number;
  location: string;
  image: string; // Added image property
};

const tripDetails: Trip[] = [
  { id: 1, location: "Gangtok 3N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-tour-boxx.jpg" },
  { id: 2, location: "Gangtok 3N, Lachung 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/spellbinding-sikkim-tourr.jpg" },
  { id: 3, location: "Shillong 3N, Cherrapunji 2N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/darjeeling-gangtok-family-tour.jpg" },
  { id: 4, location: "Darjeeling 3N, Gangtok 3N, Lachung 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/Scintillating-Sikkim-box.jpg" },
  { id: 5, location: "Goa 3N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-with-lachung-tour-boxx.jpg" },
  { id: 6, location: "Munnar 2N, Alleppey 2N, Cochin 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/with-yak.jpg" },
  { id: 7, location: "Jaipur 2N, Udaipur 2N, Jodhpur 2N, Jaisalmer 2N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/06/green-lake-trek-n.jpg" },
  { id: 8, location: "Port Blair 3N, Havelock 2N, Neil 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/rumtek-monastery-side-boxx.jpg" },
  { id: 9, location: "Srinagar 2N, Gulmarg 1N, Pahalgam 1N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/amazing-family-holiday-sikkim-boxx.jpg" },
  { id: 10, location: "Leh 3N, Nubra 2N, Pangong 2N", image: "https://www.esikkimtourism.in/wp-content/uploads/2019/03/Scintillating-Sikkim-box.jpg" },
];

export default function Destinations() {
  return (
    <div className="p-4 mt-20">
      <h2 className="text-xl font-bold text-center mb-4">Popular Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tripDetails.map((trip) => (
          <div
            key={trip.id}
            className="p-3 bg-white text-center rounded-lg shadow-md"
          >
            <img
              src={trip.image}
              alt={trip.location}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-black">{trip.location}</h3>
            <button
              onClick={() => window.location.href = `/place/${trip.id}`}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}