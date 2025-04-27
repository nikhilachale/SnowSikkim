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
  image: string;
  overview: string;
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
    <div className="pt-20">
      <div className="px-4 md:px-20 md:grid md:grid-cols-10 flex flex-col gap-4">
        {/* Tour Details */}
        <div className="md:col-span-7 p-4 sm:p-6 md:p-10 bg-white">
          <div>
            <div className="w-full md:w-3/4">
              <img
                src={tourData.image}
                alt="Tour Image"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="pt-2">
              <h4 className="text-sm sm:text-base font-normal text-cyan-500">
                {tourData.duration}
              </h4>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold pt-2 text-black">
                {tourData.title}
              </h1>
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold pt-7 text-black">
                Rs {tourData.price}
              </h1>
              <div className="flex flex-wrap gap-x-4">
                {tourData.location &&
                  tourData.location.split(", ").map((loc, index) => (
                    <h4
                      key={index}
                      className="text-xs sm:text-sm font-normal pt-1 text-gray-500"
                    >
                      {loc}
                    </h4>
                  ))}
              </div>
            </div>
          </div>

          <div>
            <div className="pt-10">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black pb-2">
                Overview
              </h1>
              <p className="text-sm sm:text-base text-slate-900">
                {tourData.overview}
              </p>
            </div>

            <div className="pt-10">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black pb-2">
                Terms & Conditions
              </h1>
              <ul className="text-sm sm:text-base text-slate-900 list-disc pl-5">
                <li>All guests need to carry five passport size photographs...</li>
                <li>For children, they need to carry five passport size...</li>
                <li>
                  The above-mentioned hotels will be confirmed as per
                  availability...
                </li>
                <li>Above rates are valid for Indian Nationals only.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:col-span-3 shadow-md p-4 md:pt-20 bg-white flex flex-col">
          <Form />
          <div className="bg-white rounded-2xl w-full p-6 text-center flex flex-col items-center">
            <h2 className="text-xl font-semibold mt-5">Why Choose Us?</h2>
            <h4 className="text-base text-gray-500 font-medium mt-2">
              What makes us different from other tour package companies.
            </h4>
            <div className="flex flex-col items-center gap-6 mt-4 w-full">
              <div className="bg-gray-100 p-6 rounded-lg text-center w-full">
                <h5 className="text-gray-900 text-lg font-semibold">
                  Best Travel Experts
                </h5>
                <p className="text-sm">
                  Our travel experts have core and intense knowledge...
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center w-full">
                <h5 className="text-gray-900 text-lg font-semibold">
                  24 X 7 On-Trip Assistance
                </h5>
                <p className="text-sm">
                  Our travel experts are just one call away...
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center w-full">
                <h5 className="text-gray-900 text-lg font-semibold">
                  Best Rate Guarantee
                </h5>
                <p className="text-sm">eSikkim Tourism ensures best rates...</p>
              </div>
            </div>
            <button className="bg-red-500 text-white px-3 py-1.5 rounded-lg mt-6 text-sm hover:bg-red-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}