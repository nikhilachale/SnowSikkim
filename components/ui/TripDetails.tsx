export default function TripDetails() {
    const tripDetails = [
      {
        id: 1,
        duration: "04 Nights / 05 Days",
        title: "Gangtok Darjeeling Tour Package",
        price: "RS: 12000",
        location: "Gangtok 3N",
      },
      {
        id: 2,
        duration: "06 Nights / 07 Days",
        title: "Sikkim Adventure Tour",
        price: "RS: 18000",
        location: "Gangtok 4N, Pelling 2N",
      },
    ];
  
    return (
      <div className="flex flex-col gap-6 p-4 bg-white">
        {tripDetails.map((trip) => (
          <div key={trip.id} className="p-4 border rounded-lg shadow-md">
            <p className="text-cyan-500 text-xs font-medium">{trip.duration}</p>
            <h2 className="text-2xl text-black font-semibold py-2">{trip.title}</h2>
            <p className="text-black text-xs">Starting @</p>
            <h3 className="text-lg text-black font-semibold">{trip.price}</h3>
            <p className="text-black text-sm">{trip.location}</p>
  
            <div className="flex flex-row items-center gap-4 mt-6">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Send Enquiry
              </button>
              <button className="bg-white border text-black px-4 py-2 rounded-lg hover:bg-gray-400">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }