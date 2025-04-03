

type Trip = {
    id: number;
    location: string;
  };
  
  const tripDetails: Trip[] = [
    { id: 1, location: "Gangtok 3N" },
    { id: 2, location: "Gangtok 3N, Lachung 1N" },
    { id: 3, location: "Shillong 3N, Cherrapunji 2N" },
    { id: 4, location: "Darjeeling 3N, Gangtok 3N, Lachung 1N" },
    { id: 5, location: "Goa 3N" },
    { id: 6, location: "Munnar 2N, Alleppey 2N, Cochin 1N" },
    { id: 7, location: "Jaipur 2N, Udaipur 2N, Jodhpur 2N, Jaisalmer 2N" },
    { id: 8, location: "Port Blair 3N, Havelock 2N, Neil 1N" },
    { id: 9, location: "Srinagar 2N, Gulmarg 1N, Pahalgam 1N" },
    { id: 10, location: "Leh 3N, Nubra 2N, Pangong 2N" },
  ];
  
export default function Destinations()
{
    return (
        <div className="p-4 mt-20">
          <h2 className="text-xl font-bold text-center mb-4">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tripDetails.map((trip) => (
              <div
                key={trip.id}
                className="p-3 bg-blue-500 text-white text-center rounded-lg shadow-md"
              >
                {trip.location}
              </div>
            ))}
          </div>
        </div>
      );
}