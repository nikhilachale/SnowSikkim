"use client";
import Image from "next/image";
import img from "../images/img.jpg";

export default function Card() {
    return (
        <div className="bg-white rounded-2xl shadow-lg max-w-sm p-4 text-center">
            {/* Image with proper height */}
            <Image 
                src={img} 
                alt="Trip" 
                width={200} 
                height={200} 
                className="w-full h-40 rounded-sm object-cover"
            />
            
            <h2 className="text-xl font-bold mt-4">Card Heading</h2>
            <p className="text-gray-600 mt-2">This is a sample subheading for the card.</p>

            {/* Button with better spacing */}
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 mb-2 hover:bg-red-600">
                Learn More
            </button>
        </div>
    );
}