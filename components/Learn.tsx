"use client";
import { useParams } from "next/navigation";
import Form from "./Form";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import WhyUs from "./WhyUs";

interface TourData {
  id: number;
  duration: string;
  title: string;
  price: number;
  location: string; // API returns `location`, not `locations`
  image: string
  overview:string
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
    <div className="grid grid-cols-10 h-fit px-20">
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

        <div>
          <div className="pt-10 ">
            <h1 className=" text-3xl font-bold text-black  pb-2">
              Overview
            </h1>
            <p className=" text-base text-slate-900 ">
              The great Himalayas is the stop of amusement for a large number of Indian. Instead of going to Manali or Shimla, discover something more tranquil and adventurous. Living up to all the hype in the cosmopolitan capital, Gangtok is that paradise which comforts in mesmerising valleys and ascends up to the snowy mountain peaks. It is the place of natural wonders where the waterfalls gush across the ancient mountains to replenish its splendid scenery. You can unveil the reason behind the refuge of gods and saints when you glance at the magical beauty of the place. For the true travels like you, this holiday package can help in observing every inch of this magnificent landscape. So, let us begin with the course of this mystical journey..
            </p>
          </div>

          <div className=" pt-10">
            <h1 className=" text-3xl font-bold text-black  pb-2">
              Terms & Conditions
            </h1>
            <ul className="text-base text-slate-900 list-disc pl-5">
              <li>
                All guests need to carry five passport size photographs each along with valid government ID proof (voter ID card, driving license, passport). Aadhar card and PAN card will not be acceptable.
              </li>
              <li>
                For children, they need to carry five passport size photographs each along with their school ID cards.
              </li>
              <li>
                The above-mentioned hotels will be confirmed as per availability. We will confirm a similar category hotel if a room is not available in the same hotels.
              </li>
              <li>Above rates are valid for Indian Nationals only.</li>
            </ul>
          </div>

        </div>
      </div>


      {/* Form Section */}
      <div className="col-span-3 shadow-md pt-20 p-2 bg-white flex flex-col">
    <Form />
    <div className="bg-white rounded-2xl w-full max-w-3xl p-6 text-center flex flex-col items-center">
        <h2 className="text-xl font-semibold mt-5">Why Choose Us?</h2>
        <h4 className="text-base text-gray-500 font-medium mt-2">What makes us different from other tour package companies.</h4>
        <div className="flex flex-col items-center gap-6 mt-4 w-full">
            <div className="bg-gray-100 p-6 rounded-lg text-center w-full">
                <h5 className="text-gray-900 text-lg font-semibold">Best Travel Experts</h5>
                <p className="text-sm">Our travel experts have core and intense knowledge about Sikkim sector with over 10 years of experience that will help you choose the best possible itinerary as per your requirements.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center w-full">
                <h5 className="text-gray-900 text-lg font-semibold">24 X 7 On-Trip Assistance</h5>
                <p className="text-sm">Our travel experts are just one call away during your tour to help you with any kind of immediate assistance so that your tour is a more enjoyable and hassle-free tour.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center w-full">
                <h5 className="text-gray-900 text-lg font-semibold">Best Rate Guarantee</h5>
                <p className="text-sm">eSikkim Tourism ensures best rates to all our esteemed guests since we have our own hotels and fleet of vehicles and drivers and there is no third-party involvement. This ensures personalized service and best rates.</p>
            </div>
        </div>
        <button className="bg-red-500 text-white px-3 py-1.5 rounded-lg mt-6 text-sm hover:bg-red-600">
            Learn More
        </button>
    </div>
</div>


     
    </div>
    <div>
    </div>
    </div>
  );
}