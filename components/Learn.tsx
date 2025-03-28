"use client";
import { useParams } from "next/navigation";
import Form from "./Form";
import { useEffect, useState } from "react";

interface TourData {
  id: number;
  duration: string;
  title: string;
  price: number;
  location: string; // API returns `location`, not `locations`
  image:string
}

export default function Learn() {
  const { id } = useParams();
  const [tourData, setTourData] = useState<TourData | null>(null);

  console.log("id = " + id);

  useEffect(() => {
    if (id) {
      fetch(`/api/v2/tour/${id}`)
        .then((res) => res.json())
        .then((data) => setTourData(data))
        .catch((err) => console.error("Error fetching trip:", err));
    }
  }, [id]);

  if (!tourData) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-10 h-screen px-20">
      {/* Tour Details */}
      <div key={tourData.id} className="col-span-7 p-10 bg-white">
        <div>
          <div className="w-3/4 h-1/2">
            <img src={tourData.image} alt="Tour Image" className="w-full h-auto object-cover" />
          </div>
          <div className="pt-2">
            <h4 className="text-base font-normal text-cyan-500">{tourData.duration}</h4>
            <h1 className="text-3xl font-bold pt-2 text-black">{tourData.title}</h1>
            <h1 className="text-2xl font-semibold pt-7 text-black">Rs {tourData.price}</h1>
            <div className="flex flex-row">
              {/* Fix: Convert `location` to array for mapping */}
              {tourData.location.split(", ").map((loc, index) => (
                <h4 key={index} className="text-sm font-normal pt-1 text-gray-500">
                  {loc}
                </h4>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Form Section */}
      <div className="col-span-3 shadow-md pt-20 p-2  bg-white">
        <Form />
      </div>
    </div>
  );
}