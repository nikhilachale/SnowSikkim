"use client";
import React, { useState } from "react";

const PackageFilter: React.FC = () => {
  // State to store selected filter values
  const [filters, setFilters] = useState({
    type: "",
    duration: "",
    budget: "",
    hotelRating: "",
    destination: "",
  });

  // Function to handle filter change
  const handleChange = (category: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  return (
    <div className=" bg-white ">
      <h2 className="text-2xl font-semibold mb-4">Filter Packages</h2>

      {/* Package Type */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Type of Packages</h3>
        {["Best Seller", "Family/Leisure", "Honeymoon"].map((type) => (
          <label key={type} className="block">
            <input
              type="radio"
              name="type"
              value={type}
              checked={filters.type === type}
              onChange={() => handleChange("type", type)}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>

      {/* Duration */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Duration</h3>
        {["0 To 5 Nights", "6 To 8 Nights", "8 or More Nights"].map((duration) => (
          <label key={duration} className="block">
            <input
              type="radio"
              name="duration"
              value={duration}
              checked={filters.duration === duration}
              onChange={() => handleChange("duration", duration)}
              className="mr-2"
            />
            {duration}
          </label>
        ))}
      </div>

      {/* Budget */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Budget Per Person (In Rs.)</h3>
        {["Less Than 10,000", "10,000 - 20,000", "20,000 - 30,000"].map((budget) => (
          <label key={budget} className="block">
            <input
              type="radio"
              name="budget"
              value={budget}
              checked={filters.budget === budget}
              onChange={() => handleChange("budget", budget)}
              className="mr-2"
            />
            {budget}
          </label>
        ))}
      </div>

      {/* Hotel Star Ratings */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Hotel Star Ratings</h3>
        {["Standard", "Delux", "Super Delux", "Luxury"].map((rating) => (
          <label key={rating} className="block">
            <input
              type="radio"
              name="hotelRating"
              value={rating}
              checked={filters.hotelRating === rating}
              onChange={() => handleChange("hotelRating", rating)}
              className="mr-2"
            />
            {rating}
          </label>
        ))}
      </div>

      {/* Destinations */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Destinations</h3>
        {["Gangtok", "Pelling", "Darjeeling", "Lachen", "Lachung", "Kalimpong", "Bhutan"].map((destination) => (
          <label key={destination} className="block">
            <input
              type="radio"
              name="destination"
              value={destination}
              checked={filters.destination === destination}
              onChange={() => handleChange("destination", destination)}
              className="mr-2"
            />
            {destination}
          </label>
        ))}
      </div>

     
    </div>
  );
};

export default PackageFilter;